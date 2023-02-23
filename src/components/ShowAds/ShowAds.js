import React from 'react';
// import Checkif from './Checkif';

const ShowAds = ( {search} ) => {
  const n = search.split(" ");
  const callapi =(user)=> {
              fetch('http://localhost:3001/show',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              input: user
            })
          })
          .then(response=>response.json())
          .then(adds =>
            console.log(adds)                          
          )
  }
  return (

    <div className="center">{   
      n.map((user)=>{
        callapi(user)
        return (
          console.log("Image")
        )         
      })
    }
    </div>
  )
}

export default ShowAds;
