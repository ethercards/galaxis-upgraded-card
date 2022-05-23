import React, { useEffect, useRef, useState } from 'react';
import {Contract, ethers} from 'ethers';
import './VaultInterface.css';



const VaultInterface = ({address,hc,d4p,ethersProvider}) => {


	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [remaining, setRemaining] = useState('');
	const [vaultAddress, setVaultAddress] = useState('');
	const [tokenAddress, setTokenAddress] = useState('');
	const [destinasi, setDestinasi] = useState('0x0000000000000000000000000000000000000000');


	useEffect(()=>{
		if(address===null){
			hc();
		}
	},[address]);


	const addVault = async () =>{
		if(name && price && remaining && vaultAddress && tokenAddress && destinasi) {
			console.log('address',address);

			let priceInWei = ethers.utils.parseEther(price);
			let remainingInWei = ethers.utils.parseEther(price);


			let contract = d4p.connect(ethersProvider.getSigner());

			console.log(contract);

			let res = await contract.add_721_vault(name,priceInWei,remainingInWei,vaultAddress,tokenAddress,destinasi).catch(e=>console.log);

			console.log ('res',res);

			
		}

	}


	return (
	<div className='container mt-4'>
		<div className="form-group">
			<input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Vault name (string)"/>
		</div>
		<div className="form-group">
			<input type="text" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price in dust (uint256)"/>
		</div>
		<div className="form-group">
			<input type="text" className="form-control" value={remaining} onChange={(e)=>setRemaining(e.target.value)} placeholder="Remaining (int)"/>
		</div>
		<div className="form-group">
			<input type="text" className="form-control" value={vaultAddress} onChange={(e)=>setVaultAddress(e.target.value)} placeholder="Vault (address)"/>
		</div>
		<div className="form-group">
			<input type="text" className="form-control" value={tokenAddress} onChange={(e)=>setTokenAddress(e.target.value)} placeholder="Token (address)"/>
		</div>
		<div className="form-group">
			<input type="text" className="form-control" value={destinasi} onChange={(e)=>setDestinasi(e.target.value)} placeholder="Destinasi (address)"/>
		</div>
		<button type="submit" className="dust-pool-btn" style={{ marginTop: '20px' }} onClick={addVault}>Add vault</button>
	</div>
	);
}

export default VaultInterface;