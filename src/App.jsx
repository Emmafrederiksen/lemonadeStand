import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout
import Layout from './components/layout/Layout.jsx';

// Pages
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';

function App() {

  return ( 
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/shop' element={ < Shop />} />
          <Route path='/cart' element={ < Cart /> } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
