import { Skeleton, Card, Avatar } from 'antd';
import React from 'react';

import './Pweet.css';

export default function Pweet({title, description, loading}) {
  return (
    <div className="pweet">
      <Card>
        <Skeleton loading={loading} avatar active>
          <Card.Meta
            avatar={
              <Avatar src="https://lorempixel.com/200/200/abstract/" />
            }
            title={title}
            description={description}
          />
        </Skeleton>
      </Card>
    </div>
  );
}
