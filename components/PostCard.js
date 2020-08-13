import React from 'react';
import { Card, Popover,Button, Avatar, List } from 'antd';
import { RetweetOutlined,HeartOutlined,MessageOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
const PostCard = ({post}) => {
  const id = useSelector((state)=>state.user.me?.id);

  return (
    <div>
      <Card
        cover ={post.Images[0] && <PostImages images={post.Images}/>}
        actions={[
          <RetweetOutlined key="retweet"/>,
          <HeartOutlined key="heart"/>,
          <MessageOutlined key="comment"/>,
          <Popover key="more" content={(
            <Button.Group>
              {id && post.User.id===id 
              ? (
                <>
                <Button>수정</Button>
                <Button type="danger">삭제</Button>
                </>
              )
              :
              <Button>신고</Button>}
            </Button.Group>
          )}>
          </Popover>
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
        </Card>
        {commentFormOpened}
        
    </div>
  )
}
export default PostCard;