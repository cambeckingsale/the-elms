import './style.css';
import Pod from './pod.jpg';
import Silo from './silo.jpg';
import Hut from './hut.jpg';

const accomComponent = () => {
  const component = document.createElement('div');
  component.classList.add('accom-container')

  const item1 = document.createElement('div');
  item1.classList.add('accom-item')
  const photo1 = document.createElement('img');
  photo1.src = Pod
  photo1.classList.add('accom-img')
  item1.appendChild(photo1)
  const text1 = document.createElement('div');
  text1.textContent = "The Pod"
  text1.classList.add('accom-text')
  item1.appendChild(text1);
  component.appendChild(item1)

  const item2 = document.createElement('div');
  item2.classList.add('accom-item')
  const photo2 = document.createElement('img');
  photo2.src = Silo
  photo2.classList.add('accom-img')
  item2.appendChild(photo2)
  const text2 = document.createElement('div');
  text2.textContent = "The Silo"
  text2.classList.add('accom-text')
  item2.appendChild(text2);
  component.appendChild(item2)

  const item3 = document.createElement('div');
  item3.classList.add('accom-item')
  const photo3 = document.createElement('img');
  photo3.src = Hut
  photo3.classList.add('accom-img')
  const text3 = document.createElement('div');
  text3.textContent = "The Hut"
  text3.classList.add('accom-text')
  item3.appendChild(photo3)
  item3.appendChild(text3);
  component.appendChild(item3)

  return component;
 }

export default accomComponent;