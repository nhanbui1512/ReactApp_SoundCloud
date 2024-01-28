import React from 'react';
import './profile.scss';


function Profile() {
  return (
    <div className="container">
        <div className="info-user">
            <img className = "img-email" src="" alt="" />
            <div className='name-user'>
                <div className="lb1">Nguyễn Chí Quốc</div>
                <br />
                <div className="lb2">Nguyễn Chí Quốc</div>
            </div>
            <button className='btn-update-img'><span className='camera' role="img" aria-label="camera icon">📷</span> Upload header image</button> 
        </div>
        <div className="info-bot">
            <ul className='nav-list'>
                <li>All </li>
                <li>Popular track</li>
                <li>Tracks</li>
                <li>Albums</li>
                <li>Playlists</li>
                <li>Reports</li>
                <button className='btn-share'>Share</button>
                <button className='btn-edit'>Edit</button>
            </ul>
            
        </div>
    </div>
  );
}

export default Profile;