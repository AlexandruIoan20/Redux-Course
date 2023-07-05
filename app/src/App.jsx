import './App.css'; 
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';

const App = () => { 
  return ( 
    <section className='app'>
      <p>Hello World from Redux!</p>
      <Profile /> 
      <Login /> 
      <ChangeColor /> 
    </section>
  )
}

export default App
