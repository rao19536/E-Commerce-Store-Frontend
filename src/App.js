import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import Login from './components/login/Login'
import Register from './components/register/registerUser'
import CartContainer from './containers/cart/cartContainer'
import Users from './containers/users/users'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './private-routes/PrivateRoutes'
// import Profile from './components/profile/profile'
import ProfileContainer from './containers/profile/profileContainer'
import 'antd/dist/antd.min.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<Navbar />} >
            <Route path='/' element={<CartContainer />} />
            <Route path='/users' element={<Users />} />
            <Route path='/profile' element={<ProfileContainer />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
