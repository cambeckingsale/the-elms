import './style.css';

import { homeLoad, accomLoad } from './index';

const headerComponent = () => {
  const component = document.createElement('header');
  component.classList.add('header');

  //------------------SITE LOGO-------------------
  const siteLogo = document.createElement('h1');
  siteLogo.classList.add('header-container')

  const icon = document.createElement('div')
  icon.classList.add('material-icons')
  icon.classList.add('header-item-left')
  icon.style.fontSize = 'xx-large'
  icon.innerText = 'cabin'
  siteLogo.appendChild(icon)

  const text = document.createElement('div')
  text.innerText = "The Elms";
  text.classList.add('header-item-left')
  siteLogo.appendChild(text)

  siteLogo.addEventListener('click', homeClicked)

  component.appendChild(siteLogo);
  //----------------------------------------------

  //-------------------NAVIGATION TABS------------
  const siteTabs = document.createElement('div');
  siteTabs.classList.add('header-container')

  const home = document.createElement('div');
  home.setAttribute('id','home')
  home.classList.add('header-item-right')
  home.classList.add('header-item-selected');
  home.innerText = 'Home'
  home.addEventListener('click', homeClicked)
  siteTabs.appendChild(home)

  const vl1 = document.createElement('div');
  vl1.classList.add('header-vl')
  siteTabs.appendChild(vl1)

  const accom = document.createElement('div');
  accom.setAttribute('id','accom')
  accom.classList.add('header-item-right')
  accom.innerText = 'Accomodation & Facilities'
  accom.addEventListener('click', accomClicked)
  siteTabs.appendChild(accom)

  const vl2 = document.createElement('div');
  vl2.classList.add('header-vl')
  siteTabs.appendChild(vl2)

  const contact = document.createElement('div');
  contact.setAttribute('id','contact')
  contact.classList.add('header-item-right')
  contact.innerText = 'Contact'
  contact.addEventListener('click', contactClicked)
  siteTabs.appendChild(contact)

  component.appendChild(siteTabs);
  //----------------------------------------------

  return component;
 }

 function homeClicked() {
  document.getElementById('home').classList.add('header-item-selected');
  document.getElementById('accom').classList.remove('header-item-selected');
  document.getElementById('contact').classList.remove('header-item-selected');
  homeLoad()
}

function accomClicked() {
  document.getElementById('accom').classList.add('header-item-selected');
  document.getElementById('home').classList.remove('header-item-selected');
  document.getElementById('contact').classList.remove('header-item-selected');
  accomLoad()
}

function contactClicked() {
  document.getElementById('contact').classList.add('header-item-selected');
  document.getElementById('accom').classList.remove('header-item-selected');
  document.getElementById('home').classList.remove('header-item-selected');
  //accomLoad()
}

export default headerComponent;