 import React, { useEffect, useState } from "react";

const DONORS = "http://localhost:9292/donors"
console.log(DONORS)



function Donors() {
    const [donors, setDonors] = useState([]);
  
    const donorsFetcher = () => {
      //fetches particulars of the donors 
      fetch(DONORS)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDonors(data);
        });
    };
  
    useEffect(donorsFetcher, []);

    function handleClick() {
        alert("See More!");
      }

  const eachDonor = donors.map((donor) => (
    <div className="grid">
      <div className="cards">
        <img
          src="https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTg4MzUxMDMwODY4NTgzOTU1/verstappen-dts.webp"
          alt="donor"
        />
        <div className="text" key={donor.id}>
          <h3>Name: {donor.name}</h3>
        <h4>Email:{donor.email}</h4>
          <h4>Phone: {donor.phone}</h4>
          <h4>Address: {donor.address}</h4>
          <h4>Country: {donor.country}</h4>
          <button onClick={handleClick}>More about the Donor</button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1 id="donor-title">Meet our  International Donors and Sponsors  </h1>
      {}
      {eachDonor}
    </div>
  );
}

export default Donors;