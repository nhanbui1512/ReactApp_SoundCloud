import classNames from "classnames/bind";
import styles from "./PostSearch.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale-subtle.css";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

function PostSearch({ data }) {
  const [moreMenu, setMoreMenu] = useState(false);
  const moreBtnRef = useRef();
  const [isFollowing, setIsFollowing] = useState(false)
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

const handleFollowing = () => {
    setIsFollowing(!isFollowing)
}
  return (
    <div className={cx('module-item')}>
        <div className={cx("modul-left_item")}>
            <img className={cx("modul-left_image")} src={data.image} alt="" />        
        </div>
        <div className={cx("modul-right_item")}>
            <a href="/" className={cx("name-post")}>
                {data.name}
            </a>

            <a href="/" className={cx("desc-post")}>
                Juan angel pinales jr
                <br/>
                texas / United States
            </a>

            <span className={cx("box-followers")}>
                <a className={cx("box-followers_users")} href="/">
                    <FontAwesomeIcon
                        className={cx("")}
                        icon={faUserAlt}
                    />
                    <span className={cx("followers-post")}>1,728 followers</span>
                </a>

                <div  onClick={() => {handleFollowing()}} className={cx("box-btn", { following: isFollowing })}>
                    <div className={cx("btn")}>
                        <FontAwesomeIcon
                            className={cx("")}
                            icon={faUserCheck}
                        />
                        <span className={cx("followers-post")}>Follow</span>
                    </div>
                </div>
            </span>
        </div>
    </div>
  );
}
export default PostSearch;
