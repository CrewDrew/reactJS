import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
   //return React.createElement('div', {id: 'test-id'}, 'Hello from React');
   return <div id='test_id'>Hello from React new</div>
}

ReactDOM.render(<App />, document.querySelector('#root'));