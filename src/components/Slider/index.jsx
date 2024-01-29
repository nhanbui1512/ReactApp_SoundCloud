import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import Gallery from 'components/Gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
const cx = classNames.bind(styles);

function Slider({ data = [] }) {
  const totalPage = Math.ceil(data.length / 4) - 1;
  const listRef = useRef();
  const [page, setPage] = useState(0);
  const [vibrateRight, setVibrateRight] = useState(false);
  const [vibrateLeft, setVibrateLeft] = useState(false);

  let distanceSlide = 0;

  if (page === 1) {
    distanceSlide = page * 734;
  } else {
    distanceSlide = page * 750;
  }
  // if (page === totalPage) {
  //   const residual = data.length % 4;
  //   distanceSlide -= (4 - residual) * 190;
  // }
  return (
    <div className={cx('wrapper')}>
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            '--distance-slide': `-${distanceSlide}px`,
          }}
          className={cx('list-gallery', {
            vibrateRight: vibrateRight,
            vibrateLeft: vibrateLeft,
          })}
          ref={listRef}
        >
          {data.map((item, index) => (
            <Gallery key={index} data={item} />
          ))}
        </div>
      </div>

      {page !== totalPage && (
        <div
          onClick={() => {
            if (page < totalPage) {
              const newPage = page + 1;
              setPage(newPage);
            }
          }}
          onMouseOver={() => {
            setVibrateRight(true);
            setTimeout(() => {
              setVibrateRight(false);
            }, 500);
          }}
          className={cx('right-wraper')}
        >
          <button className={cx('slide-btn')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      {page !== 0 && (
        <div
          onMouseOver={() => {
            setVibrateLeft(true);
            setTimeout(() => {
              setVibrateLeft(false);
            }, 500);
          }}
          onClick={() => {
            if (page > 0) {
              const newPage = page - 1;
              setPage(newPage);
            }
          }}
          className={cx('left-wraper')}
        >
          <button className={cx('slide-btn')}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
      )}
    </div>
  );
}
export default Slider;
