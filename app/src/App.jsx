import './App.css'; 
import Profile from './components/Profile';
import Login from './components/Login';

const App = () => { 
  return ( 
    <section className='app'>
      <p>Hello World from Redux!</p>
      <Profile /> 
      <Login /> 
    </section>
  )
}

export default App
