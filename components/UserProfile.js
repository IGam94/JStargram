import React,{useCallback} from 'react';
import { Card, Avatar, Button } from 'antd';
import {useDispatch} from 'react-redux';
import {logOutAction} from '../reducers/user';

const Userprofile = () =>{
  const dispatch = useDispatch();
  const onLogOut = useCallback(
    () => {
      dispatch(logOutAction())
    },[]);
  
  return (
    <Card
      actions={[
        <div key="instar">게시글</div>,
        <div key="followings">팔로잉</div>,
        <div key="followers">팔로워</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>JS</Avatar>}
        title="JS"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  )
}

export default Userprofile;