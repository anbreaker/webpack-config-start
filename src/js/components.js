import '../css/components.css';
import webpackLogo from '../assets/img/webpack-logo.png';

export const greet = (name) => {
  console.log('Create tag h1');

  const h1 = document.createElement('h1');
  h1.innerText = `Hello, ${name}`;

  document.body.append(h1);

  // Img
  // const img = document.createElement('img');
  // img.src = webpackLogo;
  // document.body.append(img);
};
