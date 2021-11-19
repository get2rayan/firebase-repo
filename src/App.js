import logo from './logo.svg';
import './App.css';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import { ImageGrid } from './comps/ImageGrid';
import Modal from './comps/Modal';
import { useState } from 'react';

function App() {
  // placeholder to select clicked image from grid to show it in modal
  const [selectedImg, setSelectedImg]=useState(null)

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />        
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={ setSelectedImg } />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
