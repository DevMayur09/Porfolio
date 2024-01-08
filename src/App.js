import './App.css';
import Header from './components/header';
import Aboutme from './components/Aboutme';
import Blog from './components/Blog';
import Quates from './components/Quates';
import TeaWithMe from './components/TeaWithMe';

function App() {
  return (
    <div className='border-[10px] border-white'>
     <Header/>
     <Aboutme/>
     <Blog/>
     <Quates/>
     <TeaWithMe/>
    </div>
  );
}

export default App;
