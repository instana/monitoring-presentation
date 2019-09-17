import React, {useState} from 'react';

import NewTwoot from './NewTwoot';
import Twoots from './Twoots';

import 'antd/dist/antd.css';
import './App.css';

export default function App() {
  const [refresh, setRefresh] = useState(Date.now());

  return (
    <div className="app">
      <NewTwoot onRefresh={() => setRefresh(Date.now())}/>
      <Twoots refresh={refresh} />
    </div>
  );
}
