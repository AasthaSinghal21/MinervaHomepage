import './App.css';
// import image from "img1.png";
import Session from './components/Sessions/SessionCard';
import NewCard from './components/NewSection/NewCard.jsx';
import Community from './components/Comm/Community.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Goals from './components/Goals/Goals.jsx';

const arrow = <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 -960 960 960" width="17"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>

function App() {
  return (
    <>
    <Navbar/>
    <div className='first-div'>
      <div className='title'>
        <h1 className='heading'>MINERVA</h1>
        <p>Your Gateway to Tech Career</p>
      </div>
    </div>

    <div className='aboutus-sec'>
      <div className='headings'>
        <h1 className='sub-heading'>About Us</h1>
      </div>
     <div className='description'>
      <div className='left-sec'>
        {/* <img src="img1.png" alt="image"/> */}
      </div>
      <div className='right-sec'>
        <p>Minerva is the Tech Forum of IGDTUW, with an aim to be the one-stop destination for guidance and motivation for our students, from our remarkable seniors and alumni. While our work at Minerva can never be complete, our attempt to pass on words of wisdom from our seniors will be tireless.</p>
      </div>
      </div> 
      <Goals/>
    </div>
    <div className='sessions'>
      <div className='headings'>
        <h1 className='sub-heading'>Trending Sessions</h1>
        <button className="custom-btn btn-16">Explore More {arrow}</button>
      </div>
      <Session/>
    </div>
    
    <div className='new'>
      <div className='headings'>
        <h1 className='sub-heading'>What's New</h1>
        <button className="custom-btn btn-16">Explore More {arrow}</button>
      </div>
      <NewCard/>
    </div>

    <Community/>

    </>
  );
}

export default App;
