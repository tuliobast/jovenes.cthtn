import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './assets/css/base/base.css';
import './assets/css/components/card.css'
import Header from './components/Header';
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import { Post } from './pages/Post';

function App() {

  return (  
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='posts/:id' element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;