import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Writing from "../../pages/Writing";
import OnTheDotPost from "../../pages/OnTheDotPost";
import LivePlayPost from "../../pages/LivePlayPost";
import NavigaitPost from "../../pages/NavigaitPost";
import './navigate.css';

function Navigate() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/projects/onthedot" element={<OnTheDotPost />} />
        <Route path="/projects/liveplay" element={<LivePlayPost />} />
        <Route path="/projects/navigait" element={<NavigaitPost />} />
      </Routes>
    </Router>
  );
}

export default Navigate;
