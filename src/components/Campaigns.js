import React, { useEffect, useState } from "react";

const CAMPAIGNS_URL = "http://localhost:9292/campaigns";
console.log(CAMPAIGNS_URL);

function Campaigns() {
  const [campaigns, setcampaigns] = useState([]);

  const campaignsFetcher = () => {
    //fetches particulars of the campaigns
    fetch(CAMPAIGNS_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setcampaigns(data);
      });
  };

  useEffect(campaignsFetcher, []);

  function handleClick() {
    alert("See More!");
  }

  const eachCampaign = campaigns.map((campaign) => (
    <div className="grid" key={campaign.id}>
     
      <div className="cards">
      <img
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="kids"
      />
        <h5>Name:{campaign.name}</h5>
        <h5>Location:{campaign.location}</h5>
        <h5>Name: {campaign.name}</h5>
        <p>{campaign.description}</p>
        <button onClick={handleClick}>More about the campaign</button>
      </div>
    </div>
  ));

  return (
    <div>
      <h1 id="campaign-title">
        Meet our International campaigns and Sponsors{" "}
      </h1>
      {}
      {eachCampaign}
    </div>
  );
}

export default Campaigns;
