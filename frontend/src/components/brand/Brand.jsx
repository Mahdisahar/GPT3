import React from 'react'
import './brand.css'
import {google, slack, atlessian, dropbox, shopify } from './import';

export default function Brand() {
  return (
	<div className='gpt3-brand section__padding'>
		<div>
			<img src={google} alt="google-logo" />
		</div>

		<div>
			<img src={slack} alt="slack-logo" />
		</div>

		<div>
			<img src={atlessian} alt="atlessian-logo" />
		</div>

		<div>
			<img src={dropbox} alt="dropbox-logo" />
		</div>

		<div>
			<img src={shopify} alt="shopify-logo" />
		</div>
	</div>
  )
}
