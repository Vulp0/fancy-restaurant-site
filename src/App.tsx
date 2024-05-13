import './App.css';
import Navbar from './Navbar';

import G1 from './assets/img/G1.webp';
import G2 from './assets/img/G2.webp';
import G3 from './assets/img/G3.webp';
import G4 from './assets/img/G4.webp';
import G5 from './assets/img/G5.webp';
import G6 from './assets/img/G6.webp';
import G7 from './assets/img/G7.webp';
import G8 from './assets/img/G8.webp';
import G9 from './assets/img/G9.webp';

import A1 from './assets/img/A1.webp';
import A2 from './assets/img/A2.webp';

import F1 from './assets/img/F1.jpg';
import F2 from './assets/img/F2.jpg';
import F3 from './assets/img/F3.jpg';
import F4 from './assets/img/F4.jpg';
import F5 from './assets/img/F5.jpg';
import F6 from './assets/img/F6.jpg';
import F7 from './assets/img/F7.jpg';
import F8 from './assets/img/F8.jpg';

function App() {

  return (
    <>
    <Navbar></Navbar>
    
    <div className="Content">
      <img src={G1} className="MockImg TallPic"></img>
      <img src={G2} className='MockImg WidePic'></img>
      <img src={G3} className='MockImg TallPic'></img>
      <img src={G4} className='MockImg TallPic'></img>
      <img src={G5} className='MockImg TallPic'></img>
      <img src={G6} className='MockImg TallPic'></img>
      <img src={G7} className='MockImg TallPic'></img>
      <img src={G8} className='MockImg TallPic'></img>
      <img src={G9} className='MockImg WidePic'></img>
    </div>

    <div className="Quote">
      <h2>This could be your restaurant. <br/> A phrase would go here.</h2>
    </div>

    <div className="Actions">
      <img src={A1} className="ActionBlock"></img>
      <div className="ActionBlock">
        <div className="TextBlock">
          <h2>Reservations</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <button>RESERVE A TABLE</button>
        </div>
      </div>

      <img src={A2} className="ActionBlock"></img>
      <div className="ActionBlock">
        <div className="TextBlock">
          <h2>Menu</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <button>OUR MENU</button>
        </div>
      </div>
    </div>

    <div className="Filler">
      <img src={F1}/>
      <img src={F2}/>
      <img src={F3}/>
      <img src={F4}/>
      <img src={F5}/>
      <img src={F6}/>
      <img src={F7}/>
      <img src={F8}/>
    </div>
    </>
  )
}

export default App
