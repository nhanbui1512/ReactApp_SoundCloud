import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSongsByGenre, getSongsByName } from "services/firebase/firestore/songs";
import { getArtistsByName } from "services/firebase/firestore/artists";
import { getPlaylistsByName } from "services/firebase/firestore/playlist";
import { getGenresByName } from "services/firebase/firestore/genres";
import FeedLeftItem from "components/FeedLeft/FeedLeftItem/FeedLeftItem";
import { MenuItem } from "components/DropDownMenu";
import PostSearch from "components/PostSearch";
import Gallery from "components/Gallery";

const cx = classNames.bind(styles);

const Search = () => {
	const [searchParams,] = useSearchParams()
	const [keyword, setKeyword] = useState("")
	const [loading, setLoading] = useState(true)
	const [show, setShow] = useState(0)
	const [songsResult, setSongsResult] = useState([])
	const [songsByGenresResult, setSongsByGenresResult] = useState([])
	const [artistsResult, setArtistsResult] = useState([])
	const [playlistsResult, setPlaylistResult] = useState([])

	const getResult = async (keyword) => {
		const songs = await getSongsByName(keyword)
		const genres = await getGenresByName(keyword)
		let songsByGenre = []
		if (genres.lenght !== 0) {
			genres.forEach(async genre => {
				const result = await getSongsByGenre(genre.id)
				songsByGenre.push({
					genreName: genre.name,
					songs: result.slice(0,4)
				})
			})
		}
		const artists = await getArtistsByName(keyword)
		const playlists = await getPlaylistsByName(keyword)
		setSongsResult(songs)
		setSongsByGenresResult(songsByGenre)
		setArtistsResult(artists)
		setPlaylistResult(playlists)
		setLoading(false)
	}
	useEffect(() => {
		const kw = searchParams.get('keyword')
		setKeyword(kw)
		setLoading(true)
		getResult(kw)
	}, [searchParams])
	
	const showResult = () => {
		switch (show) {
			case 0:
				return (
					<div>
						<h2 className={cx("header")}>Songs</h2>
						{songsResult.map((item, index) => <FeedLeftItem data={item}/>)}
					</div>
				)
			case 1:
				return (
					<div>
						<h2 className={cx("header")}>Songs by Genre</h2>
						{songsByGenresResult.map((item, index) => 
							<div>
								<h4>{item.genreName}</h4>
								{item.songs.map((item, index) => <FeedLeftItem key={index} data={item}/>)}
							</div>
						)}
					</div>
				)
			case 2:
				return (
					<div>
						<h2 className={cx("header")}>Artists</h2>
						{artistsResult.map((item, index) => <PostSearch key={index} data={item}/>)}
					</div>
				)
			case 3:
				return (
					<div>
						<h2 className={cx("header")}>Playlists</h2>
						{playlistsResult.map((item, index) => <Gallery key={index} data={item}/>)}
					</div>
				)
			default:
				break;
		}
	}

  return (
    <div className={cx("wrapper")}>
      <div
        style={{
          position: "relative",
        }}
      >
        <div className={cx("content")}>
					<h2 className={cx("header")}>
						Search result for "{keyword}"
					</h2>
					{loading ? 
							<label>
								Searching...
							</label>
						: showResult()
					}
        </div>

				<div className={cx("side-bar")}>
					<h3>Search filter</h3>
					<MenuItem key={0} onClick={() => setShow(0)}>
						<label style={{ color: show === 0 && "#ff5500"}}>Songs</label>
					</MenuItem>
					<MenuItem key={1} onClick={() => setShow(1)}>
						<label style={{ color: show === 1 && "#ff5500"}}>Songs by Genre</label>
					</MenuItem>
					<MenuItem key={2} onClick={() => setShow(2)}>
						<label style={{ color: show === 2 && "#ff5500"}}>Artists</label>
					</MenuItem>
					<MenuItem key={3} onClick={() => setShow(3)}>
						<label style={{ color: show === 3 && "#ff5500"}}>Playlists</label>
					</MenuItem>
				</div>
      </div>
    </div>
  );
};
export default Search;
