import React from 'react'
import './Widgets.css';
import {SearchOutlined } from '@ant-design/icons';
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
            <SearchOutlined className="widgets__searchIcon"/>
            <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
<TwitterTweetEmbed tweetId="1309370362484928513"/>
<TwitterTimelineEmbed sourceType="profile" screenName="ZSAssociates" options={{height:400}}/>
<TwitterShareButton url={"https://www.zs.com/"} options={{text:"ZS is awesome",via:"Aashu yadav"}}/>
        </div>
        </div>
    )
}

export default Widgets
