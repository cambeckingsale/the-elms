import './style.css';

const homeComponent = () => {
  const component = document.createElement('div');
  component.classList.add('home-container')

  const homeText = document.createElement('p')
  homeText.classList.add('home-text')
  homeText.innerText = `THE ELMS, THOLOGOLONG` + String.fromCharCode(13) +
                        `36` + String.fromCharCode(176) + `00'05.3",` + 
                        `147` + String.fromCharCode(176) + `21'16.7",` + String.fromCharCode(13) +
                        ` Since June 2011`

  component.appendChild(homeText)

  return component;
 }

export default homeComponent;