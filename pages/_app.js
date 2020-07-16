import React from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import wrapper from '../store/configureStore';


const App = ({Component}) =>{
    return(
        <>
        <Head>
            <meta charSet="utf-u" />
            <title>JStargram</title>
        </Head>
        <Component />
        </>
    )
}



export default wrapper.withRedux(App);