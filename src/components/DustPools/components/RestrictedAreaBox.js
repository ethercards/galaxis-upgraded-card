import React, { useEffect, useRef, useState } from 'react';
import './RestrictedAreaBox.css';
import blockedCountries from "./blockedCountries";

const RestrictedAreaBox = ({restrictedBoxVisible,handleClose})=>{


	return (
	<>
		{restrictedBoxVisible?
		<div className="terms-root">
			<div className="restricted-box">
				<div className="scrollable-content">
					<h2>Restricted region</h2>
					<div className="restricted-container">
						{Object.values(blockedCountries).map((country) => {
							return (
								<div className="country">
									{country}
								</div>
							);
						})}
					</div>
					<div className="restricted-button-container">
						<button className="dust-pool-btn" onClick={handleClose}>OK</button>
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

export default RestrictedAreaBox;