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
import { useContext, useEffect, useRef, useState } from 'react';
import { BsRepeat1 } from 'react-icons/bs';
import Information from './Information';
import 'tippy.js/animations/scale.css';
import HeadlessTippy from '@tippyjs/react/headless';
import { StorageContext } from 'context/Storage';

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
  const storage = useContext(StorageContext);

  const music = storage.currentMusic;

  const [percent, setPercent] = useState(0); // Bài hát đã load được bao nhiêu %
  const [volume, setVolume] = useState(100); // Volume hiện tại của media
  const [isMuted, setIsMuted] = useState(false); // Mute Media
  const [isPlaying, setIsPlaying] = useState(false); // Media có đang phát nhạc hay không
  const [isShuffle, setIsShuffle] = useState(false); // Media có đang trộn lẫn hay không
  const [loop, setLoop] = useState(0); // Chế độ lặp

  const audioRef = storage.audioRef; // thẻ audio
  const currentTimeRef = useRef();

  // xử lý khi người dùng nhấn thay đổi vòng lặp
  const handleChangeLoopMode = () => {
    if (loop === loopModes.length - 1) {
      return setLoop(0);
    }
    setLoop(loop + 1);
  };

  // Cập nhật thời gian hiện tại của bài hát
  const handlePlayingAudio = (e) => {
    const currentPercent = (e.target.currentTime / e.target.duration) * 100;

    let currentTime = e.target.currentTime;

    let realTime = new Date(currentTime * 1000);
    let secondStr = String(realTime.getSeconds()).padStart(2, '0');
    let minutesStr = String(realTime.getMinutes()).padStart(2, '0');
    currentTimeRef.current.innerText = `${minutesStr}:${secondStr}`;

    setPercent(currentPercent);
  };

  useEffect(() => {
    audioRef.current.loop = loopModes[loop].isLoop;
  }, [loop, audioRef]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('control-wrapper')}>
          <div className={cx('player-btn')}>
            <FontAwesomeIcon className={cx('player-icon')} icon={faBackwardStep} />
          </div>
          <div
            onClick={() => {
              if (audioRef.current.readyState !== 0) {
                isPlaying ? audioRef.current.pause() : audioRef.current.play();
              }
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
                  ref={currentTimeRef}
                  style={{
                    fontSize: 12,
                    color: 'var(--orange-primary)',
                  }}
                >
                  00:00
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
                    let percent = e.target.value;
                    if (audioRef.current.readyState !== 0) {
                      const secondTarget = (audioRef.current.duration * percent) / 100;
                      audioRef.current.currentTime = secondTarget;
                    }
                    setPercent(percent);
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
                  {music.durationTime || '00:00'}
                </span>
              </div>
            </div>
          </div>

          {/* Thẻ Audio */}
          <audio
            onTimeUpdate={handlePlayingAudio}
            onEnded={() => {
              setIsPlaying(false);
            }}
            onPlay={() => {
              setIsPlaying(true);
            }}
            onPause={() => {
              setIsPlaying(false);
            }}
            volume={0.2}
            ref={audioRef}
            id="audio"
            src={music.linkFile}
          ></audio>

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
                    onChange={(e) => {
                      audioRef.current.volume = e.target.value / 100;
                      setVolume(e.target.value);
                    }}
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
                audioRef.current.muted = !isMuted;
              }}
            >
              <FontAwesomeIcon
                className={cx('player-icon')}
                icon={isMuted ? faVolumeXmark : faVolumeHigh}
              />
            </div>
          </HeadlessTippy>
          {/* Information */}
          <div className={cx(['information-container', 'pd_0_8'])}>
            <Information data={storage.currentMusic} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Player;
