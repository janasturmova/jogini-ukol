import { render } from '@czechitas/render';
import '../global.css';
import './style.css'
import { Header } from './components/header';
import { Intro } from './components/intro';

// const HomePage = () => {
//   return (
//    <div id="app" className="app container">
//      <Header title = "Jogíni"/>
//      <Intro heading="Vítejte mezi Jogíny"
//             text="Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
//             něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
//             Postupně se seznámíte se základními principy jógy, jak přístupovat k
//             sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
//             svoje tělo, pocity a emoce."/>
//      <Pose src="img/yoga-pose.jpg"/>
//     </div>
//   )
// }

document.querySelector('#root').innerHTML += render(
  <>
    <div id="app" class="app container">
      <Header title = "Jogíni"/>
      <Intro heading="Vítejte mezi Jogíny"
              text="Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
              něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
              Postupně se seznámíte se základními principy jógy, jak přístupovat k
              sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
              svoje tělo, pocity a emoce."/>
     </div>
     <img src="img/yoga-pose.jpg"/>
  </>
);
