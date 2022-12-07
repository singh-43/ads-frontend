import React from 'react';
import Checkif from './Checkif';

const Ads = ({n1}) =>{
		return(
			<div className="tc">{	
				fetch('http://localhost:3000/')
			    .then(response=>response.json())
			    .then(adds => {	
				    	adds.map((user)=>{
				    	return(
				    		<Checkif key={user.name}
				    		name={user.name}
				    		url={user.imageUrl} 
				    		s1={n1}/>
				    	)
			    	})	
			    })
			}
			</div>
		)
}

export default Ads;