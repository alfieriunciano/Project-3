import React from "react";

const Message = (props) => {
    return(
        <div class="row msg_container base_sent">
            <div class="col-md-10 col-xs-10">
                <div class="messages msg_sent">
                    <p>{props.text}</p>
                    <time datetime="2009-11-13T20:00">{props.user} • {props.time}</time>
                </div>
            </div>
        </div>
    )
}

export default Message;