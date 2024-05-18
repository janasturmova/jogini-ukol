import { render } from '@czechitas/render';
import '../global.css';
import './style.css'
import { Header, titulek } from './components/header';
import { Intro, intro } from './components/intro';
import { Pose, foto } from './components/pose';



document.querySelector('#root').innerHTML += render(
  <>
    <div id="app" class="app container">
      <Header title = {titulek.title}/>
      <Intro heading= {intro.heading}
             text= {intro.text}/>
      <Pose src = {foto.src}/>
    </div>
    
  </>
);

