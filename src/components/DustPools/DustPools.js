import React, { useEffect, useRef, useState } from 'react';
import DustPoolCard from './components/DustPoolCard';
import DragonImg from '../../assets/images/dustPools/dragon.jpg'
import './DustPools.css'

const DustPools = (props)=>{
	return (
		<div className='dust-pool-root'>
	<div class="container">
  <div class="row">
    <div class="col-6">
     <DustPoolCard imgSrc={DragonImg}/>
    </div>
    <div class="col-6">
	<DustPoolCard imgSrc={DragonImg}/>
    </div>
  </div>
</div>
			
		</div>
	);
}

export default DustPools;