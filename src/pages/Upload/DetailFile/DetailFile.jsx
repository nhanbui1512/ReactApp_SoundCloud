import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import Upload from '../Upload';
import styles from './DetailFile.module.scss';
import { createSongs } from 'services/firebase/firestore/songs';

const cx = classNames.bind(styles);

function DetailFile({ selectedFile }) {
  const genre = [
    'Country',
    'Blue',
    'Classical',
    'Latin',
    'EDM',
    'Indie',
    'Jazz',
    'Hip hop',
    'Folk',
    'Funk',
    'Disco',
    'Pop',
    'Rock',
    'Metal'
  ]
  const [image, setImage] = useState('');
  const [isCancel, setIsCancel] = useState(false);
  const [textDes, setTextDes] = useState('');
  const [textArt, setTextArt] = useState('');
  const [textGen, setTextGen] = useState('');
  const [nameAudio, setNameAudio] = useState('');
  const [selectedValue, setSelectedValue] = useState(30);
  const inputref = useRef();
  const [showCustomField, setShowCustomField] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setImage(e.target.files[0]);
    }
  };

  const handleSave = () => {
    if (nameAudio !== '') {
      createSongs(nameAudio, textArt, textGen, null, selectedFile, textDes, image);
      alert('Uploading...');
      setIsCancel(true);
    } else {
      alert('Please enter the name of audio!');
    }
  };

  return (
    <div>
      {isCancel ? (
        <Upload />
      ) : (
        <div className={cx('wrapper')}>
          <div className={cx('main')}>
            <div className={cx('content')}>
              <div className={cx('filds_img')}>
                {image ? (
                  <img className={cx('img')} src={URL.createObjectURL(image)} alt="" accept="image/*"/>
                ) : (
                  <img className={cx('img')} alt="" accept="image/*"/>
                )}
                <div className={cx('img_choose')}>
                  <input ref={inputref} type="file" onChange={handleFileChange} />
                  <button
                    onClick={(e) => {
                      inputref.current.click();
                    }}
                  >
                    Upload image
                  </button>
                </div>
              </div>
              <div className={cx('filds_data')}>
                <div className={cx('fields_title')}>
                  <div>
                    <span className={cx('fieldTitle', 'dis')}>Title</span>
                    <span className={cx('fielLabel', 'dis')}> *</span>

                  </div>
                  <input type="text" placeholder="Name" value={nameAudio} onChange={(e) => setNameAudio(e.target.value)}></input>
                </div>
                <div className={cx('fields_permalink')}>
                  <span className={cx('fieldTitle', 'dis')}>Permalink</span>
                  <span className={cx('fielLabel', 'dis')}> *</span>
                  <div className={cx('permalinkTextfield')}>
                    <span className={cx('sc_text_light', 'dis')}>soundcloud.com/huy-le-127238369/</span>
                    <input type="text" className={cx('field_input')} />
                  </div>
                </div>
                <div className={cx('artist')}>
                  <span className={cx('fieldArtist', 'dis')}>Artist</span>
                  <input type="text" placeholder='Artist' value={textArt} onChange={(e) => setTextArt(e.target.value)}/>
                </div>
                <div className={cx('genrerow')}>
                  <span className={cx('fieldTitle', 'dis')}>Genre</span>
                  {/* <input type="text" placeholder='Genre' value={textGen} onChange={(e) => setTextGen(e.target.value)}/> */}
                  <select
                    value={selectedValue}
                    onChange={(e) => {
                      setSelectedValue(e.target.value);
                      setTextGen(e.target.value)
                      if (e.target.value === "10") { // Show custom field if "10" (Custom) is selected
                          setShowCustomField(true);
                      } else {
                          setShowCustomField(false);
                      }
                    }}
                  >
                    <optgroup>
                      <option value={''}>None</option>
                      <option value={10}>Custom</option>
                    </optgroup>
                    <optgroup label="Music">
                      {genre.map((genreOption, index) => (
                        <option key={index} value={genreOption}>
                            {genreOption}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  {showCustomField && (
                      <div className={cx('fields_customGen')}>
                          <span className={cx('fieldTitle', 'dis')}>Custom genre</span>
                          <input type="text" placeholder="Custom genre" onChange={(e) => setTextGen(e.target.value)} />
                      </div>
                  )}
                </div>
                <div className={cx('fields_title')}>
                  <span className={cx('fieldTitle', 'dis')}>Additional tags</span>
                  <input
                    type="text"
                    placeholder="Add tags to describe the genre and mood of your track"
                  />
                </div>
                <div className={cx('fields_description')}>
                  <span className={cx('fieldTitle', 'dis')}>Description</span>
                  <textarea type="text" placeholder="Description your track"  value={textDes} onChange={(e) => setTextDes(e.target.value)}/>
                </div>
              </div>
            </div>

            <div className={cx('activeUpload')}>
              <div className={cx('label')}>
                <span className={cx('fielLabel', 'dis')}>* </span>
                <span className={cx('fieldTitle', 'dis')}>Required fields</span>
              </div>
              <button
                className={cx('butCancel')}
                onClick={(e) => {
                  setIsCancel(true);
                }}
              >
                Cancel
              </button>
              <button className={cx('butSave')} onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
          <div className={cx('uploadFooter')}>
            <div className={cx('footer')}>
              <p>
                By uploading, you confirm that your sounds comply with our
                <a href="/terms-of-use"> Terms of Use </a>
                and you don't infringe anyone else's rights.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default DetailFile;
