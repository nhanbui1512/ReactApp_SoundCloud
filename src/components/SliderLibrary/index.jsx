import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import Post from 'components/Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
const cx = classNames.bind(styles);

const posts = [
  {
    name: 'Ai Đưa Em Về - 1nG x VoVanDuc (Official MV - link in Description )',
    track: 'Related track',
    image:
      'https://al.sndcdn.com/labs-9b6a3bc2-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBNT1JFX09GX1dIQVRfWU9VX0xJS0UKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjYwMTM4NDM2MiIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjUxMjI0ODczNCIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjY2OTMyNzI1MSIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjczNTM1MTA5NyIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjQzNzg4OTc5OCIK',
  },
  {
    name: 'QUERRY - QNT x TRUNG TRẦN ft RPT MCK (Prod By RASTZ)',
    track: 'Related track',
    image:
      'https://al.sndcdn.com/labs-5e723669-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBNT1JFX09GX1dIQVRfWU9VX0xJS0UKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEyNzkyMDczMDMiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMTU2NzY4MzMwIgp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MTU3MjM1MDU4NCIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjE1MTY2NTIyNzIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMTg1NTQ5ODk1Igo=',
  },
  {
    name: 'Weekly',
    track: 'Related track',
    image:
      'https://al.sndcdn.com/labs-9576a784-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMDY0ODgzMjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo1MjEwMjA4MzkiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo4ODEyMTc5NDYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3Nzk1Mjc2MDAiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMDg2MTQ0OTEzIgo=',
  },

  {
    name: 'pov: it is 2am and you are studying',
    track: 'Discovery Playlists',
    image: 'https://i1.sndcdn.com/artworks-Zxf4PcBkqmXPzn5P-v3hjdA-t200x200.jpg',
  },

  {
    name: 'Focus Brainwaves',
    track: 'Discovery Playlists',
    image: 'https://i1.sndcdn.com/artworks-pfo2S0KRtLgvqp9E-IGQwyw-t200x200.jpg',
  },

  {
    name: 'Weekly',
    track: 'Related track',
    image:
      'https://al.sndcdn.com/labs-9576a784-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMDY0ODgzMjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo1MjEwMjA4MzkiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo4ODEyMTc5NDYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3Nzk1Mjc2MDAiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMDg2MTQ0OTEzIgo=',
  },

  {
    name: 'Weekly',
    track: 'Related track',
    image:
      'https://al.sndcdn.com/labs-9576a784-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMDY0ODgzMjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo1MjEwMjA4MzkiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo4ODEyMTc5NDYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3Nzk1Mjc2MDAiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMDg2MTQ0OTEzIgo=',
  },
  {
    name: 'Weekly',
    track: 'Related track',
    image:
      'https://al.sndcdn.com/labs-9576a784-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMDY0ODgzMjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo1MjEwMjA4MzkiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo4ODEyMTc5NDYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3Nzk1Mjc2MDAiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMDg2MTQ0OTEzIgo=',
  },
  {
    name: 'Weekly',
    track: 'Related track',
    image:
      'https://al.sndcdn.com/labs-9576a784-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMDY0ODgzMjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo1MjEwMjA4MzkiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo4ODEyMTc5NDYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3Nzk1Mjc2MDAiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMDg2MTQ0OTEzIgo=',
  },
  {
    name: 'Weekly',
    track: 'Related track',
    image:
      'https://al.sndcdn.com/labs-9576a784-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMDY0ODgzMjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo1MjEwMjA4MzkiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo4ODEyMTc5NDYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3Nzk1Mjc2MDAiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMDg2MTQ0OTEzIgo=',
  },
];
const totalPage = Math.ceil(posts.length / 4) - 1;
function SliderLibrary() {
  const listRef = useRef();
  const [page, setPage] = useState(0);

  let distanceSlide = page * 734;
  if (page === totalPage) {
    const residual = posts.length % 4;
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
          {posts.map((item, index) => (
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
