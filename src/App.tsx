import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header'
import Layout from './components/Layout';
import Price from './pages/Price'
import Team from './pages/Team'

function App() {
  
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Price />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
