// import React from 'react';
// // import { adds } from './adds';
// import Checkif from './Checkif';

// const Ads = ({n2}) =>{
// 		const n1 = n2.split(" ");
// 		return(
// 			<div className="tc">{			
// 			    n1.map((user,i)=>{
// 			    	return(
// 			    		fetch('http://localhost:3000/', {
// 					        method: 'post',
// 					        headers: {'Content-Type': 'application/json'},
// 					        body: JSON.stringify({
// 					            s:n1
// 					       	})
// 				        })
// 				        .then(response => response.json())
// 				        .then(count => {
// 				        	count.length === 0?
// 				        	<></>:
// 				        	<Checkif key={count.imageUrl}
// 			    			s={count.imageUrl}/>
// 				        })
// 			    	)
// 			    })
// 			}
// 			</div>
// 		)
// }

// export default Ads;