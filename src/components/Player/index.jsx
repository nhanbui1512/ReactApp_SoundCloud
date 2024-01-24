import classNames from 'classnames/bind';
import styles from './Player.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
  faShuffle,
  faVolumeHigh,
  faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import { IoIosRepeat } from 'react-icons/io';
import { useState } from 'react';
import { BsRepeat1 } from 'react-icons/bs';
import Information from './Information';
import 'tippy.js/animations/scale.css';
import HeadlessTippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

const loopModes = [
  {
    isLoop: false,
  },
  {
    isLoop: true,
    type: 'song',
  },
  {
    isLoop: true,
    type: 'playList',
  },
];

function Player() {
  const [percent, setPercent] = useState(0);
  const [volume, setVolume] = useState(25);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [loop, setLoop] = useState(0);

  const handleChangeLoopMode = () => {
    if (loop === loopModes.length - 1) {
      return setLoop(0);
    }
    setLoop(loop + 1);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('control-wrapper')}>
          <div className={cx('player-btn')}>
            <FontAwesomeIcon className={cx('player-icon')} icon={faBackwardStep} />
          </div>
          <div
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
            className={cx('player-btn')}
          >
            <FontAwesomeIcon className={cx('player-icon')} icon={isPlaying ? faPause : faPlay} />
          </div>
          <div className={cx('player-btn')}>
            <FontAwesomeIcon className={cx('player-icon')} icon={faForwardStep} />
          </div>
          <div
            className={cx('player-btn')}
            onClick={() => {
              setIsShuffle(!isShuffle);
            }}
          >
            <FontAwesomeIcon
              style={{}}
              className={cx('player-icon', {
                isActive: isShuffle,
              })}
              icon={faShuffle}
            />
          </div>
          <div onClick={handleChangeLoopMode} className={cx('player-btn')}>
            <div
              className={cx('row', {
                isActive: loopModes[loop].isLoop,
              })}
            >
              {loopModes[loop].type === 'song' ? (
                <BsRepeat1 fontSize={21} />
              ) : (
                <IoIosRepeat width={24} height={24} />
              )}
            </div>
          </div>
          <div
            style={{
              flexGrow: 1,
              marginRight: 12,
            }}
          >
            <div className={cx('progress-wrapper')}>
              <div className={cx('time-wrapper')}>
                <span
                  style={{
                    fontSize: 12,
                    color: 'var(--orange-primary)',
                  }}
                >
                  0:00
                </span>
              </div>
              <div
                style={{
                  '--current-percent': `${percent}%`,
                }}
                className={cx('time-line-wrapper')}
              >
                <div className={cx('time-line-background')}></div>
                <input
                  onChange={(e) => {
                    setPercent(e.target.value);
                  }}
                  className={cx('time-line-input')}
                  type="range"
                />
                <div className={cx('progress')}></div>
                <div className={cx('time-line-dot')}></div>
              </div>
              <div className={cx('time-wrapper')}>
                <span
                  style={{
                    fontSize: 12,
                  }}
                >
                  3:24
                </span>
              </div>
            </div>
          </div>

          {/* volume */}

          <HeadlessTippy
            interactive
            offset={[0, 50]}
            delay={[0, 200]}
            render={() => (
              <div className={cx('volume-control')}>
                <div
                  style={{
                    margin: '0 10px',
                    width: '100%',
                    position: 'relative',
                    '--volume-percent': `${volume}%`,
                  }}
                >
                  <input
                    onChange={(e) => setVolume(e.target.value)}
                    className={cx('input-volume')}
                    type="range"
                  />
                  <div className={cx('volume-progress')}></div>
                  <div className={cx('volume-dot')}></div>
                </div>
              </div>
            )}
          >
            <div
              style={{
                marginLeft: 0,
                marginRight: 12,
              }}
              className={cx('player-btn')}
              onClick={() => {
                setIsMuted(!isMuted);
              }}
            >
              <FontAwesomeIcon
                className={cx('player-icon')}
                icon={isMuted ? faVolumeXmark : faVolumeHigh}
              />
            </div>
          </HeadlessTippy>

          <div
            className="pd_0_8"
            style={{
              width: 360,
              height: '100%',
            }}
          >
            <Information />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Player;
