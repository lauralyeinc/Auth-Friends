import React, { useState } from 'react';
import axiosWithAuth from "../axiosWithAuth";

const FriendForm = () => {
    const [newFriend, setNewFriend] = useState({
        name: "", age: "", email: ""
    })

    const handleChange = event => {
        setNewFriend({
            ...newFriend, 
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
        .post("/friends", newFriend)
        .then(res => {
            console.log( "FriendForm.js, handleSubit: res", res)
            setNewFriend({
                name: '',
                age: '',
                email: ''
            })
            window.location.reload(false);
        })
        .catch(error => {
            console.log("FriendForm.js: handleSubmit: error", error);
        })
    }

    return (
        <div> 
            <form onSubmit = {handleSubmit} >
                <input 
                    placeholder="name"
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange}
                    />
                <input
                    placeholder="age"
                    type="number"
                    name="age"
                    value={newFriend.age}
                    onChange={handleChange}
                    />
                <input 
                    placeholder="email"
                    type="email"    
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange}
                    /> 
            </form>
        </div>
    )
}

export default FriendsForm; 