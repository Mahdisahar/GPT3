import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/poosibility.png';

export default function Possibilty() {
  return (
	<div className='gpt3__possibility section__padding' id="possibility">
		<div className='gpt__possibility-image'>
			<img src={possibilityImage} alt="possibility" />
		</div>
		<div className='gpt3__possibility-content'>
			<h4>Request Early Access to Get Started</h4>
			<h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
            <p>Considered Sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active</p>
		    <h4>Request Early Access to Get Started</h4>
		</div>
	</div>
  )
}
