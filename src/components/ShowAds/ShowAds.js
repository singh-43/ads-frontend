// import React from 'react';
// import Checkif from './Checkif';
// // import Ads from './Ads';

// const ShowAds = ( {search} ) => {
//   return (
//     <div className="center">{   
//       fetch('http://localhost:3000/', {
//           method: 'post',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             s:search
//         })
//       })
//         .then(response => response.json())
//         .then(count => {
//             count.map(user=>{
//               return(
//                 user.map(users=>{
//                   return(
//                     <Checkif key={users.imageUrl}
//                       url={user.imageUrl} 
//                     />
//                   )
//                 })
//               )  
//             })
//         })
//     }
//     </div>
//   )
// }

// export default ShowAds;
