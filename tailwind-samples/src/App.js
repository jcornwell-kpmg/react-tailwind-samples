import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
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

      <section className="flex flex-col items-center my-16">
        <h1 className="text-4xl text-center">
          Tailwind CSS makes styling React components easier!
        </h1>

        <a
          className="bg-blue-500 text-white p-2.5 w-fit mt-9"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
      </section>
    </div>
  );
}

export default App;
