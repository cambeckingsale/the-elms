import './style.css';

const homeComponent = () => {
  const component = document.createElement('div');
  component.classList.add('home-container')

  const homeText = document.createElement('p')
  homeText.classList.add('home-text')
  homeText.innerText = "Take a break from it all... and find yourself kite-surfing on the idyllic Lake Hume, tucking in to a wood-fired pizza and sleeping among the stars."

  component.appendChild(homeText)

  return component;
 }

export default homeComponent;