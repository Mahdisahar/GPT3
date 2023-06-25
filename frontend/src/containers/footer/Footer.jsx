import React from 'react'
import './footer.css'
import logo from '../../assets/gpt3-logo.png'

export default function Footer() {
  return (
	<div className='gpt3__footer section__padding'>
		<div className='gpt3__footer-heading'>
			<h1 className='gradient__text'>
				Do you want to step in to future before others
			</h1>
		</div>
		<div className='gpt3__footer-btn'>
			<p>Request Early Access</p>
		</div>

		<div className='gpt3__footer-links'>
			<div className='gpt3__footer-links-logo'>
				<img src={logo} alt="logo" />
				<p>Port Coquitlam, BC</p>
			</div>

			<div className='gpt3__footer-links-div'>
				<h4>Links</h4>
				<p>Overons</p>
				<p>Social Media</p>
				<p>Countries</p>
				<p>Contact</p>
			</div>

			<div className='gpt3__footer-links-div'>
				<h4>Company</h4>
				<p>Terms & Conditions</p>
				<p>Privacy Policy</p>
				<p>Contact</p>
			</div>

			<div className='gpt3__footer-links-div'>
				<h4>Get In Touch</h4>
				<p>Port Coquitlam</p>
				<p>111222</p>
				<p>Apartment</p>
				<p>info@info.com</p>
			</div>
		</div>
		<div className='gpt3__footer-copyright'>
				<p>@2023 All Right Reserved</p>
		</div>
	</div>
  )
}
