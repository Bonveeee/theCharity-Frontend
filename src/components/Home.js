import React from 'react'


function handleClick() {
  alert("See More!");
}

function Home() {
  
    return (
   <div className ="container">
    <img  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80" alt="kidspic" style={{width:"100%"}} />
      <div className="centered">
      <h1>Donate  4 a better world</h1>
 <h1>We have your back.
With one-quarter of our global team dedicated to trust and safety, we have successfully managed fundraisers worldwide for more than a decade. Dont worry about a thing, we have got you covered.</h1></div>
<button onClick={handleClick}>More about the campaign</button>
       </div>
       
    )
  }
  
  export default Home
  