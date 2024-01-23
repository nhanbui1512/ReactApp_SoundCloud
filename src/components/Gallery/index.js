import classNames from "classnames/bind";
import styles from "./Gallery.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faHeart,
  faListOl,
  faListUl,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale-subtle.css";
import { MenuItem, Wrapper } from "components/DropDownMenu";
import { AddToList } from "components/Icons";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

function Gallery({ data }) {
  const [moreMenu, setMoreMenu] = useState(false);
  const moreBtnRef = useRef();
  const [isLiked, setIsLiked] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra xem sự kiện click có xảy ra ngoài nút button không
      if (moreBtnRef.current && !moreBtnRef.current.contains(event.target)) {
        // Thực hiện hành động khi click ra ngoài
        setMoreMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={cx("modul-left_item")}>
      <div className={cx("modul-left_item-container-img")}>
        <img className={cx("modul-left_image")} src={data.image} alt="" />

        <div className={cx("modul-left_backgroud")}></div>
        <div
          onClick={() => {
            setIsPlay(!isPlay);
          }}
          className={cx("modul-left_playbtn")}
        >
          <FontAwesomeIcon
            className={cx("modul-left_playbtn-icon")}
            icon={isPlay ? faPause : faPlay}
          />
        </div>

        <div className={cx("modul-left_option-group")}>
          <Tippy animation={"scale-subtle"} content={"Like"}>
            <>
              <span
                onClick={() => {
                  setIsLiked(!isLiked);
                }}
                className={cx("option-btn")}
              >
                <FontAwesomeIcon
                  className={cx("", { liked: isLiked })}
                  icon={faHeart}
                />
              </span>
            </>
          </Tippy>

          <HeadlessTippy
            visible={moreMenu}
            interactive
            placement="bottom-start"
            offset={[0, 0]}
            delay={300}
            render={(atr) => {
              return (
                <Wrapper className={cx("more-menu")}>
                  <MenuItem
                    className={cx("menu-item")}
                    icon={
                      <FontAwesomeIcon
                        className={cx("menu-item-icon")}
                        icon={faListUl}
                      />
                    }
                    separate
                  >
                    Add to Next up
                  </MenuItem>
                  <MenuItem
                    className={cx("menu-item")}
                    icon={<AddToList className={cx("menu-item-icon")} />}
                  >
                    Add to Playlist
                  </MenuItem>
                </Wrapper>
              );
            }}
          >
            <span
              ref={moreBtnRef}
              onClick={(e) => {
                setMoreMenu(!moreMenu);
              }}
              className={cx("option-btn")}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </span>
          </HeadlessTippy>

          <div className={cx("modul-left_option-more")}>
            <button className="border-bottom radius-top">
              <FontAwesomeIcon icon={faListOl} />
              <span>Add to Next up</span>
            </button>

            <button className="radius-end">
              <i className="fa-solid fa-list"></i>
              <span className="font-12">Add to Playlist</span>
            </button>
          </div>
        </div>
      </div>

      <a href="/" className={cx("name-gallery")}>
        {data.name}
      </a>
      <span className={cx("name-track")}>{data.track}</span>
    </div>
  );
}
export default Gallery;