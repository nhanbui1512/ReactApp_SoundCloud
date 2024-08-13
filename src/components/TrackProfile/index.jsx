import styles from '../FeedLeft/FeedLeft.module.scss';
import classNames from 'classnames/bind';

//import dataFeed from './dataFeed';
import TrackSong from './TrackSong/TrackSong';
import { Link } from 'react-router-dom';
import Popup from 'components/Popup';
import { useState } from 'react';
import Image from 'components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button';
//import apiHandleFeed from 'api/apiHandleFeed';

const cx = classNames.bind(styles);
const TrackPlaylist = ({ trackList }) => {
  const [deleteData, setDeleteData] = useState({});
  const handleDelete = (data) => {
    setDeleteData(data);
  };
  return (
    <>
      <ul className={cx('feed__modul-list')}>
        {trackList.songs?.length > 0 ? (
          trackList.songs?.map((song, index) => (
            <TrackSong onDelete={handleDelete} dataSong={song} key={song.id} />
          ))
        ) : (
          <div style={{ textAlign: 'center' }} className={cx('info-music-list')}>
            <div className={cx('router-view')}></div>
            <p style={{ textAlign: 'center', marginTop: '72px' }}>Bạn chưa có bài hát nào</p>
            <p style={{ textAlign: 'center', color: 'blue' }} className={cx('p-title')}>
              Hãy tạo bài hát ngay nào.
            </p>
            <Link
              to="/upload"
              style={{ backgroundColor: 'orange', textAlign: 'center' }}
              className={cx('btn-route-upload')}
            >
              Upload
            </Link>
          </div>
        )}
      </ul>
      <Popup onClose={() => setDeleteData({})} open={Object.keys(deleteData).length !== 0}>
        <div className="mb-[5px]">
          <div className="flex">
            <div className="w-40 h40 mr-[15px]">
              <Image src="https://i1.sndcdn.com/avatars-000656606957-0tv0jo-t200x200.jpg" />
            </div>
            <div className="sound-content flex pt-[7px] mb-[6px]">
              <div className="flex">
                <div>
                  <button
                    className={cx([
                      'w-9 h-9 flex items-center justify-center mr-[5px]',
                      'popup_del-btn',
                    ])}
                  >
                    <FontAwesomeIcon fontSize={16} icon={faPlay} />
                  </button>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[12px] text-gray-400">Nhân Bùi</span>
                  <Link className="text-[15px] text-gray-600">
                    <span>MỘNG CHIỀU XUÂN Sáng Tác Ngọc Bích Nhạc Xuân Xưa Trước 1975</span>
                  </Link>
                </div>
                <div className="ml-[5px]">
                  <div>
                    <span className="text-[12px] text-gray-300">6 months ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-5 flex flex-col">
          <h2 className="text-[16px] font-bold">Deleting your track?</h2>
          <div className="text-[12px] mb-[15px]">
            Next Pro artists can{' '}
            <span className="text-orange font-semibold">replace their files</span> and keep their
            stats
          </div>
          <div className="flex gap-[18px]">
            <div className="flex-1 p-[18px] flex flex-col">
              <div className="text-[12px] mb-[15px]">
                Replace your master track and keep your plays, likes, and comments.
              </div>
              <div className="text-[12px] mb-[15px]">Available to Next Pro subscribers</div>
              <Button primary className={cx('replace-btn')}>
                Replace file
              </Button>
            </div>
            <div className="flex-1 p-[18px] flex flex-col">
              <div className="text-[12px] mb-[15px] flex-1">
                Delete this track and lose your plays, likes, and comments forever.
              </div>
              <div className="flex gap-4">
                <button onClick={() => setDeleteData({})} className={cx('popup-option-btn')}>
                  Cancel
                </button>
                <button className={cx('popup-option-btn')}>Delete forever</button>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};
export default TrackPlaylist;
