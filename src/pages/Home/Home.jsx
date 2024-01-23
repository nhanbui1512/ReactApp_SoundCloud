import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { uploadImage } from "services/firebase/storage/images";

const cx = classNames.bind(styles);

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const file = document.getElementById('file-select').files[0]
    console.log(file)
    uploadImage(file, file.name)
  }
  return (
    <div className={cx("wrapper")}>
      <div
        style={{
          position: "relative",
        }}
      >
        <div className={cx("content")}>Trending Page<br/>
          <form onSubmit={handleSubmit}>
            <input type="file" id="file-select"/><br/>
            <button type="submit">upload</button>
          </form>
        </div>
        <div className={cx("side-bar")}>Side bar right</div>
      </div>
    </div>
  );
};
export default Home;
