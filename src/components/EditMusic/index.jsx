import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './EditMusic.module.scss';
import Image from 'components/Image';

const cx = classNames.bind(styles);

function EditMusic(props) {
  return (
    <div className="flex flex-col">
      <div>
        <Button
          className={cx('download-btn')}
          outline
          textBlack
          leftIcon={<FontAwesomeIcon icon={faDownload} />}
        >
          Download file
        </Button>
      </div>
      <div className="py-[14px]">
        <div className={cx('tab-container', 'flex')}>
          <div className={cx('tab-btn', 'active')}>Basic info</div>
          <div className={cx('tab-btn')}>Metadata</div>
          <div className={cx('tab-btn')}>Permission</div>
          <div className={cx('tab-btn')}>Advanced</div>
        </div>
        <div className="flex pt-5 gap-4">
          <div>
            <Image
              className={cx('song-image')}
              src="https://i1.sndcdn.com/artworks-yqMUvdzzM63pYSSx-c3G9Rg-t500x500.png"
              alt=""
            />
          </div>
          <div className="flex-1">Right</div>
        </div>
      </div>
    </div>
  );
}

EditMusic.propTypes = {};

export default EditMusic;
