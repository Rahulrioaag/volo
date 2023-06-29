import './App.css';
import CardListingPage from './volo/Home';
import Home from './volo/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import All from './volo/pages/All';
import Blocked from './volo/pages/Blocked';
import Your from './volo/pages/Your';
import NavigationBar from './volo/NavigationBar';
import Filter from './volo/Filter';
import BasicPopover from './volo/Filter';

function App() {
  return (
    <div className="App">
       <Router>
       <NavigationBar />
       <hr />
       <BasicPopover />
       <Routes>
          <Route path="/" element={<All />}/>
          <Route path="/Your" element={<Your />}/>
          <Route path="/Blocked" element={<Blocked />}/>
          <Route path="*" element={<h1>PAGE NOT FOUNT</h1>}/>
       </Routes>

     </Router>
    </div>
  );
}

export default App;
