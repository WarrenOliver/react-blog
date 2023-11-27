import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleBlogPage from './components/SingleBlogPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="content">
          <Routes>
            {/* Define the route and its corresponding component */}
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs" element={<Home />} />
            <Route path="/blogs/:id" element={<SingleBlogPage />} />
            <Route path="*" element={<PageNotFound />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;