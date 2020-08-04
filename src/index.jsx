import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import Buttons from './Buttons.jsx';

ReactDOM.render(<Buttons count={5} />, document.getElementById('container'));

const AppWithHot = hot(module)(Buttons);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="Jane" />, mountNode);
