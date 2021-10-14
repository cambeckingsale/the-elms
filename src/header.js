import './style.css';

const headerComponent = () => {
  const component = document.createElement('header');
  component.classList.add('header');

  //------------------SITE LOGO-------------------
  const siteLogo = document.createElement('h1');
  siteLogo.classList.add('header-container')

  const icon = document.createElement('div')
  icon.classList.add('material-icons')
  icon.style.fontSize = 'xx-large'
  icon.classList.add('header-item-left')
  icon.innerText = 'cabin'
  siteLogo.appendChild(icon)

  const text = document.createElement('div')
  text.innerText = "THE ELMS";
  text.classList.add('header-item-left')
  siteLogo.appendChild(text)

  component.appendChild(siteLogo);
  //----------------------------------------------

  //-------------------NAVIGATION TABS------------
  const siteTabs = document.createElement('div');
  siteTabs.classList.add('header-container')

  const home = document.createElement('div');
  home.classList.add('header-item-right')
  home.innerText = 'Home'
  siteTabs.appendChild(home)

  const accom = document.createElement('div');
  accom.classList.add('header-item-right')
  accom.classList.add('header-item-vl')
  accom.innerText = 'Accomodation'
  siteTabs.appendChild(accom)

  const contact = document.createElement('div');
  contact.classList.add('header-item-right')
  contact.classList.add('header-item-vl')
  contact.innerText = 'Contact'
  siteTabs.appendChild(contact)

  component.appendChild(siteTabs);
  //----------------------------------------------

  return component;
 }

export default headerComponent;