import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import Upload from '../Upload';
import styles from './DetailFile.module.scss';
import { createSong, createSongs } from 'api/songs';

const cx = classNames.bind(styles);

function DetailFile({ selectedFile }) {
  const genre = [
    'Classical',
    'EDM',
    'Indie',
    'Jazz',
    'Hip hop',
    'Funk',
    'Disco',
    'Pop',
    'Rock'
  ]
  
  const [image, setImage] = useState('');
  const [isCancel, setIsCancel] = useState(false);
  const [textDes, setTextDes] = useState('');
  const [textArt, setTextArt] = useState('');
  const [gengreId, setGengreId] = useState('');
  const [nameAudio, setNameAudio] = useState('');
  const [selectedValue, setSelectedValue] = useState(30);
  const inputref = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setImage(e.target.files[0]);
    }
  };

  const handleSave = () => {
    try {
      if (nameAudio !== '') {
        // Gọi API createSongs với các thông tin từ state
        const response = createSong({
          songName: nameAudio,
          description: textDes,
          artistName: textArt,
          audioFile: selectedFile,
          imageFile: image,
          genreId: gengreId,
        });

        // Xử lý kết quả từ API nếu cần
        console.log(response);

        alert('Uploading...');
        setIsCancel(true);
      } else {
        alert('Please enter the name of audio!');
      }
    } catch (error) {
      console.error('Error creating song:', error);
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
                  <select
                    value={selectedValue}
                    onChange={(e) => {
                      setSelectedValue(e.target.value);
                      setGengreId(e.target.selectedIndex)
                    }}
                  >
                    <optgroup>
                      <option value={''}>None</option>
                    </optgroup>
                    <optgroup label="Music">
                      {genre.map((genreOption, index) => (
                        <option key={index} value={genreOption}>
                            {genreOption}
                        </option>
                      ))}
                    </optgroup>
                  </select>
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
