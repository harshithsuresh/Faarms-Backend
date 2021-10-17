import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';

function App() {
  return (
    <Router>
      <div className="h-screen w-full ">
        <NavBar />
        <main>
          <div className="container py-3 ">
            <Route path="/" component={HomeScreen} exact />
          </div>
        </main>
      </div>
    </Router>
  );
}
export default App;
