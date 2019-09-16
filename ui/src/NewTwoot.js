import { Form, Input, Button, Card } from 'antd';
import React, {useState} from 'react';

import {twoot} from './api';

import './NewTwoot.css';

export default function NewTwoot() {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="newTwoot">
      <Card title="New Twoot">
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={e => {
          e.preventDefault();
          twoot(author, content)
            .then(() => window.location.reload(), () => window.location.reload());
        }}>
          <Form.Item label="Author">
            <Input value={author} onChange={e => setAuthor(e.target.value)}/>
          </Form.Item>

          <Form.Item label="Twoot">
            <Input.TextArea
              value={content}
              onChange={e => setContent(e.target.value)}
              autosize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
