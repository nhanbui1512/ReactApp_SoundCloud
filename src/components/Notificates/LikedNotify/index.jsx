import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './LikedNotify.module.scss';
import Image from 'components/Image';
const cx = classNames.bind(styles);

const LikedNotify = memo(({ songData }) => {
  return (
    <div className={cx('wrapper')}>
      <div className="w-[44px] h-[44px]">
        <Image className="w-full h-full" src={songData.thumbNail} />
      </div>
      <div className="pl-1 py-1 flex flex-col">
        <span className="text-[12px] text-gray-700 font-bold">{songData.name}</span>
        <p className="text-[12px] text-gray-700">
          was saved to <span className="font-bold text-sky-500">your library</span>
        </p>
      </div>
    </div>
  );
});

export default LikedNotify;
