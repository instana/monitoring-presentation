import { Skeleton, Card, Avatar } from 'antd';
import React from 'react';

import './Twoot.css';

export default function Twoot({title, description, loading}) {
  return (
    <div className="twoot">
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
