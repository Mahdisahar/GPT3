import React from 'react'
import './whatGPT3.css'
import Feature from '../../components/feature/Feature';

export default function WhatGPT3() {
  return (
	<div className='gpt3-whatgpt3 section__margin ' id='wgpt3'>
		<div className='gpt3-whatgpt3-feature' >
               <Feature title='What is GPT3' text='is a transformer-based pre-trained AI model for natural language processing, generation,and understanding'/>
			
			<div className='gpt3-whatgpt3-heading'>
				<h1 className='gradient__text'>
					The Possibilities are beyond your imagination
				</h1>
				<p>Explore The Library</p>
			</div>

			<div className='gpt3-whatgpt3-containers'>
				  <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heards.'/>
					<Feature title='knowledgebase' text='We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.'/>
					<Feature title='Asked GPT-3' text='An artificially intelligent first author presents many ethical questions—and could upend the publishing process' />	
			</div>
		</div>		
	</div> 
	)
}
