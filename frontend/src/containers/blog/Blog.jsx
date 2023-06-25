import React from 'react'
import './blog.css'
//import  Article  from '../../components/article/Article';
import { Article } from '../../components';
import { blog1, blog2, blog3, blog4, blog5 } from './import';

export default function Blog() {
  return (
	<div className='gpt3__blog section__padding' id="blog">
		<div className='gpt3__blog-heading'>
			<h1 className='gradient__text'>A lot is happining. We are blogging a bout it</h1>
		</div>

		<div className='gpt3__blog-container'>
			<div className='gpt3__blog-container-groupA'>
			<Article BlogImg={blog1} date="Jun 22, 2023" title='GPT-3 and Open AL is the future. Let us explore how it is?' />
		    </div>

			<div className='gpt3__blog-container-groupB'>
			<Article  BlogImg={blog2}  date="Jun 22, 2023" title='GPT-3 and Open AL is the future. Let us explore how it is?' />
			<Article BlogImg={blog3}  date="Jun 22, 2023" title='GPT-3 and Open AL is the future. Let us explore how it is?'/>
			<Article  BlogImg={blog4}  date="Jun 22, 2023" title='GPT-3 and Open AL is the future. Let us explore how it is?'/>
			<Article  BlogImg={blog5}  date="Jun 22, 2023" title='GPT-3 and Open AL is the future. Let us explore how it is?'/>
			</div>
		</div>
	</div>
  )
}
