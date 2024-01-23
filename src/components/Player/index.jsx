import classNames from 'classnames/bind';
import styles from './Player.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faForwardStep,
  faPlay,
  faShuffle,
  faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';
import { IoIosRepeat } from 'react-icons/io';
const cx = classNames.bind(styles);

function Player() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('control-wrapper')}>
          <div className={cx('player-btn')}>
            <FontAwesomeIcon className={cx('player-icon')} icon={faBackwardStep} />
          </div>
          <div className={cx('player-btn')}>
            <FontAwesomeIcon className={cx('player-icon')} icon={faPlay} />
          </div>
          <div className={cx('player-btn')}>
            <FontAwesomeIcon className={cx('player-icon')} icon={faForwardStep} />
          </div>
          <div className={cx('player-btn')}>
            <FontAwesomeIcon className={cx('player-icon')} icon={faShuffle} />
          </div>
          <div className={cx('player-btn')}>
            <IoIosRepeat width={24} height={24} />
          </div>
          <div
            style={{
              flexGrow: 1,
              textAlign: 'center',
            }}
          >
            Progress
          </div>
          <div
            style={{
              marginLeft: 0,
              marginRight: 12,
            }}
            className={cx('player-btn')}
          >
            <FontAwesomeIcon className={cx('player-icon')} icon={faVolumeHigh} />
          </div>
          <div
            style={{
              width: 360,
            }}
          >
            Information
          </div>
        </div>
      </div>
    </div>
  );
}
export default Player;
