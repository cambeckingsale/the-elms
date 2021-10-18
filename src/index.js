import './style.css';
import headerComponent from './header';
import homeComponent from './home';
import accomComponent from './accom';
import contactComponent from './contact'

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

function contactComp() {
  const component = document.createElement('div');

  component.appendChild(headerComp);
  component.appendChild(contactComponent())

  return component;
}

function contactLoad() {
  const content = document.querySelector('#content');
  content.textContent = "";
  content.appendChild(contactComp());
}

export {accomLoad, homeLoad, contactLoad}

const headerComp = headerComponent();
homeLoad();