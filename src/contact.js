import './style.css';

const contactComponent = () => {
  const component = document.createElement('div');
  component.classList.add('contact-container')

  const contactMap = document.createElement('p')
  contactMap.classList.add('contact-map')
  contactMap.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54203.72533183125!2d147.34795340447192!3d-35.99553871729794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b23b75c0dec51cf%3A0xca083fa5aa995b9f!2zMzbCsDAwJzA1LjMiUyAxNDfCsDIxJzE2LjciRQ!5e1!3m2!1sen!2sau!4v1634547552442!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`

  component.appendChild(contactMap)

  return component;
 }

export default contactComponent;