import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import Post from 'components/Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
const cx = classNames.bind(styles);

function SliderLibrary({ data = [] }) {
  const totalPage = Math.ceil(data.length / 4) - 1;
  const listRef = useRef();
  const [page, setPage] = useState(0);

  let distanceSlide = page * 734;
  if (page === totalPage) {
    const residual = data.length % 4;
    distanceSlide -= (4 - residual) * 190;
  }
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
          className={cx('list-gallery')}
          ref={listRef}
        >
          {data.map((item, index) => (
            <Post key={index} data={item} />
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
          className={cx('right-wraper')}
        >
          <button className={cx('slide-btn')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      {page !== 0 && (
        <div
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
export default SliderLibrary;
