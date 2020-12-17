import {Avatar} from "@material-ui/core";
import React, {useState, useEffect} from 'react'
import "./Chat.css";


function Chat() {
    const[seed, setSeed] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);
    return     <div classNmae="chat">
            
        

        <div className="chat_header">
<Avatar src="https:avatars.dicebear.com/api/human/${seed}.svg"/>
<div className="chat_headerInfo">
    <h3>Room Name</h3>
    <p>Last Seen at....</p>
</div>
<div className></div>
        </div>
        <div className="chat_body">

        </div>

        <div className="chat_footer">


        </div>
        </div>
    
}

export default Chat;
