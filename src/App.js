import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Aboutme from './components/Aboutme';
import Blog from './components/Blog';

function App() {
  return (
    <div className='border-[10px] border-white'>
     <Header/>
     <Aboutme/>
     <Blog/>
    </div>
  );
}

export default App;
