import React from 'react'
import './article.css'

function Article({ BlogImg, date, title }) {
  return (
	<div className='gpt3__blog-container-article'>
		<div className='gpt3__blog-container-article-image'>
		  <img src={BlogImg} alt='blog'/>
		</div>

		<div className='gpt3__blog-container-article-content'>
			<p>{date}</p>
			<h3>{title}</h3>
			<p>Read Full Article</p>
		</div>
		
	</div>
  )
}

export default Article