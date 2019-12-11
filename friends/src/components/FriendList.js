import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

import FriendForm from "./FriendForm"; 

const FriendList = () => {
    const [friends, setFriends] = useState([]); 

    useEffect (() => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            console.log(res.data);
            setFriends(res.data);
        })
        .catch(error => console.log(error))
}, []);

    return (
        <div>
            <h2> Add New Friend </h2>
            <FriendForm /> 
            <h3> You have { friends.length} friends! </h3>

        </div>
    )

}


export default FriendList; 