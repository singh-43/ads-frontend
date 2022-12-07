import React, { Component } from 'react';
// import Ads from './Ads';

const ShowAds = ( {search} ) => {
  const n = search.split(" ");
  return (
    <div className="center">{   
      n.map((user)=>{
        return (
          fetch('http://localhost:3000/',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              input: n
            })
          })
          .then(response=>response.json())
          .then(adds => console.log(adds))
        )  
      })
    }
    </div>
  )
}

export default ShowAds;
