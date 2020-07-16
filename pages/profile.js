import React, { Profiler } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const profile = () => {
    const followerList = [{nickname:"제로초"},{nickname:"바보"},{nickname:"JSTAR"}];
    const followingList = [{nickname:"제로초"},{nickname:"바보"},{nickname:"JSTAR"}];

    return (
        <>
        <Head><title>내 프로필 | JS</title></Head>
        <AppLayout>
            <NicknameEditForm/>
            <FollowList header="팔로잉 목록" data={followingList}/>
            <FollowList header="팔로워 목록" data={followerList}/>
        </AppLayout>
        </>
    );
};

export default profile;