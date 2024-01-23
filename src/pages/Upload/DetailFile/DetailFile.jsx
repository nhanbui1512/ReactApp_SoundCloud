import classNames from 'classnames/bind';
import styles from './DetailFile.module.scss';

const cx = classNames.bind(styles);

function DetailFile() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('main')}>
        <div className={cx('content')}>
          <div className={cx('filds_img')}>
            <div className={cx('img')}></div>
            <div className={cx('img_choose')}>
              <button>Upload image</button>
            </div>
          </div>
          <div className={cx('filds_data')}>
            <div className={cx('fields_title')}>
              <span className={cx('fieldTitle')}>Title</span>
              <span className={cx('fielLabel')}> *</span>
              <input type="text"></input>
            </div>
            <div className={cx('fields_permalink')}>
              <span className={cx('fieldTitle')}>Permalink</span>
              <span className={cx('fielLabel')}> *</span>
              <div className={cx('permalinkTextfield')}>
                <span className={cx('sc_text_light')}>soundcloud.com/huy-le-127238369/</span>
                <input type="text" className={cx('field_input')} />
              </div>
            </div>
            <div className={cx('genrerow')}>
              <span className={cx('fieldTitle')}>Genre</span>
            </div>
            <div className={cx('fields_title')}>
              <span className={cx('fieldTitle')}>Additional tags</span>
              <input
                type="text"
                placeholder="Add tags to describe the genre and mood of your track"
              />
            </div>
            <div className={cx('fields_description')}>
              <span className={cx('fieldTitle')}>Description</span>
              <textarea type="text" placeholder="Description your track" />
            </div>
          </div>
        </div>

        <div className={cx('activeUpload')}>
          <div className={cx('label')}>
            <span className={cx('fielLabel')}>* </span>
            <span className={cx('fieldTitle')}>Required fields</span>
          </div>
          <button className={cx('butCancel')}>Cancel</button>
          <button className={cx('butSave')}>Save</button>
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
  );
}
export default DetailFile;
