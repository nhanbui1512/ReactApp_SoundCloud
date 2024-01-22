import './css/home.css'
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    const songs = [
        { id: 1, name: 'Song 1', image: './img/sontung.jpg' },
        { id: 2, name: 'Song 2', image: '/img/sontung.jpg' },
        { id: 3, name: 'Song 3', image: './img/sontung.jpg' },
        { id: 4, name: 'Song 4', image: '/img/sontung.jpg' },
        { id: 5, name: 'Song 5', image: './img/sontung.jpg' },
        { id: 6, name: 'Song 6', image: '/img/sontung.jpg' },
        // Add more songs as needed
    ];
    const sliderRef = useRef(null);
    const sliderSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // arrows: true,
        prevArrow: <button className="slick-prev">Previous</button>,
        nextArrow: <button className="slick-next">Next</button>,
      };

    return (
        <>
            <div className="body">
                <div className="content-container">

                    <div className="content-container_left">


                        <div className="modul-left">
                            <div></div>
                            <div className="col border-bottom margin-bottom-34">

                                <h2 className="modul-left_title">More of what you like</h2>
                                <p className="modul-left_describe">Suggestions based on what you've liked or played</p>
                                <div className="col relative">

                                    <div className="modul-left_container">
                                        {/* <div id="slider3" className="slider">
                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative">
                                                    <img className="modul-left_image" src="./assets/img/artworks-nlIy7SbcCwDCOhWO-1TsD7w-t500x500.jpg" alt=""/>

                                                        <div className="modul-left_backgroud"></div>
                                                        <div className="modul-left_playbtn">
                                                            <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                        </div>

                                                        <div className="modul-left_option-group">
                                                            <span className="color-white padding-4-2">
                                                                <i className="fa-solid fa-heart"></i>
                                                            </span>
                                                            <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                                <i className="fa-solid fa-ellipsis"></i>
                                                            </span>

                                                            <div className="modul-left_option-more">
                                                                <button className="border-bottom radius-top">
                                                                    <i className="fa-solid fa-list-ol"></i>
                                                                    <span>Add to Next up</span>
                                                                </button>

                                                                <button className="radius-end">
                                                                    <i className="fa-solid fa-list"></i>
                                                                    <span className="font-12">Add to Playlist</span>
                                                                </button>
                                                            </div>

                                                        </div>


                                                </div>

                                                <Link to="">Chúng ta của hiện tại</Link>
                                                <span>Related tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative">
                                                    <img className="modul-left_image" src="./assets/img/artworks-IM3jtFScLqGHmD7m-kH0PzA-t500x500.jpg" alt=""/>

                                                        <div className="modul-left_backgroud"></div>

                                                        <div className="modul-left_playbtn">
                                                            <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                        </div>


                                                        <div className="modul-left_option-group ">
                                                            <span className="color-white padding-4-2">
                                                                <i className="fa-solid fa-heart"></i>
                                                            </span>
                                                            <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                                <i className="fa-solid fa-ellipsis"></i>
                                                            </span>
                                                            <div className="modul-left_option-more">
                                                                <button className="border-bottom radius-top">
                                                                    <i className="fa-solid fa-list-ol"></i>
                                                                    <span>Add to Next up</span>
                                                                </button>

                                                                <button className="radius-end">
                                                                    <i className="fa-solid fa-list"></i>
                                                                    <span className="font-12">Add to Playlist</span>
                                                                </button>
                                                            </div>

                                                        </div>
                                                </div>


                                                <Link to="">Ngày Đầu Tiên</Link>
                                                <span>Related tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000191567152-6ogpm0-t500x500.jpg" alt=""/>
                                                        <div className="modul-left_backgroud"></div>
                                                        <div className="modul-left_playbtn">
                                                            <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                        </div>

                                                        <div className="modul-left_option-group">
                                                            <span className="color-white padding-4-2">
                                                                <i className="fa-solid fa-heart"></i>
                                                            </span>
                                                            <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                                <i className="fa-solid fa-ellipsis"></i>
                                                            </span>

                                                            <div className="modul-left_option-more">
                                                                <button className="border-bottom radius-top">
                                                                    <i className="fa-solid fa-list-ol"></i>
                                                                    <span>Add to Next up</span>
                                                                </button>

                                                                <button className="radius-end">
                                                                    <i className="fa-solid fa-list"></i>
                                                                    <span className="font-12">Add to Playlist</span>
                                                                </button>
                                                            </div>

                                                        </div>
                                                </div>

                                                <Link to="">Cơn mưa cuối</Link>
                                                <span>Related tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000125404277-g3oic3-t500x500.jpg" alt=""/>
                                                        <div className="modul-left_backgroud"></div>
                                                        <div className="modul-left_playbtn">
                                                            <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                        </div>

                                                        <div className="modul-left_option-group">
                                                            <span className="color-white padding-4-2">
                                                                <i className="fa-solid fa-heart"></i>
                                                            </span>
                                                            <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                                <i className="fa-solid fa-ellipsis"></i>
                                                            </span>

                                                            <div className="modul-left_option-more">
                                                                <button className="border-bottom radius-top">
                                                                    <i className="fa-solid fa-list-ol"></i>
                                                                    <span>Add to Next up</span>
                                                                </button>

                                                                <button className="radius-end">
                                                                    <i className="fa-solid fa-list"></i>
                                                                    <span className="font-12">Add to Playlist</span>
                                                                </button>
                                                            </div>

                                                        </div>
                                                </div>

                                                <Link to="">2AM - JustaTee ft BigDaddy</Link>
                                                <span>Related tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000515554215-mq6d4b-t500x500.jpg" alt=""/>
                                                        <div className="modul-left_backgroud"></div>
                                                        <div className="modul-left_playbtn">
                                                            <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                        </div>

                                                        <div className="modul-left_option-group">
                                                            <span className="color-white padding-4-2">
                                                                <i className="fa-solid fa-heart"></i>
                                                            </span>
                                                            <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                                <i className="fa-solid fa-ellipsis"></i>
                                                            </span>

                                                            <div className="modul-left_option-more">
                                                                <button className="border-bottom radius-top">
                                                                    <i className="fa-solid fa-list-ol"></i>
                                                                    <span>Add to Next up</span>
                                                                </button>

                                                                <button className="radius-end">
                                                                    <i className="fa-solid fa-list"></i>
                                                                    <span className="font-12">Add to Playlist</span>
                                                                </button>
                                                            </div>

                                                        </div>
                                                </div>

                                                <Link to="">1NG ai đưa em về</Link>
                                                <span>Related tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-uuM7vrcFep49m56L-Hv2CAg-t500x500.jpg" alt=""/>
                                                        <div className="modul-left_backgroud"></div>
                                                        <div className="modul-left_playbtn">
                                                            <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                        </div>

                                                        <div className="modul-left_option-group">
                                                            <span className="color-white padding-4-2">
                                                                <i className="fa-solid fa-heart"></i>
                                                            </span>
                                                            <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                                <i className="fa-solid fa-ellipsis"></i>
                                                            </span>

                                                            <div className="modul-left_option-more">
                                                                <button className="border-bottom radius-top">
                                                                    <i className="fa-solid fa-list-ol"></i>
                                                                    <span>Add to Next up</span>
                                                                </button>

                                                                <button className="radius-end">
                                                                    <i className="fa-solid fa-list"></i>
                                                                    <span className="font-12">Add to Playlist</span>
                                                                </button>
                                                            </div>

                                                        </div>
                                                </div>

                                                <Link to="">SoundCloud Weekly</Link>
                                                <span>Related tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000753227629-a4hkxj-t500x500.jpg" alt=""/>
                                                        <div className="modul-left_backgroud"></div>
                                                        <div className="modul-left_playbtn">
                                                            <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                        </div>

                                                        <div className="modul-left_option-group">
                                                            <span className="color-white padding-4-2">
                                                                <i className="fa-solid fa-heart"></i>
                                                            </span>
                                                            <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                                <i className="fa-solid fa-ellipsis"></i>
                                                            </span>

                                                            <div className="modul-left_option-more">
                                                                <button className="border-bottom radius-top">
                                                                    <i className="fa-solid fa-list-ol"></i>
                                                                    <span>Add to Next up</span>
                                                                </button>

                                                                <button className="radius-end">
                                                                    <i className="fa-solid fa-list"></i>
                                                                    <span className="font-12">Add to Playlist</span>
                                                                </button>
                                                            </div>

                                                        </div>
                                                </div>

                                                <Link to="">Mixed for Nhân Bùi</Link>
                                                <span>Related tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000405464955-n4ge52-t500x500.jpg" alt=""/>
                                                        <div className="modul-left_backgroud"></div>
                                                        <div className="modul-left_playbtn">
                                                            <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                        </div>

                                                        <div className="modul-left_option-group">
                                                            <span className="color-white padding-4-2">
                                                                <i className="fa-solid fa-heart"></i>
                                                            </span>
                                                            <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                                <i className="fa-solid fa-ellipsis"></i>
                                                            </span>

                                                            <div className="modul-left_option-more modul-left_final">
                                                                <button className="border-bottom radius-top">
                                                                    <i className="fa-solid fa-list-ol"></i>
                                                                    <span>Add to Next up</span>
                                                                </button>

                                                                <button className="radius-end">
                                                                    <i className="fa-solid fa-list"></i>
                                                                    <span className="font-12">Add to Playlist</span>
                                                                </button>
                                                            </div>

                                                        </div>
                                                </div>

                                                <Link to="">Morning Chillout</Link>
                                                <span>Related tracks</span>
                                            </div>
                                        </div> */}
                                        <Slider {...sliderSettings}>
                                            {songs.map((song, index) => (
                                                <div key={index} className="modul-left_item">
                                                    <div className="modul-left_item-container-img relative">
                                                        <img className="modul-left_image" src={song.image} alt="" />
                                                        <div className="modul-left_backgroud"></div>
                                                        <div className="modul-left_playbtn">
                                                            <span className="modul-left_playbtn-icon">
                                                                <i className="fa-solid fa-play"></i>
                                                            </span>
                                                        </div>

                                                        <div className="modul-left_option-group">
                                                            <span className="color-white padding-4-2">
                                                                <i className="fa-solid fa-heart"></i>
                                                            </span>
                                                            <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                                <i className="fa-solid fa-ellipsis"></i>
                                                            </span>

                                                            <div className="modul-left_option-more modul-left_final">
                                                                <button className="border-bottom radius-top">
                                                                    <i className="fa-solid fa-list-ol"></i>
                                                                    <span>Add to Next up</span>
                                                                </button>

                                                                <button className="radius-end">
                                                                    <i className="fa-solid fa-list"></i>
                                                                    <span className="font-12">Add to Playlist</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Link to="">{song.name}</Link>
                                                    <span>Related tracks</span>
                                                </div>
                                            ))}
                                        </Slider>
                                        <div className="slider-buttons">
                                            <button onClick={() => sliderRef.current.slickPrev()}>Trở lại</button>
                                            <button onClick={() => sliderRef.current.slickNext()}>Tiến</button>
                                        </div>
                                    </div>
                                    <button className="right-btn">
                                        <i className="fa-solid fa-angle-right"></i>
                                    </button>

                                    <button id="left-btn3" className="left-btn" >
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>

                                </div>
                            </div>

                            <div className="col border-bottom margin-bottom-34">

                                <h2 className="modul-left_title">Recently Played</h2>
                                <p className="modul-left_describe"></p>

                                <div className="col relative">
                                    <div className="modul-left_container">

                                        <div id="slider" className="slider">

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000191567152-6ogpm0-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">
                                                    Cơn Mưa Cuối - JustaTee </Link>
                                                <span>Related tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000515554215-mq6d4b-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">1NG ai đưa em về</Link>
                                                <span>Uyên</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000458864706-ddcep5-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Nguyen dinh toan lofi</Link>
                                                <span>duck</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-IsFv3NzDEzF7-0-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Charlie Puth - Losing My Mind</Link>
                                                <span>Lora Perez</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000148703272-cikcm4-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Tearliner - 이끌림 (Vocal by Kim Go Eun 김고은)</Link>
                                                <span>Related tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" alt='' src="./assets/img/artworks-000388088421-5xl072-t500x500.jpg " />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">| Chill | Lofi | Hip Hop |</Link>
                                                <span>helennpham</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000214699632-lg7fth-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Spring's Coming</Link>
                                                <span>Yeonkkot</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-ZiZ39u9wsG5FDzD6-9uNOuA-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more modul-left_final">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Country</Link>
                                                <span>New & hot</span>
                                            </div>




                                        </div>


                                    </div>

                                    <button className="right-btn" >
                                        <i className="fa-solid fa-angle-right"></i>
                                    </button>

                                    <button id="left-btn" className="left-btn" >
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                </div>


                            </div>

                            <div className="col border-bottom margin-bottom-34">

                                <h2 className="modul-left_title">Charts: Top 50</h2>
                                <p className="modul-left_describe">The most played tracks on SoundCloud this week</p>
                                <div className="col relative">
                                    <div className="modul-left_container">

                                        <div id="slider2" className="slider">

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative">
                                                    <img className="modul-left_image" src="./assets/img/artworks-5WT43mrqN692Qu8K-Ly6ypw-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">House</Link>
                                                <span>Top 50</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000253796816-4rm2so-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Dance & EDM</Link>
                                                <span>Top 50</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000196621207-6nysvx-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Deep House</Link>
                                                <span>Top 50</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-0yc4nMJVjUOWVfGw-hHVAUw-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">R&B & Soul</Link>
                                                <span>Top 50</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/avatars-sBsooodhLCuDtKaw-sK9V7g-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Pop50</Link>
                                                <span>Top50</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-9f4zNeZy2eSGDfxz-3M60nQ-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Dance & EDM</Link>
                                                <span>Top50</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000193629987-23khw9-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Indie</Link>
                                                <span>Top50</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000120149088-mb5uwy-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more modul-left_final">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Drum & Bass</Link>
                                                <span>Top50</span>
                                            </div>
                                        </div>

                                    </div>
                                    <button className="right-btn" >
                                        <i className="fa-solid fa-angle-right"></i>
                                    </button>

                                    <button id="left-btn2" className="left-btn">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                </div>

                            </div>

                            <div className="col border-bottom margin-bottom-34">

                                <h2 className="modul-left_title">The Upload</h2>
                                <p className="modul-left_describe">Newly posted tracks. Just for you</p>
                                <div className="col relative">
                                    <div className="list-music col">

                                        <div className="row">
                                            <div className="list-music_image relative">
                                                <img src="./assets/img/artworks-yukyFaBjTlbbBrn6-yjfdgg-t500x500.jpg" alt="" />
                                                <span className="list-music_playbtn">
                                                    <i className="fa-solid fa-play"></i>
                                                </span>
                                            </div>
                                            <div className="list-music-container">
                                                <ul className="list-music-container_scroll col">
                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                PhucXp ft. Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Chẳng Thể Tìm Được Em - Lofi
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    4,912
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Nguyễn Đăng Nguyên x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Có Chắc Chia Tay Là Sẽ Quên - Lofi
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    5,235
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>

                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Reddy x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Anh Đâu Đấy (Lofi Ver.)
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    5,21M
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Da LAB x Miu Lê x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Gác Lại Âu Lo - Lofi
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    1,32M
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Tia x Lê Thiện Hiếu x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Ai Đưa Em Về (Lofi Ver.)
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    4,912
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Tân Trần x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Bỏ Em Vào Balo (Lofi Ver.)
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    4,912
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>

                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Phí Phương Anh ft. Rin9 x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Răng Khôn (Lofi Ver.)
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    4,912
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Hồ Văn Quý x Xám x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Tình Yêu Màu Hồng Lofi Ver
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    4,912
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                </ul>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="list-music_footer row">
                                        <div className="list-music_footer-img">
                                            <img src="./assets/img/IMG1_03391.jpg" alt="" />
                                        </div>
                                        <div className="list-music_footer-description">
                                            <span>Based on your listening history</span>
                                        </div>
                                        <Link className="go-playlist-btn" to="#">Go to Playlist</Link>

                                    </div>
                                </div>

                            </div>

                            <div className="col border-bottom margin-bottom-34">

                                <h2 className="modul-left_title">Charts: New & hot</h2>
                                <p className="modul-left_describe">Up-and-coming tracks on SoundCloud</p>
                                <div className="col relative">
                                    <div className="modul-left_container">

                                        <div id="slider2" className="slider">

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative">
                                                    <img className="modul-left_image" src="./assets/img/artworks-0Utjp2yi5tsinvyh-0iS0MQ-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">All music genres</Link>
                                                <span>New & hot</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative">
                                                    <img className="modul-left_image" src="./assets/img/artworks-V75b3N7i0fP4OOsa-3det9g-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">RGB & Soul</Link>
                                                <span>New & hot</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/avatars-zKvd3pG2XbAJ5TDl-F2KxzQ-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Classic</Link>
                                                <span>New & hot</span>
                                            </div>
                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-6WArSbIXQzii31Y2-GflV8w-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Country</Link>
                                                <span>New & hot</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-ZXPWwaRTfyvbhsUd-zsByow-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Soundtrack</Link>
                                                <span>New & hot</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-9ouqtd6gMPL1mRt7-LWNMuw-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Indie</Link>
                                                <span>New & hot</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-5M6zkZ0fp2MfmadP-EcOxUg-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Disco</Link>
                                                <span>New & hot</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-1WNPftUDJbTrzz9t-4iSpkQ-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more modul-left_final">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Triphop</Link>
                                                <span>New & hot</span>
                                            </div>


                                        </div>

                                    </div>
                                    <button className="right-btn" >
                                        <i className="fa-solid fa-angle-right"></i>
                                    </button>

                                    <button id="left-btn2" className="left-btn">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                </div>

                            </div>

                            <div className="col border-bottom margin-bottom-34">

                                <h2 className="modul-left_title">SoundCloud Weekly</h2>
                                <p className="modul-left_describe">All of SoundCloud. Just for you.</p>
                                <div className="col relative">
                                    <div className="list-music col background-pink">

                                        <div className="row">
                                            <div className="list-music_image relative">
                                                <img src="./assets/img/artworks-RALAZyQCP3zvFvvt-Y9sNtg-t500x500.jpg" alt="" />
                                                <span className="list-music_playbtn">
                                                    <i className="fa-solid fa-play"></i>
                                                </span>
                                            </div>
                                            <div className="list-music-container">
                                                <ul className="list-music-container_scroll col">
                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                PhucXp ft. Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Chẳng Thể Tìm Được Em - Lofi
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    4,912
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Nguyễn Đăng Nguyên x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Có Chắc Chia Tay Là Sẽ Quên - Lofi
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    5,235
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>

                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Reddy x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Anh Đâu Đấy (Lofi Ver.)
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    5,21M
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Da LAB x Miu Lê x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Gác Lại Âu Lo - Lofi
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    1,32M
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Tia x Lê Thiện Hiếu x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Ai Đưa Em Về (Lofi Ver.)
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    4,912
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Tân Trần x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Bỏ Em Vào Balo (Lofi Ver.)
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    4,912
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>

                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Phí Phương Anh ft. Rin9 x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Răng Khôn (Lofi Ver.)
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    4,912
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                    <li className="list-music-item">
                                                        <div className="list-music-item_detail-song">
                                                            <span className="color-opa-07">
                                                                Hồ Văn Quý x Xám x Freak D
                                                            </span>
                                                            <span className="color-white">
                                                                Tình Yêu Màu Hồng Lofi Ver
                                                            </span>
                                                        </div>
                                                        <div className="list-music-item_group color-white relative">
                                                            <div className="list-music-item_play-rate">
                                                                <span className="font-11">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </span>
                                                                <span className="font-11">
                                                                    4,912
                                                                </span>

                                                            </div>

                                                            <div className="group-btn_right">
                                                                <button>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-repeat"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-share"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-link"></i>
                                                                </button>
                                                                <button>
                                                                    <i className="fa-solid fa-ellipsis"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                </ul>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="list-music_footer row">
                                        <div className="list-music_footer-img">
                                            <img src="./assets/img/IMG1_03391.jpg" alt="" />
                                        </div>
                                        <div className="list-music_footer-description">
                                            <span>Based on your listening history</span>
                                        </div>
                                        <Link className="go-playlist-btn" to="#">Go to Playlist</Link>

                                    </div>
                                </div>

                            </div>


                            <div className="col border-bottom margin-bottom-34">

                                <h2 className="modul-left_title">Artists You Should Know</h2>
                                <p className="modul-left_describe">Top tracks from artists similar to 1nG</p>
                                <div className="col relative">
                                    <div className="modul-left_container">

                                        <div id="slider2" className="slider">

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative">
                                                    <img className="modul-left_image" src="./assets/img/labs-6aa4e724-0-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">buitruonglinh</Link>
                                                <span>Top tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative">
                                                    <img className="modul-left_image" src="./assets/img/labs-61c6a109-0-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Hoàng Tôn</Link>
                                                <span>Top tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/labs-f27b608f-0-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">VRT</Link>
                                                <span>Top tracks</span>
                                            </div>
                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/labs-e0bcd89f-0-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Prod. Darling</Link>
                                                <span>Top tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/labs-5c8db098-0-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Luxuyen.</Link>
                                                <span>Top tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/labs-6162d372-0-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">New$oulZ</Link>
                                                <span>Top tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/labs-4a751bb0-0-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">PC [ FeelingSounds ]</Link>
                                                <span>Top tracks</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/labs-80aec6d7-0-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more modul-left_final">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Lena Lena</Link>
                                                <span>Top tracks</span>
                                            </div>


                                        </div>

                                    </div>
                                    <button className="right-btn" >
                                        <i className="fa-solid fa-angle-right"></i>
                                    </button>

                                    <button id="left-btn2" className="left-btn">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                </div>

                            </div>

                            <div className="col border-bottom margin-bottom-34">

                                <h2 className="modul-left_title">Sleep</h2>
                                <p className="modul-left_describe">Popular playlists from the SoundCloud community</p>
                                <div className="col relative">
                                    <div className="modul-left_container">

                                        <div id="slider2" className="slider">

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000104946156-2z0ezc-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Billies Sleep Sounds</Link>
                                                <span>Billie Kihega</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000168574912-3nhdl7-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Summer Nights</Link>
                                                <span>Serene</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000107899443-qxcwl0-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Sleep healing sounds</Link>
                                                <span>Jean Claude 5</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000118815345-eap7vz-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">listen</Link>
                                                <span>Rayna Rose</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000602869141-0usbue-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">jazzy night 2</Link>
                                                <span>User 101682266</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-VLr9GDTTjSy8CL88-2yiZ4A-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Oct. Lo-fi</Link>
                                                <span>ilovehanriver</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000117236240-cjwsda-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group ">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">Rainy Days</Link>
                                                <span>SoiledLegs</span>
                                            </div>

                                            <div className="modul-left_item">
                                                <div className="modul-left_item-container-img relative ">
                                                    <img className="modul-left_image" src="./assets/img/artworks-000208017587-4u9jkq-t500x500.jpg" alt="" />
                                                    <div className="modul-left_backgroud"></div>

                                                    <div className="modul-left_playbtn">
                                                        <span className="modul-left_playbtn-icon" ><i className="fa-solid fa-play"></i></span>
                                                    </div>


                                                    <div className="modul-left_option-group">
                                                        <span className="color-white padding-4-2">
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
                                                        <span className="color-white ml-4 modul-left_morebtn padding-4-2">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <div className="modul-left_option-more modul-left_final">
                                                            <button className="border-bottom radius-top">
                                                                <i className="fa-solid fa-list-ol"></i>
                                                                <span>Add to Next up</span>
                                                            </button>

                                                            <button className="radius-end">
                                                                <i className="fa-solid fa-list"></i>
                                                                <span className="font-12">Add to Playlist</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <Link to="">to help you sleep</Link>
                                                <span>granolaguy1234</span>
                                            </div>


                                        </div>

                                    </div>
                                    <button className="right-btn" >
                                        <i className="fa-solid fa-angle-right"></i>
                                    </button>

                                    <button id="left-btn2" className="left-btn">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                </div>

                            </div>


                        </div>



                    </div>

                    <div className="content-container_right">
                        <div className="slidebar-modul">
                            <Link className="slidebar-modul_linkrefresh border-bottom" to="">
                                <span>
                                    <i className="fa-solid fa-users"></i>
                                </span>
                                <span>
                                    Artists you should follow
                                </span>
                                <span className="float-right">
                                    <i className="fa-solid fa-arrow-rotate-right"></i>
                                    Refresh list
                                </span>

                            </Link>
                            <div className="slidebar-modul_container">
                                <div className="slidebar-modul_item">
                                    <div className="row">
                                        <div className="slidebar-modul_item-img ">
                                            <img className="radius-50" src="./assets/img/avatars-WqDmfUP2LwsNjrJX-WusJmQ-t120x120.jpg" alt="" />
                                        </div>
                                        <div className="col slidebar-modul_item-content padding-8-0">
                                            <span>
                                                TINLE
                                            </span>
                                            <div className="row slidebar-modul_item-content-rate" >
                                                <span className="">
                                                    <i className="fa-solid fa-users font-11"></i>
                                                </span>
                                                <span className="font-11 slidebar-modul_item-content-number">
                                                    11.7K
                                                </span>
                                                <span>
                                                    <i className="fa fa-bar-chart font-11" aria-hidden="true"></i>
                                                </span>
                                                <span className="font-11 slidebar-modul_item-content-number">19</span>
                                            </div>


                                        </div>
                                        <button className="follow-btn">
                                            <i className="fa-solid fa-user-plus follow-icon"></i>
                                            <span className="">Follow</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="slidebar-modul_item">
                                    <div className="row">
                                        <div className="slidebar-modul_item-img">
                                            <img className="radius-50" src="./assets/img/avatars-lShHCeaAcZ6Wz3Ay-57FURQ-t120x120.jpg" alt="" />
                                        </div>
                                        <div className="col slidebar-modul_item-content padding-8-0">
                                            <span>
                                                denvau
                                                <span className="check-icon">
                                                    <i className="fa-solid fa-check font-11"></i>
                                                </span>
                                            </span>
                                            <div className="row slidebar-modul_item-content-rate" >
                                                <span className="">
                                                    <i className="fa-solid fa-users font-11"></i>
                                                </span>
                                                <span className="font-11 slidebar-modul_item-content-number">
                                                    281k
                                                </span>
                                                <span>
                                                    <i className="fa fa-bar-chart font-10" aria-hidden="true"></i>
                                                </span>
                                                <span className="font-11 slidebar-modul_item-content-number">67</span>
                                            </div>


                                        </div>
                                        <button className="follow-btn">
                                            <i className="fa-solid fa-user-plus follow-icon"></i>
                                            <span className="">Follow</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="slidebar-modul_item">
                                    <div className="row">
                                        <div className="slidebar-modul_item-img">
                                            <img className="radius-50" src="./assets/img/artworks-nlIy7SbcCwDCOhWO-1TsD7w-t500x500.jpg" alt="" />
                                        </div>
                                        <div className="col slidebar-modul_item-content padding-8-0">
                                            <span>
                                                Sơn Tùng MTP
                                                <span className="check-icon">
                                                    <i className="fa-solid fa-check font-11"></i>
                                                </span>
                                            </span>
                                            <div className="row slidebar-modul_item-content-rate" >
                                                <span className="">
                                                    <i className="fa-solid fa-users font-11"></i>
                                                </span>
                                                <span className="font-11 slidebar-modul_item-content-number">
                                                    1M
                                                </span>
                                                <span>
                                                    <i className="fa fa-bar-chart font-10" aria-hidden="true"></i>
                                                </span>
                                                <span className="font-11 slidebar-modul_item-content-number">100</span>
                                            </div>


                                        </div>
                                        <button className="follow-btn">
                                            <i className="fa-solid fa-user-plus follow-icon"></i>
                                            <span className="">Follow</span>
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="sticky-top">

                            <div className="slidebar-modul">
                                <Link className="slidebar-modul_linkrefresh border-bottom" to="">
                                    <span>
                                        <i className="fa-solid fa-heart"></i>
                                    </span>
                                    <span>
                                        40 likes
                                    </span>
                                    <span className="float-right">
                                        View all
                                    </span>

                                </Link>
                                <div className="slidebar-modul_container">
                                    <div className="slidebar-modul_item">
                                        <div className="row relative modul-right-hover">
                                            <div className="slidebar-modul_item-img">
                                                <img src="./assets/img/artworks-000148703272-cikcm4-t500x500.jpg" alt="" />
                                            </div>
                                            <div className="col slidebar-modul_item-content ">
                                                <span className="">
                                                    putitbackon
                                                </span>
                                                <span className="color-333">
                                                    Tearliner - 이끌림 (Vocal by Kim Go...
                                                </span>
                                                <div className="row slidebar-modul_item-content-rate" >
                                                    <span className="">
                                                        <i className="fa-solid fa-play font-11"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">
                                                        228K
                                                    </span>
                                                    <span>
                                                        <i className="fa-solid fa-heart font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">2.629</span>

                                                    <span>
                                                        <i className="fa-solid fa-repeat font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">1.916</span>

                                                    <span>
                                                        <i className="fa-solid fa-comment font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">25</span>
                                                </div>


                                            </div>
                                            <div className="bar-right_play-btn">
                                                <span className="bar-right_play-btn-background radius-50">
                                                    <i className="fa-solid fa-play"></i>
                                                    {/* <!-- <i className="fa-solid fa-pause"></i> --> */}
                                                </span>
                                            </div>

                                            <div className="button-group-small">

                                                <button className="bar-right_heart-btn color-f50">
                                                    <i className="fa-solid fa-heart"></i>
                                                </button>


                                                <button className="bar-right_heart-btn">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </button>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="slidebar-modul_item">
                                        <div className="row relative modul-right-hover">
                                            <div className="slidebar-modul_item-img">
                                                <img src="./assets/img/artworks-000596738276-2hrimy-t120x120.jpg" alt="" />
                                            </div>
                                            <div className="col slidebar-modul_item-content">

                                                <span>
                                                    Luminous Corner
                                                </span>
                                                <span className="color-333">
                                                    Someone You Loved (Cover)
                                                </span>
                                                <div className="row slidebar-modul_item-content-rate" >
                                                    <span className="">
                                                        <i className="fa-solid fa-play font-11"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">
                                                        228K
                                                    </span>
                                                    <span>
                                                        <i className="fa-solid fa-heart font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">2.629</span>

                                                    <span>
                                                        <i className="fa-solid fa-repeat font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">1.916</span>

                                                    <span>
                                                        <i className="fa-solid fa-comment font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">25</span>
                                                </div>


                                            </div>
                                            <div className="bar-right_play-btn">
                                                <span href="" className="bar-right_play-btn-background radius-50">
                                                    <i className="fa-solid fa-play"></i>
                                                </span>
                                            </div>

                                            <div className="button-group-small">

                                                <button className="bar-right_heart-btn color-f50">
                                                    <i className="fa-solid fa-heart"></i>
                                                </button>


                                                <button className="bar-right_heart-btn">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </button>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="slidebar-modul_item">
                                        <div className="row relative modul-right-hover">
                                            <div className="slidebar-modul_item-img">
                                                <img src="./assets/img/artworks-000678170602-y42zal-t120x120.jpg" alt="" />
                                            </div>
                                            <div className="col slidebar-modul_item-content">

                                                <span>
                                                    L2ShareOST23
                                                </span>
                                                <span className="color-333">가호 (Gaho) - 시작 (Start Over)
                                                </span>
                                                <div className="row slidebar-modul_item-content-rate" >
                                                    <span className="">
                                                        <i className="fa-solid fa-play font-11"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">
                                                        6.21M
                                                    </span>
                                                    <span>
                                                        <i className="fa-solid fa-heart font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">2.629</span>

                                                    <span>
                                                        <i className="fa-solid fa-repeat font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">1.916</span>

                                                    <span>
                                                        <i className="fa-solid fa-comment font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">25</span>
                                                </div>


                                            </div>

                                            <div className="bar-right_play-btn">
                                                <span href="" className="bar-right_play-btn-background radius-50">
                                                    <i className="fa-solid fa-play"></i>
                                                </span>
                                            </div>

                                            <div className="button-group-small">

                                                <button className="bar-right_heart-btn color-f50">
                                                    <i className="fa-solid fa-heart"></i>
                                                </button>


                                                <button className="bar-right_heart-btn">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </button>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="slidebar-modul">
                                <Link className="slidebar-modul_linkrefresh border-bottom" to="">
                                    <span>
                                        <i className="fa-solid fa-calendar"></i>
                                    </span>
                                    <span>
                                        Listenning history
                                    </span>
                                    <span className="float-right">
                                        View all
                                    </span>

                                </Link>
                                <div className="slidebar-modul_container">

                                    <div className="slidebar-modul_item">
                                        <div className="row relative modul-right-hover">
                                            <div className="slidebar-modul_item-img">
                                                <img src="./assets/img/artworks-000515555997-yzvnc3-t120x120.jpg" alt="" />
                                            </div>
                                            <div className="col slidebar-modul_item-content ">
                                                <span className="">
                                                    1nG
                                                </span>
                                                <span className="color-333">
                                                    Ai Đưa Em Về - 1nG x VoVanDuc
                                                </span>
                                                <div className="row slidebar-modul_item-content-rate" >
                                                    <span className="">
                                                        <i className="fa-solid fa-play font-11"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">
                                                        228K
                                                    </span>
                                                    <span>
                                                        <i className="fa-solid fa-heart font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">2.629</span>

                                                    <span>
                                                        <i className="fa-solid fa-repeat font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">1.916</span>

                                                    <span>
                                                        <i className="fa-solid fa-comment font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">25</span>
                                                </div>


                                            </div>
                                            <div className="bar-right_play-btn">
                                                <span href="" className="bar-right_play-btn-background radius-50">
                                                    <i className="fa-solid fa-play"></i>
                                                </span>
                                            </div>

                                            <div className="button-group-small">

                                                <button className="bar-right_heart-btn color-f50">
                                                    <i className="fa-solid fa-heart"></i>
                                                </button>


                                                <button className="bar-right_heart-btn">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </button>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="slidebar-modul_item">
                                        <div className="row relative modul-right-hover">
                                            <div className="slidebar-modul_item-img">
                                                <img src="./assets/img/artworks-000678170602-y42zal-t120x120.jpg" alt="" />
                                            </div>
                                            <div className="col slidebar-modul_item-content">

                                                <span>
                                                    L2ShareOST23
                                                </span>
                                                <span className="color-333">가호 (Gaho) - 시작 (Start Over)
                                                </span>
                                                <div className="row slidebar-modul_item-content-rate" >
                                                    <span className="">
                                                        <i className="fa-solid fa-play font-11"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">
                                                        6.21M
                                                    </span>
                                                    <span>
                                                        <i className="fa-solid fa-heart font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">2.629</span>

                                                    <span>
                                                        <i className="fa-solid fa-repeat font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">1.916</span>

                                                    <span>
                                                        <i className="fa-solid fa-comment font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">25</span>
                                                </div>

                                            </div>

                                            <div className="bar-right_play-btn">
                                                <span href="" className="bar-right_play-btn-background radius-50">
                                                    <i className="fa-solid fa-play"></i>
                                                </span>
                                            </div>

                                            <div className="button-group-small">

                                                <button className="bar-right_heart-btn color-f50">
                                                    <i className="fa-solid fa-heart"></i>
                                                </button>


                                                <button className="bar-right_heart-btn">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </button>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="slidebar-modul_item">
                                        <div className="row relative modul-right-hover">
                                            <div className="slidebar-modul_item-img">
                                                <img src="./assets/img/artworks-0R9gSQGhq4Cz5vLG-0E5MzA-t120x120.jpg" alt="" />
                                            </div>
                                            <div className="col slidebar-modul_item-content">

                                                <span>
                                                    Minh Phuong Doan
                                                </span>
                                                <span className="color-333">
                                                    Một mình có buồn không (Freak D)...
                                                </span>
                                                <div className="row slidebar-modul_item-content-rate" >
                                                    <span className="">
                                                        <i className="fa-solid fa-play font-11"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">
                                                        265K
                                                    </span>
                                                    <span>
                                                        <i className="fa-solid fa-heart font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">2.629</span>

                                                    <span>
                                                        <i className="fa-solid fa-repeat font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">1.916</span>

                                                    <span>
                                                        <i className="fa-solid fa-comment font-11" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="font-11 slidebar-modul_item-content-number">25</span>
                                                </div>


                                            </div>
                                            <div className="bar-right_play-btn">
                                                <span href="" className="bar-right_play-btn-background radius-50">
                                                    <i className="fa-solid fa-play"></i>
                                                </span>
                                            </div>

                                            <div className="button-group-small">

                                                <button className="bar-right_heart-btn color-f50">
                                                    <i className="fa-solid fa-heart"></i>
                                                </button>


                                                <button className="bar-right_heart-btn">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </button>

                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>

                            <div className="slidebar-modul">
                                <Link className="slidebar-modul_linkrefresh border-bottom" to="">
                                </Link>

                                <div className="sliderbar-footer">
                                    <Link className="link-sliderbarfooter" to="">Legal</Link>
                                    -
                                    <Link className="link-sliderbarfooter" to="">Privacy</Link>
                                    -
                                    <Link className="link-sliderbarfooter" to="">Cookie Policy</Link>
                                    -
                                    <Link className="link-sliderbarfooter" to="">Consent Manager</Link>
                                    -
                                    <Link className="link-sliderbarfooter" to="">Imprint</Link>
                                    -
                                    <Link className="link-sliderbarfooter" to="">Creator Resources</Link>
                                    -
                                    <Link className="link-sliderbarfooter" to="">Blog</Link>
                                    -
                                    <Link className="link-sliderbarfooter" to="">Charts</Link>
                                    -
                                    <Link className="link-sliderbarfooter color-38d" to="">Language: </Link> <span>English (US)</span>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

            </div>
            {/* <div className="player-control relative"> */}
            <div className="player-control_container row">

                <div className="player-control_btn-group">

                    <button >
                        <i className="fa-solid fa-backward-step"></i>
                    </button>
                    <button>
                        <i id="play-btn" className="fa-solid fa-play"></i>
                    </button>
                    <button onclick="Next()">
                        <i className="fa-solid fa-forward-step"></i>
                    </button>
                    <button onclick="shuffle()">
                        <i className="fa-solid fa-shuffle"></i>
                    </button>
                    <button onclick="Repeat()">
                        <i className="fa-solid fa-repeat"></i>

                    </button>
                </div>

                <div className="player-control_timeline">
                    <div className="timeline_time">
                        <span>
                            0:00
                        </span>
                    </div>

                    <input id="range-player" type="range" className="range-player" min="0" max="100" step="0.001" value="0" />

                    <div className="total-time">
                        <span>
                            6:01
                        </span>
                    </div>
                </div>
                <div className="player-control_volume-btn relative" >
                    <button >
                        <i className="fa-solid fa-volume-high"></i>
                    </button>

                    <div className="control-volume relative">
                        <input id="range-volume" className="range-volume" type="range" min="0" max="100" value="0" step="0.001" />
                    </div>

                </div>


                <div className="playing-info row" >
                    <div className="playing-info_img">
                        <img src="./assets/img/artworks-fBLlkXlVVQy3m9OW-dzt6jg-t500x500.jpg" alt="" />
                    </div>
                    <div className="playing-info_title col">
                        <Link to="">PVN music</Link>
                        <span>Độ Đúng Đời</span>
                    </div>

                    <div className="playing-info_btn-group" >
                        <button>
                            <i className="fa-solid fa-heart"></i>
                        </button>
                        <button>
                            <i className="fa-solid fa-user-plus"></i>
                        </button>
                        <button id="play-list-btn">
                            <i className="fa-solid fa-list"></i>
                        </button>
                    </div>
                </div>


            </div>
            {/* <div className="play-list"> */}
            <div className="play-list-header row">
                <div className="play-list-header_title">Next Up</div>
                <button className="play-list-header_clear">Clear</button>
                <button className="play-list-header_close"><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="play-list-container">
                <div className="col">

                    <div className="play-list-item row relative">

                        <div className="play-list-item_drag-btn font-size-12">
                            <i className="fa-solid fa-bars"></i>
                        </div>

                        <div className="play-list-item_img relative">
                            <img src="./assets/img/3107.jpg" alt="" />
                            <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                        </div>
                        <div className="play-list-item_info col">
                            <Link to="">3107</Link>
                            <span>W/n ft Duongg x Nâu</span>
                        </div>
                        <div className="play-list-item_footer relative">
                            <span className="play-list-item_total-time">3:52</span>

                            <div className="play-list-item_group-btn">
                                <button className="font-size-12  color-f50">
                                    <i className="fa-solid fa-heart"></i>
                                </button>
                                <button className="font-size-12">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="play-list-item row relative">
                        <div className="play-list-item_drag-btn font-size-12">
                            <i className="fa-solid fa-bars"></i>
                        </div>

                        <div className="play-list-item_img relative">
                            <img src="./assets/img/sddefault.jpg" alt="" />
                            <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                        </div>
                        <div className="play-list-item_info col">
                            <Link to="">Lost Sky</Link>
                            <span>NCS</span>
                        </div>
                        <div className="play-list-item_footer relative">
                            <span className="play-list-item_total-time">3:25</span>

                            <div className="play-list-item_group-btn">
                                <button className="font-size-12  color-f50">
                                    <i className="fa-solid fa-heart"></i>
                                </button>
                                <button className="font-size-12">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="play-list-item row relative">
                        <div className="play-list-item_drag-btn font-size-12">
                            <i className="fa-solid fa-bars"></i>
                        </div>

                        <div className="play-list-item_img relative">
                            <img src="./assets/img/artworks-000191567152-6ogpm0-t500x500.jpg" alt="" />
                            <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                        </div>
                        <div className="play-list-item_info col">
                            <Link to="">Cơn Mưa Cuối</Link>
                            <span>JustaTee x Binz</span>
                            <div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">4:11</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="play-list-item row relative">
                                <div className="play-list-item_drag-btn font-size-12">
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <div className="play-list-item_img relative">
                                    <img src="./assets/img/artworks-268DzyD0TKonqqou-TbjvCg-t500x500.jpg" alt="" />
                                    <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                                </div>
                                <div className="play-list-item_info col">
                                    <Link to="">Có Hẹn Với Thanh Xuân</Link>
                                    <span>Monstar</span>
                                </div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">3:25</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="play-list-item row relative">
                                <div className="play-list-item_drag-btn font-size-12">
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <div className="play-list-item_img relative">
                                    <img src="./assets/img/artworks-ZiZ39u9wsG5FDzD6-9uNOuA-t500x500.jpg" alt="" />
                                    <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                                </div>
                                <div className="play-list-item_info col">
                                    <Link to="">Phố Đã Lên Đèn</Link>
                                    <span>Huyền Tâm Môn</span>
                                </div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">3:25</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="play-list-item row relative">
                                <div className="play-list-item_drag-btn font-size-12">
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <div className="play-list-item_img relative">
                                    <img src="./assets/img/artworks-000405464955-n4ge52-t500x500.jpg" alt="" />
                                    <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                                </div>
                                <div className="play-list-item_info col">
                                    <Link to="">Walk Thru Fire</Link>
                                    <span>Meron Ryan</span>
                                </div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">3:25</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="play-list-item row relative">
                                <div className="play-list-item_drag-btn font-size-12">
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <div className="play-list-item_img relative">
                                    <img src="./assets/img/artworks-000458864706-ddcep5-t500x500.jpg" alt="" />
                                    <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                                </div>
                                <div className="play-list-item_info col">
                                    <Link to="">Title</Link>
                                    <span>Meghan Trainor</span>
                                </div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">3:25</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="play-list-item row relative">
                                <div className="play-list-item_drag-btn font-size-12">
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <div className="play-list-item_img relative">
                                    <img src="./assets/img/artworks-TeICxOAJkwB1gokt-WrF38Q-t500x500.jpg" alt="" />
                                    <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                                </div>
                                <div className="play-list-item_info col">
                                    <Link to="">TAEIL (태일) - Starlight (Twenty Five Twenty One 스물다섯 스물하나 OST Part 1)</Link>
                                    <span>L2ShareOST42</span>
                                </div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">3:25</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="play-list-item row relative">
                                <div className="play-list-item_drag-btn font-size-12">
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <div className="play-list-item_img relative">
                                    <img src="./assets/img/artworks-000125404277-g3oic3-t500x500.jpg" alt="" />
                                    <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                                </div>
                                <div className="play-list-item_info col">
                                    <Link to="">2AM</Link>
                                    <span>JustaTee feat Big Daddy</span>
                                </div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">3:25</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="play-list-item row relative">
                                <div className="play-list-item_drag-btn font-size-12">
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <div className="play-list-item_img relative">
                                    <img src="./assets/img/artworks-fBLlkXlVVQy3m9OW-dzt6jg-t500x500.jpg" alt="" />
                                    <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                                </div>
                                <div className="play-list-item_info col">
                                    <Link to="">Độ Đúng Đời</Link>
                                    <span>Thiện Hưng</span>
                                </div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">3:25</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="play-list-item row relative">
                                <div className="play-list-item_drag-btn font-size-12">
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <div className="play-list-item_img relative">
                                    <img src="./assets/img/artworks-ECsNcOayySc3ApMa-P7jm8g-t500x500.jpg" alt="" />
                                    <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                                </div>
                                <div className="play-list-item_info col">
                                    <Link to="">MUỘN RỒI MÀ SAO CÒN</Link>
                                    <span>Sơn Tùng MTP</span>
                                </div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">3:25</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="play-list-item row relative">
                                <div className="play-list-item_drag-btn font-size-12">
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <div className="play-list-item_img relative">
                                    <img src="./assets/img/artworks-000147758756-bmnnid-t500x500.jpg" alt="" />
                                    <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                                </div>
                                <div className="play-list-item_info col">
                                    <Link to="">Người từng thương</Link>
                                    <span>NHA</span>
                                </div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">3:25</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="play-list-item row relative">
                                <div className="play-list-item_drag-btn font-size-12">
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <div className="play-list-item_img relative">
                                    <img src="./assets/img/artworks-uuM7vrcFep49m56L-Hv2CAg-t500x500.jpg" alt="" />
                                    <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                                </div>
                                <div className="play-list-item_info col">
                                    <Link to="">FOREVER LOVE</Link>
                                    <span>viet underground</span>
                                </div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">3:25</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="play-list-item row relative">
                                <div className="play-list-item_drag-btn font-size-12">
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <div className="play-list-item_img relative">
                                    <img src="./assets/img/artworks-0yc4nMJVjUOWVfGw-hHVAUw-t500x500.jpg" alt="" />
                                    <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                                </div>
                                <div className="play-list-item_info col">
                                    <Link to="">Không Bằng</Link>
                                    <span>RIN Music</span>
                                </div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">3:25</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>


                            <div className="play-list-item row relative">
                                <div className="play-list-item_drag-btn font-size-12">
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <div className="play-list-item_img relative">
                                    <img src="./assets/img/artworks-oKwAaDWD59mIqHit-zwH5Jw-t500x500.jpg" alt="" />
                                    <div className="play-list-item_status-btn" ><i className="fa-solid fa-play"></i></div>
                                </div>
                                <div className="play-list-item_info col">
                                    <Link to="">Thích Em Hơi Nhiều</Link>
                                    <span>LoFi Version by 1 9 6 7</span>
                                </div>
                                <div className="play-list-item_footer relative">
                                    <span className="play-list-item_total-time">3:25</span>

                                    <div className="play-list-item_group-btn">
                                        <button className="font-size-12  color-f50">
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button className="font-size-12">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>




                        </div>
                    </div>
                </div>
                <audio id="audio" src="./assets/music/y2mate.com - ĐỘ ĐÚNG ĐỜI  THIỆN HƯNG ft ĐỘ MIXI  LYRIC AUDIO.mp3"></audio>
            </div>

        </>
    )
}
export default Home;