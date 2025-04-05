import './App.css';
import React, { useState } from 'react';
// import {QRCodeSVG} from 'qrcode.react';

function App() {
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);


  return (
    <div className="App">
      <div className="container">
        <h1>The QR Generator</h1>
        {!done && <h2>Please Enter the link :-</h2>}
        {!done && <input
          type="text"
          placeholder="Enter text or URL"
          value={input}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setDone(!done);
            }
          }}
          onChange={(e) => setInput(e.target.value)}
        />}
        {done && <h2>The Qr for </h2>}
        {done && <img src={"https://qr-generator-server-tau.vercel.app/api?text=" + input} alt="" />}
        {done && <p><a href={input}>{input}</a></p>}
        <button onClick={() => setDone(!done)} className='button-28' >{done ? "Redo" : "Submit"}</button>
      </div>
    </div>
  );
}

export default App;
