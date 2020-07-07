import React, { Profiler } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const profile = () => {
    return (
        <>
        <Head><title>내 프로필 | JS</title></Head>
        <AppLayout>내 프로필</AppLayout>
        </>
    );
};

export default profile;