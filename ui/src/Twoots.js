import React, {Fragment} from 'react';

import {usePromise} from './usePromise';
import {getTwoots} from './api';

import Twoot from './Twoot';

export default function Twoots({refresh}) {
  const [twoots] = usePromise(getTwoots, refresh);

  return (
    <Fragment>
      {twoots == null && <Twoot loading />}
      {twoots != null && twoots.map(twoot => (
        <Twoot key={twoot.id} author={twoot.author} description={twoot.text} />
      ))}
    </Fragment>
  );
}
