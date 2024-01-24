import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createSongs, getSongsByGenre, getSongsByName } from "services/firebase/firestore/songs";
import { getArtistsByName } from "services/firebase/firestore/artists";
import { getPlaylistsByName } from "services/firebase/firestore/playlist";
import { createGenre, getGenresByName } from "services/firebase/firestore/genres";

const cx = classNames.bind(styles);

const Search = () => {
	const [searchParams,] = useSearchParams()
	const [keyword, setKeyword] = useState("")
	const [loading, setLoading] = useState(true)
	const [songsResult, setSongsResult] = useState([])
	const [songsByGenresResult, setSongsByGenresResult] = useState([])
	const [artistsResult, setArtistsResult] = useState([])
	const [playlistsResult, setPlaylistResult] = useState([])

	const getResult = async (keyword) => {
		const songs = await getSongsByName(keyword)
		const genres = await getGenresByName(keyword)
		let songsByGenre = []
		if (genres.lenght !== 0) {
			genres.slice(0,2).forEach(async genre => {
				const result = await getSongsByGenre(genre.id)
				songsByGenre = songsByGenre.concat(result)
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
		return (
			<div>
				<h2 className={cx("header")}>Songs</h2>
				{songsResult.map((item, index) => <h5>{item.name}</h5>)}
				<h2 className={cx("header")}>Songs by Genre</h2>
				{songsByGenresResult.map((item, index) => <h5>{item.name}<h6>Genre id: {item.genre}</h6></h5>)}
				<h2 className={cx("header")}>Artists</h2>
				{artistsResult.map((item, index) => <h5>{item.name}</h5>)}
				<h2 className={cx("header")}>Playlists</h2>
				{playlistsResult.map((item, index) => <h5>{item.name}</h5>)}
			</div>
		)
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
					</h2><br/>
					{loading ? 
							<label>
								Loading...
							</label>
						: showResult()
					}
        </div>
      </div>
    </div>
  );
};
export default Search;
