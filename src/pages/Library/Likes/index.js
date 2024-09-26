import classNames from 'classnames/bind';

import styles from './Likes.moudle.scss';
import Gallery from 'components/Gallery';
import React, { useEffect, useState } from 'react';
import { getSongsLiked } from 'api/songs';
import InfiniteScroll from 'react-infinite-scroll-component';

const cx = classNames.bind(styles);

const Likes = () => {
  const [page, setPage] = useState(1);
  const [songs, setSongs] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    getSongsLiked({ page: page, perPage: 18 })
      .then((res) => {
        let likedSongs = res.data?.docs?.map((likedData) => likedData.song);
        setSongs((prevItems) => [...prevItems, ...likedSongs]);
        if (res.data?.nextPage === null) setHasMore(false);
        setPage((prevPage) => {
          var newPage = prevPage + 1;
          return newPage;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMoreData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={cx('wrapper mb-12')}>
      <div className={cx('header')}>
        <h2 className={cx('title')}>Hear the tracks you’ve liked:</h2>
      </div>
      <div className={cx('trending-wrapper')}>
        <div>
          <InfiniteScroll
            className={cx('container')}
            dataLength={songs.length} // Số lượng phần tử hiện tại trong danh sách dữ liệu
            next={fetchMoreData} // Callback được gọi khi người dùng cuộn đến cuối trang
            hasMore={hasMore} // Còn dữ liệu để load không
          >
            {songs.map((item, index) => (
              <Gallery key={index} data={item} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Likes);
