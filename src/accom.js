import './style.css';

const accomComponent = () => {
  const component = document.createElement('div');
  component.classList.add('accom-container')

  const item1 = document.createElement('div');
  item1.classList.add('accom-item')
  component.appendChild(item1)

  const item2 = document.createElement('div');
  item2.classList.add('accom-item')
  component.appendChild(item2)

  const item3 = document.createElement('div');
  item3.classList.add('accom-item')
  component.appendChild(item3)

  const item4 = document.createElement('div');
  item4.classList.add('accom-item')
  component.appendChild(item4)

  const item5 = document.createElement('div');
  item5.classList.add('accom-item')
  component.appendChild(item5)

  return component;
 }

export default accomComponent;