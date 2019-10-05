import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import './styles/style.scss';

const ROOT = document.querySelector('#root');

render(<App />, ROOT);