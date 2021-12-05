import React, { Component } from 'react';
import {useNavigate , useParams} from "react-router-dom" 

function Profile(props) {
    let navigate = useNavigate();
    
    // 파라미터로 받을값을 중괄호안에쓰고 useParam을 이용해서 값을 받음
    let {username} = useParams();

    return (
        <div>
        This is ProfilePage  <button onClick={() => {navigate("/about")}}>Change to about Page</button> And page for {username}!
        
        </div>
    );
}

export default Profile;




