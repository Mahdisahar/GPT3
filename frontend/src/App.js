import React from 'react'
import { Brand, Cta, Navbar } from './components'
import {Features, Blog, Footer, Header, Possibilty, WhatGPT } from './containers'
import './App.css';

export default function App() {
  return (
	<div className='App'>
		<div className='gradiant__bg'>
			<Navbar />
			<Header />
		</div>
		<Brand />
		<WhatGPT />
		<Features/>
		<Possibilty />
		<Cta />
		< Blog />
		<Footer />
	</div>
  )
}
