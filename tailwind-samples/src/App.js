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

      {/* Example of adding Tailwind utility class directly to button elements.
      <section className="p-8 flex justify-between">
        <button className="h-12 min-w-40 bg-cust-blue hover:bg-cust-blue-lighter text-white font-medium py-1 px-12 rounded-3xl border-3 border-cust-blue">Primary</button>
        
        <button className="h-12 min-w-40 bg-white text-cust-blue font-medium hover:font-bold py-1 px-12 rounded-3xl border-3 hover:border-5 border-cust-blue">Secondary</button>

        <button className="h-12 min-w-40 bg-cust-gray-lighter hover:bg-cust-gray text-cust-blue font-medium py-1 px-12 rounded-3xl border-3 border-cust-gray-lighter hover:border-cust-gray">Tertiary</button>
      </section>

      <section className="p-8 flex justify-between bg-neutral-900">
        <button className="h-12 min-w-40 bg-white hover:bg-cust-zinc text-black font-medium py-1 px-12 rounded-3xl border-3 border-white hover:border-cust-zinc">Primary</button>

        <button className="h-12 min-w-40 bg-black text-white font-medium hover:font-bold py-1 px-12 rounded-3xl border-3 hover:border-5 border-white">Secondary</button>

        <button className="h-12 min-w-40 bg-cust-dark-gray hover:bg-cust-dark-gray-lighter text-white font-medium py-1 px-12 rounded-3xl border-3 border-cust-dark-gray hover:border-cust-dark-gray-lighter">Tertiary</button>
      </section>
      */}

      <section className="p-8 flex flex-col md:flex-row flex-nowrap justify-stretch md:justify-around">
        <button className="btn btn-primary m-2 md:m-0">Primary</button>
        <button className="btn btn-secondary m-2 md:m-0">Secondary</button>
        <button className="btn btn-tertiary m-2 md:m-0">Tertiary</button>
      </section>

      <section className="bg-neutral-900 p-8 flex flex-col md:flex-row flex-nowrap justify-stretch md:justify-around">
        <button className="btn btn-primary-dark m-2 md:m-0">Primary</button>
        <button className="btn btn-secondary-dark m-2 md:m-0">Secondary</button>
        <button className="btn btn-tertiary-dark m-2 md:m-0">Tertiary</button>
      </section>
    </div>
  );
}

export default App;
