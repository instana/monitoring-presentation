import React from 'react';

import NewTwoot from './NewTwoot';
import Twoots from './Twoots';

import 'antd/dist/antd.css';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <NewTwoot />
      <Twoots />
    </div>
  );
}
