import React from 'react'
import './header.css'
//import people from '../../assets/people.jpg';
import AI from '../../assets/ai.png';

export default function Header() {
  return (
	<div className="gpt3-header">
		<div className='gpt3-header-content'>
			<h2 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h2>
			<p>Over 300 applications are delivering GPT-3–powered search, conversation, text completion, and other advanced AI features through our API.</p>
		
		<div className='gpt3-header-form'>
			<input type="email" placeholder='Your Email Address' />
			<button type='button'>Get Started</button>
		</div>
		{/* <div className='gpt3-header-reviews'>
		<img src={people} alt="people" />	
		<p>160K People reviews in last 24 hours</p>
		</div> */}	
		</div>	

		<div className='gpt3-header-image'>
		<img src={AI} alt="ai" />
		</div>
	</div>
  )
}
