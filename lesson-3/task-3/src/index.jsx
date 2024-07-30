import React from "react";
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from "./Comment";

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars3.githubusercontent.com/u10001',
};

ReactDOM.render(
  <Comment 
    author={userInfo}
    text="Good job!"
    date={new Date('2019-01-01T11:32:19.56Z')}
  />, 
  rootElement
);

