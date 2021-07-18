import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Footer from './components/Footer/Footer.js';

import Dashboard from './views/Dashboard/Dashboard.js';
require("typeface-nunito");

function App() {
  return (
    <div className="app">
      <Navigation />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
