import './App.css';
import Navbar from './Navbar';

function App() {

  return (
    <>
    <Navbar></Navbar>
    
    <div className="Content">
      <img src='./src/assets/img/G1.webp' className="MockImg TallPic"></img>
      <img src='./src/assets/img/G2.webp' className='MockImg WidePic'></img>
      <img src='./src/assets/img/G3.webp' className='MockImg TallPic'></img>
      <img src='./src/assets/img/G4.webp' className='MockImg TallPic'></img>
      <img src='./src/assets/img/G5.webp' className='MockImg TallPic'></img>
      <img src='./src/assets/img/G6.webp' className='MockImg TallPic'></img>
      <img src='./src/assets/img/G7.webp' className='MockImg TallPic'></img>
      <img src='./src/assets/img/G8.webp' className='MockImg TallPic'></img>
      <img src='./src/assets/img/G9.webp' className='MockImg WidePic'></img>
    </div>

    <div className="Quote">
      <h2>This could be your restaurant. <br/> A phrase would go here.</h2>
    </div>

    <div className="Actions">
      <img src='./src/assets/img/A1.webp' className="ActionBlock"></img>
      <div className="ActionBlock">
        <div className="TextBlock">
          <h2>Reservations</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <button>RESERVE A TABLE</button>
        </div>
      </div>

      <img src='./src/assets/img/A2.webp' className="ActionBlock"></img>
      <div className="ActionBlock">
        <div className="TextBlock">
          <h2>Menu</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <button>OUR MENU</button>
        </div>
      </div>
    </div>

    <div className="Filler">
      <img src="./src/assets/img/F1.jpg"/>
      <img src="./src/assets/img/F2.jpg"/>
      <img src="./src/assets/img/F3.jpg"/>
      <img src="./src/assets/img/F4.jpg"/>
      <img src="./src/assets/img/F5.jpg"/>
      <img src="./src/assets/img/F6.jpg"/>
      <img src="./src/assets/img/F7.jpg"/>
      <img src="./src/assets/img/F8.jpg"/>
    </div>
    </>
  )
}

export default App
