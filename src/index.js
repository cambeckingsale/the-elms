import './style.css';
import headerComponent from './header';

function component() {
  const component = document.createElement('div');

  component.appendChild(headerComponent())

  return component;
 }

document.querySelector('#content').appendChild(component());