import React from 'react';
import 'antd/dist/antd.css';

const App = ({Component}) =>{
    return(
        <>
        <head>
            <meta charSet="utf-u" />
            <title>JStargram</title>
        </head>
        <Component />
        </>
    )
}



export default App;