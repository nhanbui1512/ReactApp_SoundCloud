import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import styles from './Upload.module.scss';
import DetailFile from './DetailFile/DetailFile';

const cx = classNames.bind(styles);

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const inputref = useRef();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    const test = e.target.files[0];

    if (test) {
      if (test.name.endsWith('.mp3')) {
        setSelectedFile(test);
      } else {
        setSelectedFile(null);
        alert('Please select the audio file');
      }
    }
  };
  return (
    <div>
      {selectedFile && <DetailFile selectedFile={selectedFile}/>}
      {selectedFile !== null || (
        <div className={cx('wrapper')}>
          <div className={cx('uploadmain')}>
            <div className={cx('upload_content')}>
              <h1>Drag and drop your tracks & albums here</h1>
              <div className={cx('upload_choose')}>
                <input ref={inputref} type="file"  onChange={handleFileChange} accept="audio/*"/>
                <button
                  className={cx('but_chooseFile')}
                  onClick={(e) => {
                    inputref.current.click();
                  }}
                >
                  <span>or choose files to upload</span>
                </button>
              </div>
            </div>
            <p className={cx('sc_text_secondary')}>
              <label htmlFor="">Provide FLAC, WAV, ALAC, or AIFF for highest audio quality.</label>
              <a
                href="https://help.soundcloud.com/hc/articles/115003452847-Uploading-requirements#typeOfFile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about lossless HD.
              </a>
            </p>
          </div>
          <div className={cx('uploadNotice')}>
            <div className={cx('uploadFooter')}>
              <p className={cx('footer')}>
                <a href="https://help.soundcloud.com/hc/articles/115003452847#typeOfFile">
                  Supported file types and sizes -
                </a>
                <a href="https://help.soundcloud.com/hc/articles/115003561208">
                  {' '}
                  Upload troubleshooting tips -
                </a>
                <a href="https://help.soundcloud.com/hc/sections/115001112968-SoundCloud-s-Copyright-policies">
                  {' '}
                  Copyright FAQs
                </a>
              </p>
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
        </div>
      )}
    </div>
  );
}
export default Upload;
