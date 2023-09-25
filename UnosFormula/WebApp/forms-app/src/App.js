import logo from './logo.svg';
import './App.css';
import MathJax from 'react-mathjax'
import { useState } from 'react';

function App() {

    const [formula, setFormula] = useState('');
  return (
      <div className="App">

          <input value={formula} onChange={(e) => setFormula(e.target.value)} />
          <MathJax.Provider>
              <MathJax.Node formula={formula} />
          </MathJax.Provider>
    </div>
  );
}

export default App;
