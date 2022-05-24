import React, { useEffect, useRef, useState } from 'react';
import './TermsBox.css';
import terms from './tc.js';

const TermsBox = ({termsVisible,handleClose,handleAccept})=>{


	return (
	<>
		{termsVisible?
		<div className="terms-root black">
			
			<div className="terms-box">
				<div className="scrollable-content">
					<h2>Terms and Conditions</h2>
					<div style={{marginRight:'16px'}} dangerouslySetInnerHTML={{__html: terms}}/>

					<div className="tc-button-container">
						<button className="dust-pool-btn" onClick={handleClose}>Cancel</button>
						<button className="dust-pool-btn" onClick={handleAccept}>Accept</button>
					</div>

				</div>
			</div>
		</div>
		
		:
		<></>
		}
	</>
	);
}

export default TermsBox;