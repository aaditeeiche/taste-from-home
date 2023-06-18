import { Link } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import logo from './imgs/logo.jpg'

function App() {
  return (
    // px: padding from left and right (x-axis)
    // mobile version it is 2, desktop it is 4 decalred in header class

    <header className='fixed shadow-md w-full h-16 px-2 md:px-4'>
      {/* desktop version */}

      {/* centers the icon perfectly in the header bar vertically */}
      <div className='flex items-center h-full'>
        <Link to={""}>
          <div className='h-12'>
            <img src={logo} className='h-full' />
          </div>
        </Link>
      </div>

      {/* mobile version */}
    </header>
  );
}

export default App;
