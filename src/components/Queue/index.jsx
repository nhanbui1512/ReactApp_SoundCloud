import classNames from 'classnames/bind';
import styles from './Queue.module.scss';
import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import SwitchButton from 'components/SwitchButton';
import { useContext, useState } from 'react';
import { StorageContext } from 'context/Storage';

import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import ListSong from './ListSong';

const cx = classNames.bind(styles);

function PlayList({ handleHidden, className }) {
  const storage = useContext(StorageContext);
  const [setCurrentPlayList] = [storage.setCurrentPlayList];
  const [autoPlay, setAutoPlay] = useState(false);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  // nhấn giữ 250ms và dung sai của cảm ứng (di chuyển chênh lệch 5px )
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 500,
    },
  });

  const mySensors = useSensors(mouseSensor, touchSensor);
  function swapItem(arr, start, end) {
    let startIndex = arr.findIndex((item) => start === item.id);
    let endIndex = arr.findIndex((item) => end === item.id);

    if (start !== -1 && end !== -1) {
      [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];
    }
    return [...arr];
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;
    const start = active.id;
    const end = over.id;
    if (start !== end) {
      let newArr = swapItem(storage.currentPlayList, start, end);
      storage.setCurrentPlayList(newArr);
    }
  }
  const handleClear = (e) => {
    setCurrentPlayList((prev) => {
      var newState = prev.filter((song) => song.id === storage.currentMusic.id);
      return newState;
    });
    storage.setIndexSong(0);
  };

  return (
    <div
      className={cx('wrapper', {
        [className]: className,
      })}
    >
      <div className="col flex_1">
        <div className={cx('header')}>
          <div className={cx(['flex_1', 'title'])}>Next up</div>
          <Button onClick={handleClear} small outline className={cx('clear-btn')}>
            Clear
          </Button>
          <div onClick={handleHidden} className={cx('close-btn')}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div
          className="flex_1"
          style={{
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <div className={cx('play-list-container')}>
            <DndContext sensors={mySensors} onDragEnd={handleDragEnd}>
              <ListSong items={storage.currentPlayList} />
            </DndContext>
          </div>
        </div>
        <div className={cx('footer')}>
          <div className={cx('col')}>
            <div className={cx('title')}>Autoplay Station</div>
            <div className={cx('description')}>
              Hear related tracks based on what’s playing now.
            </div>
          </div>
          <div>
            <SwitchButton
              isChecked={autoPlay}
              onSwitch={(e) => {
                setAutoPlay(!autoPlay);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlayList;
