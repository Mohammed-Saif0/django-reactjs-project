import './css/App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup'
import FriendList from './pages/FriendList'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import PrivateRoute from './utils/PrivateRoute';
import  {AuthProvider}  from './context/AuthContext';

function App() {
  return (
<div className='main'>
    <div className="App">
      <Router>
        <AuthProvider>
        <Header className = "header" />
    <div />
    <div className='middleone' />
        <Routes>
        <Route  path="/"   element={<PrivateRoute>  <HomePage /> </PrivateRoute>}/>
            <Route path='/login' element = {<LoginPage/>} />
            <Route path = "/signup" element={<Signup/>} />
            <Route path="/FriendList" element={<PrivateRoute><FriendList/></PrivateRoute>} />
        </Routes>
        </AuthProvider>

      </Router>
    </div>
    </div>
  );
}

export default App;
