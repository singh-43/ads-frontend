import React, { Component } from 'react';

const Checkif = ({name,s1,url}) => {
	return (
		name.includes(s1)?
		<div className='tc bg-light-green dib br1 pa1 ma2'>
			<img alt='ads' src={url} width="300" height="300" />
		</div>:
		<div></div>
	);
}

export default Checkif;