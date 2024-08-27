<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
=======
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';



function App() {
  return (
    <div>
        <Navigation />
        <Hero />
        <Projects />
>>>>>>> 351353a6a5aacf53067ecadecf98fd3bede866ac
    </div>
  );
}

export default App;
