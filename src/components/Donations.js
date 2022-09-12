import React, { useEffect, useState } from "react";

const donations_URL = "http://localhost:9292/donations";
console.log(donations_URL);

function Donations() {
  const [donations, setdonations] = useState([]);

  const donationsFetcher = () => {
    //fetches particulars of the donations
    fetch(donations_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdonations(data);
      });
  };

  useEffect(donationsFetcher, []);


  const eachdonation = donations.map((donation) => (
    <div className="grid" key={donation.id}>
     
      <div className="cards">
      <img
        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="kids"
      />
        <h5>Name:{donation.name}</h5>
        <h5>Location:{donation.location}</h5>
        <h5>Name: {donation.name}</h5>
        <p>{donation.description}</p>
       
      </div>
    </div>
  ));

  return (
    <div>
      <h1 id="donation-title">
       Current Partner Donations {" "}
      </h1>
      {}
      {eachdonation}
    </div>
  );
}

export default Donations;