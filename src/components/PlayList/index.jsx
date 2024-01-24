import classNames from 'classnames/bind';
import styles from './PlayList.module.scss';
import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PlayListItem from './Item';

const cx = classNames.bind(styles);

function PlayList({ handleHidden, className }) {
  return (
    <div
      className={cx('wrapper', {
        [className]: className,
      })}
    >
      <div className="col flex_1">
        <div className={cx('header')}>
          <div className={cx(['flex_1', 'title'])}>Next up</div>
          <Button small outline className={cx('clear-btn')}>
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
          }}
        >
          <div className={cx('play-list-container')}>
            <div className={cx('col')}>
              <PlayListItem active />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
              <PlayListItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlayList;
