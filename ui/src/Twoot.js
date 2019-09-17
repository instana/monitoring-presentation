import { Skeleton, Card, Avatar } from 'antd';
import React from 'react';

import './Twoot.css';

export default function Twoot({author, description, loading}) {
  return (
    <div className="twoot">
      <Card>
        <Skeleton loading={loading} avatar active>
          <Card.Meta
            avatar={
              <Avatar src={`https://lorempixel.com/200/200/abstract/?author=${author}`} />
            }
            title={author}
            description={description}
          />
        </Skeleton>
      </Card>
    </div>
  );
}
