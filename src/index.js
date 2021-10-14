import './style.css';
import headerComponent from './header';
import homeComponent from './home';
import accomComponent from './accom';

function homeComp() {
  const component = document.createElement('div');

  component.appendChild(headerComp);
  component.appendChild(homeComponent())

  return component;
}

function homeLoad() {
  const content = document.querySelector('#content');
  content.textContent = "";
  content.appendChild(homeComp());
}

function accomComp() {
  const component = document.createElement('div');

  component.appendChild(headerComp);
  component.appendChild(accomComponent())

  return component;
}

function accomLoad() {
  const content = document.querySelector('#content');
  content.textContent = "";
  content.appendChild(accomComp());
}

export {accomLoad, homeLoad}

const headerComp = headerComponent();
homeLoad();