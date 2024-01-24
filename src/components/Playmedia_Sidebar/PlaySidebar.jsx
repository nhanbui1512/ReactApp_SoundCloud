// import styles from './PlaySidebar.module.scss';
// import classNames from 'classnames/bind';
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faEllipsis,
//   faHeart,
//   faListOl,
//   faListUl,
//   faPause,
//   faPlay,
// } from '@fortawesome/free-solid-svg-icons';

// import HeadlessTippy from '@tippyjs/react/headless';
// import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css';
// import 'tippy.js/animations/scale-subtle.css';
// import { MenuItem, Wrapper } from 'components/DropDownMenu';
// import { AddToList } from 'components/Icons';
// import { useEffect, useRef, useState } from 'react';

// const cx = classNames.bind(styles);

// const PlaySidebar = () => {
//   const [moreMenu, setMoreMenu] = useState(false);
//   const moreBtnRef = useRef();
//   const [isLiked, setIsLiked] = useState(false);
//   const [isPlay, setIsPlay] = useState(false);
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       // Kiểm tra xem sự kiện click có xảy ra ngoài nút button không
//       if (moreBtnRef.current && !moreBtnRef.current.contains(event.target)) {
//         // Thực hiện hành động khi click ra ngoài
//         setMoreMenu(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <div className={cx('Playsidebar__modul-item-container')}>
//         <div
//           className={cx('sidebar__modul-item-play')}
//           onClick={() => {
//             setIsPlay(!isPlay);
//           }}
//         >
//           <FontAwesomeIcon
//             className={cx('sidebar__modul-play-icon')}
//             icon={isPlay ? faPause : faPlay}
//           />
//         </div>
//         <div className={cx("sidebar__modul-item-option")}>
//           <Tippy animation={"scale-subtle"} content={"Like"}>
//             <>
//               <span
//                 className={cx("sidebar__modul-option-btn")}
//                 onClick={() => {
//                   setIsLiked(!isLiked);
//                 }}
//               >
//                 <FontAwesomeIcon
//                   className={cx("", { liked: isLiked })}
//                   icon={faHeart}
//                 />
//               </span>
//             </>
//           </Tippy>
//           <HeadlessTippy
//             visible={moreMenu}
//             interactive
//             placement="bottom-start"
//             offset={[0, 0]}
//             delay={300}
//             render={(atr) => {
//               return (
//                 <Wrapper className={cx("more-menu")}>
//                   <MenuItem
//                     className={cx("menu-item")}
//                     icon={
//                       <FontAwesomeIcon
//                         className={cx("menu-item-icon")}
//                         icon={faListUl}
//                       />
//                     }
//                     separate
//                   >
//                     Add to Next up
//                   </MenuItem>
//                   <MenuItem
//                     className={cx("menu-item")}
//                     icon={<AddToList className={cx("menu-item-icon")} />}
//                   >
//                     Add to Playlist
//                   </MenuItem>
//                   <MenuItem
//                     className={cx("menu-item")}
//                     icon={<AddToList className={cx("menu-item-icon")} />}
//                   >
//                     Repost
//                   </MenuItem>
//                   <MenuItem
//                     className={cx("menu-item")}
//                     icon={<AddToList className={cx("menu-item-icon")} />}
//                   >
//                     Copylink
//                   </MenuItem>
//                 </Wrapper>
//               );
//             }}
//           >
//             <span
//               ref={moreBtnRef}
//               onClick={(e) => {
//                 setMoreMenu(!moreMenu);
//               }}
//               className={cx("option-btn")}
//             >
//               <FontAwesomeIcon icon={faEllipsis} />
//             </span>
//           </HeadlessTippy>
//         </div>
//       </div>
//     </>
//   );
// };
// export default PlaySidebar;
