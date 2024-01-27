import logo from './logo.svg';
import './App.css';
import Board from './components/board/Board'
import Start from './components/start/Start'
import Modal from './components/modal/Modal'
import { useContext } from 'react';
import { GameContext } from './context/GameContext';

function App() {
  const {screen} = useContext(GameContext)
  return (
    <div className="App">
      <div className='container'>
        {/* <Start/> */}
  {screen === 'start' && <Start/>}
  {screen === 'game' && <Board/>}
  <Modal />

    </div>
  </div>
  );
}

export default App;
