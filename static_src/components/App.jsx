import React from 'react';

import { Message } from './Messages/Messages.jsx' 

const App = () => {
    return <div id='test_id'>
        <H1>Hello from React</H1>
        <Message text='New message'/>
        </div>;
}

export { App };