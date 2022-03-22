//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}

      <section className="p-8 flex justify-between">
        <button className="h-12 min-w-40 bg-blue-700 hover:bg-blue-500 text-white font-medium py-1 px-12 rounded-3xl border-3 border-blue-700">Primary</button>

        <button className="h-12 min-w-40 bg-white text-blue-700 font-medium hover:font-bold py-1 px-12 rounded-3xl border-3 hover:border-5 border-blue-700">Secondary</button>

        <button className="h-12 min-w-40 bg-gray-100 hover:bg-gray-200 text-blue-700 font-medium py-1 px-12 rounded-3xl border-3 border-gray-100 hover:border-gray-200">Tertiary</button>
      </section>
    </div>
  );
}

export default App;
