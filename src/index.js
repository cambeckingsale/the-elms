import './style.css';
import headerComponent from './header';
import homeComponent from './home';

function init() {
  const component = document.createElement('div');

  component.appendChild(headerComponent())
  component.appendChild(homeComponent())

  return component;
 }

document.querySelector('#content').appendChild(init());