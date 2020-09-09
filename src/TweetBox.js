import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTweet } from './actions';
import {Avatar,Button} from 'antd';
import DateTimePicker from 'react-datetime-picker';
import {UserOutlined} from '@ant-design/icons';
import './TweetBox.css';

const TweetBox = ({ tweets, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    const [datePickerValue, setDatePickerValue] = useState(new Date());
    function onChange(date) {
        setDatePickerValue(date);
      }

    return (
        <div class="tweetBox">
            
        <div className="tweetBox__input">
        <Avatar size={80} icon={<UserOutlined />} />
            <input
                className="new-tweet-input"
                type="text"
                placeholder="What's Happening"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
                 </div>
                 
                 <div className="upload">
                 <h2 className="Expiry">Disappear Tweet At:</h2>   
                 <DateTimePicker
        onChange={onChange}
        value={datePickerValue}
        isClockOpen={false}
        className="DateTime"
       
      />
            <Button
                onClick={() => {
                    if (inputValue.length > 0) {
                    const isDuplicateText =
                        tweets.some(tweet => tweet.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue,datePickerValue);
                        setInputValue('');
                        setDatePickerValue(new Date());
                    }
                }}
            }
                className="tweetBox_tweetButton">
                Tweet
            </Button>
        </div>
        </div>
    );
};

const mapStateToProps = state => ({
    tweets: state.tweets,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: (text,endDate) => dispatch(createTweet(text,endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TweetBox);