import { render } from '@czechitas/render';
import './style.css'
import { Header, titulek } from './components/header';
import { Intro, intro } from './components/intro';
import { Pose, foto } from './components/pose';
import obr from '../img/yoga-pose.jpg'



document.querySelector('#root').innerHTML += render(
  <>
    <div id="app" className="app container">
      <Header title = {titulek.title}/>
      <Intro heading= {intro.heading}
             text= {intro.text}/>
      <Pose src = {obr}/>
    </div>
    
  </>
);

