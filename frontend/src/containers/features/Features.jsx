import React from 'react'
import './features.css';
import { Feature } from '../../components';

const featureData = [
	{
		title: 'Improving end distrusts instantly',
		text: 'From they fine. They age draw me like. Improving end distrusts instantly',
	}, 
	{
		title: 'Become the tended active',
		text: 'Considered Sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active.',
	},
	{
		title:'Message or nothing',
		text: 'Led ask possible mistress relation elegance eat likewise debating. By messge or nothing amongst address',
	},
	{
		title: 'Really boy law county',
		text: 'Really boy law county she unable her sister. Feet you off its like six.'
	}
]

export default function Features() {
  return (
	<div className='gpt3__feature section__padding' id="feature">
		<div className='gpt3__feature-heading'>
			<h1 className='gradient__text'> 
			The Future Is Now And You Just Need To Realize It. Step Into Future Today & Make It Happen
			</h1>
			<p>Request Early Access To Get Started</p>
		</div>

		<div className='gpt3__feature-container'>
			{featureData.map((item, index)=> (
				<Feature title={item.title} text={item.text} key={item.title + index}/>

			))}

		</div>
		
	</div>
  )
}
