import React from 'react';

import NewPweet from './NewPweet';
import Pweets from './Pweets';

import 'antd/dist/antd.css';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <NewPweet />
      <Pweets />
    </div>
  );
}
