import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Header  from './components/Header';
// import HomePage from './pages/Homepage';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/login' element={< Login/>}/>
          <Route path='/register' element={< Register />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
