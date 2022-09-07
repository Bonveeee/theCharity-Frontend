import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Campaigns from "./Campaigns";
// import Donations from "./Donations";
// import Donors from "./Donors";
// import Home from "./Home";
// import Organizations from "./Organizations";
// import ReportsReviews from "./ReportsReviews";

//this is main  parent component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>

      {/* <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Donations" element={<Donations />}></Route>
        <Route exact path="/Donors" element={<Donors />}></Route>
        <Route exact path="/Campaigns" element={<Campaigns />}></Route>
        <Route exact path="/Organizations" element={<Organizations />}></Route>
        <Route exact path="/ReportsReviews" element={<ReportsReviews />}></Route>
      </Routes> */}
    </Router>
  );
}

export default App;
