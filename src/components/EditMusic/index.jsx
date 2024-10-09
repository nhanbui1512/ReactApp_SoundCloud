import { faCircleExclamation, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './EditMusic.module.scss';
import Image from 'components/Image';
import { Divider } from '@mui/material';

const cx = classNames.bind(styles);

function EditMusic({ onClose }) {
  const handleClose = () => {
    if (onClose) onClose();
  };
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
          <div className="flex-1">
            <div className="flex flex-col mb-[10px]">
              <span className={cx('label')}>Title*</span>
              <input className="border-[#ccc] border-solid rounded-[4px] px-[7px] py-1 text-[14px] border-[1px]" />
            </div>
            <div className="flex flex-col mb-[10px]">
              <span className={cx('label')}>Permalink*</span>
              <span className="text-[14px] text-[#999]">soundcloud.com/nhanbui1512/</span>
            </div>

            <div className="flex flex-col mb-[10px]">
              <span className={cx('label')}>Genre*</span>
              <span className="text-[14px] text-[#999]">soundcloud.com/nhanbui1512/</span>
            </div>

            <div className="flex flex-col mb-[10px]">
              <span className={cx('label')}>Description</span>
              <textarea
                rows={5}
                className="border-[#ccc] border-solid rounded-[4px] px-[7px] py-1 text-[14px] border-[1px]"
              />
            </div>

            <div className="flex flex-col mb-[10px]">
              <div className="text-[#999] text-[12px]">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <span className="ml-2">Editing the caption doesn’t post the track again.</span>
              </div>
              <span className={cx('label')}>Privacy:</span>
              <div>
                <label className="text-[12px] text-[#333] flex items-start gap-1 font-bold">
                  <input type="radio" value="public" name="radio4673" />
                  <div className=""></div>
                  <span className="radioGroup__label">
                    <span className="radioGroup__labelText sc-text-h4" data-public="">
                      Public
                    </span>
                  </span>
                </label>

                <label className="text-[12px] text-[#333] flex items-start gap-1 font-bold">
                  <input type="radio" value="public" name="radio4673" />
                  <div className=""></div>
                  <span className="radioGroup__label">
                    <span className="radioGroup__labelText sc-text-h4" data-public="">
                      Private
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider component={'div'} />

      <div className="px-5 py-[25px] flex justify-between">
        <div className="text-[var(--orange-primary)] text-[12px] flex items-center">
          <span>*</span> <span className=" text-[#333] font-semibold">Required fileds</span>
        </div>

        <div>
          <Button primary className={'rounded-sm'}>
            Save changes
          </Button>
          <Button onClick={handleClose} text textBlack>
            Cancel
          </Button>
        </div>
      </div>
      <Divider component={'div'} />
      <div className="px-5 py-[25px] text-[12px]">
        <strong className="sc-text-h4">Important:</strong> By sharing, you confirm that your track
        complies with our{' '}
        <a className="text-[#38d] font-semibold" href="/terms-of-use">
          Terms of use
        </a>{' '}
        and you don't infringe anyone else's rights. If in doubt, refer to the{' '}
        <a className="text-[#38d] font-semibold" href="/pages/copyright">
          Copyright information
        </a>{' '}
        pages and{' '}
        <a
          className="text-[#38d] font-semibold"
          target="blank"
          href="http://copyright.help.soundcloud.com/"
        >
          FAQs
        </a>{' '}
        before uploading.{' '}
      </div>
    </div>
  );
}

EditMusic.propTypes = {};

export default EditMusic;
