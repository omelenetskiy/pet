import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Here is staging branch deploy-3</p>
        console.log(process.env.NAME);
        {process.env.NAME === 'John' && (
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        )}
      </header>
    </div>
  );
}

export default App;
