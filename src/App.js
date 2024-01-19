import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetails from './Components/Posts - Details/Posts.Detaisl';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';



const App = () => {
  return (
    <div>
      <Header />
    <Router>
      <Routes>
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/" element={<Posts />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
