import logo from './logo.svg';
import './App.scss';

export const App = () => {
  return (
    <>
      <div className="text-center">
        <header className="bg-react min-h-screen flex flex-col items-center justify-center text-white text-2xl">
          <img src={logo} className="h-react pointer-events-none App-logo"  alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="color-cyan"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  )
}
