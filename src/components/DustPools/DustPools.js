import React, { useEffect, useRef, useState } from 'react';
import DustPoolCard from './components/DustPoolCard';
import DragonImg from '../../assets/images/dustPools/dragon.jpg';
import './DustPools.css';

import leftTrick from '../../assets/images/dustPools/leftTrick.svg';
import rightTrick from '../../assets/images/dustPools/rightTrick.svg';

import UpcomingCard from './components/UpcomingCard';
import ProjectSubpage from './components/ProjectSubpage';
import { getContract, getDummy721 } from './Web3/GetContract';
import { Zoom } from "zoom-next";


let POOLS = [
{
  id: 0,
  name: 'Cryptopunk Pool',
  imgSrc: DragonImg,
  order: 0,
  poolUrl: 'https://larvalabs.com/cryptopunks/accountInfo?account=0x8fa20dcc712bd224b54bc1cdfd30a37349f8df2a#',
},
{
  id: 1,
  name: 'Meebit Pool',
  imgSrc: DragonImg,
  order: 1,
  poolUrl: 'https://meebits.larvalabs.com/meebits/account?address=0x1f3911F4F43671d187A882df129773A7261989e8',
  },
{
  id: 2,
  name: 'Mike Tyson Pool',
  imgSrc: DragonImg,
  order: 2,
  poolUrl: 'https://opensea.io/0xCdA66b3f393cEfc6E476E2183164bD2e9DA78f2e',
},
{
  id: 3,
  name: 'EC Alpha Pool',
  imgSrc: DragonImg,
  order: 3,
  poolUrl: 'https://opensea.io/0xA375A68CbFf5226E51eEBc2128493D1e30F171B1',
},
{
  id: 4,
  name: 'EC Founder Pool',
  imgSrc: DragonImg,
  order: 4,
  poolUrl: 'https://opensea.io/0xB27b95e6B138c968ec1BDC56D4a538Ed0F83b3C2',
},
{
  id: 5,
  name: 'MetaZoo Pool',
  imgSrc: DragonImg,
  order: 5,
  poolUrl: 'https://opensea.io/0xfa87ae4cf49806eEaEa2F7DF1B7411834Ab097d6',
},
{
  id: 6,
  imgSrc: DragonImg,
  name: 'Toddlerpillars Pool',
  order: 6,
  poolUrl: 'https://opensea.io/0x9dFF1113CF4186deC4feb774632356D22f07eB9e',
}
];

const UPCOMING_POOLS = [
  {
    imgSrc: DragonImg,
    name : "Paul Timbuktu",
    price : 10000
  },
  {
    imgSrc: DragonImg,
    name : "Paul Timbuktu two row",
    price : 10000
  },
  {
    imgSrc: DragonImg,
    name : "Paul Timbuktu",
    price : 10000
  },
  {
    imgSrc: DragonImg,
    name : "Paul Timbuktu",
    price : 10000
  },
]

const TopSectionDividers = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      margin: '25px 0',
    }}
  >
    <img src={leftTrick} style={{ maxHeight: '50px' }} />
    <img src={rightTrick} style={{ maxHeight: '50px' }} />
  </div>
);

const DustPools = ({address,ethersProvider,deployedChainId,handleConnect}) => {

  const [selectedPoolId, setSelectedPoolId] = useState(null);
  const [dustContract,setDustContract] = useState(null);
  const [dust4PunksContract,setDust4PunksContract] = useState(null);
  const [zoom2,setZoom2] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const [pools,setPools] = useState(POOLS);

  useEffect(()=>{
    if(address!==null){
      console.log('Wallet connected:',address);
      //TODO: get dust balance
    }

  },[address]);
  


  useEffect(()=>{

    const initContract = async ()=>{
        let c = await getContract('Dust',ethersProvider);
        if(c){
            setDustContract(c);
            console.log('DUST:',c);
        }else{
            console.log('contract not found');
        }

        let Zoom2Contract = await getContract('Zoom2', ethersProvider);
        if (Zoom2Contract) {
            setZoom2(Zoom2Contract);
            console.log('ZOOM:',Zoom2Contract);

        } else {
            console.log('Could not initialise Zoom2 Contract');
        }

        let D4P = await getContract('Dust4Punks', ethersProvider);
        if (D4P) {
            setDust4PunksContract(D4P);
            console.log('D4P:',D4P);
        } else {
            console.log('Could not initialise D4P Contract');
        }
    }

    if(ethersProvider){
        initContract();
    }
},[ethersProvider]);


  useEffect(()=>{


    if(dust4PunksContract && dustContract && zoom2){
      getPools();
    }

  },[dust4PunksContract,dustContract,zoom2])

  const getPools = async()=>{
    console.log('GETTING POOL DATA....');

           // if(address){
            const ZoomLibraryInstance = new Zoom({ use_reference_calls: true });
            let calls = [];


            for(let i = 0; i<POOLS.length;i++){

                //Punk vault address
                const vaultAddress = ZoomLibraryInstance.addCall(
                    dust4PunksContract,
                    ["vaultAddress", [i]],
                    "vaultAddress(uint256) returns (address)"
                );
                calls.push(vaultAddress);

                //Pool Name
                const vaultName = ZoomLibraryInstance.addCall(
                    dust4PunksContract,
                    ["vaultName", [i]],
                    "vaultName(uint256) returns (string)"
                );
                calls.push(vaultName);

                //Vault price
                const vaultPrice = ZoomLibraryInstance.addCall(
                    dust4PunksContract,
                    ["vaultPrice", [i]],
                    "vaultPrice(uint256) returns (uint256)"
                );
                calls.push(vaultPrice);

                //Vault token addredd
                const vaultToken = ZoomLibraryInstance.addCall(
                    dust4PunksContract,
                    ["vaultToken", [i]],
                    "vaultToken(uint256) returns (address)"
                );
                calls.push(vaultToken);
            }

            const ZoomQueryBinary = ZoomLibraryInstance.getZoomCall();

            //console.log("======== ZOOM CALL START ============" );
            //console.time('zoomCall');
            const combinedResult = await zoom2.combine( ZoomQueryBinary );
            //console.timeEnd('zoomCall');
            //console.log("======== ZOOM CALL END ==============" );

            ZoomLibraryInstance.resultsToCache( combinedResult, ZoomQueryBinary);

            //4 calls per vault

            let ap = POOLS;
            let poolIdx=0;
            for(let i=0;i<POOLS.length*4; i+=4){
                let va = ZoomLibraryInstance.decodeCall(calls[i+0]).toString();
                let vn = ZoomLibraryInstance.decodeCall(calls[i+1]).toString();
                let vp = ZoomLibraryInstance.decodeCall(calls[i+2]).toString();
                let vt = ZoomLibraryInstance.decodeCall(calls[i+3]).toString();

                
                const vd = {
                    vaultAddress: va,
                    vaultName: vn,
                    vaultPrice: vp,
                    vaultToken: vt,
                    available: null,
                    totalSupply: null
                };

                let vToken = await getDummy721(vt,ethersProvider);
                
                if(vToken){
                    vd.tokenContract = vToken;
                }

                ap[poolIdx].vaultData = vd;
                poolIdx++;
            }

            console.log("AP",ap);
    
  }

  useEffect(()=>{
    if(selectedFilter === 'SOLD_OUT'){
      setPools([])
    }else if(selectedFilter === 'ACTIVE'){
      setPools([])
    }else{
      setPools(POOLS);
    }
  },[selectedFilter]);
  


  const connectOrExchange = (poolId) =>{
    if(poolId!==null){
      setSelectedPoolId(poolId);
    }else{
      handleConnect();
    }
  }
  
  return (
    <>
    {selectedPoolId === null ?
    <div className="dust-pool-root">
      <div className="dust-pool-textbox">
        <p className="pool-subtitle" style={{marginBlockEnd: "1em"}}>Dust pools</p>
        <div className="tab-choose">
          <div className={`${selectedFilter === 'ALL' ? "active-tab" : ''}`} onClick={()=> setSelectedFilter('ALL')}>All</div>
          <div className={`${selectedFilter === 'ACTIVE' ? "active-tab" : ''}`} onClick={()=> setSelectedFilter('ACTIVE')}>Active</div>
          <div className={`${selectedFilter === 'SOLD_OUT' ? "active-tab" : ''}`} onClick={()=> setSelectedFilter('SOLD_OUT')}>Sold out</div>
        </div>
        <p>
          You can exchange your Dust for some awesome items including
          Cryptopunks and other valuable NFTs.
        </p>
        
      </div>
      <div className="container  mt-5">
        <div className="row" style={{ rowGap: '25px' }}>
          {pools.map((card,idx) => {
            return (
              <div key={idx} className="col-12 col-lg-6">
                <DustPoolCard card={card} address={address} handleClick={connectOrExchange}/>
              </div>
            );
          })}
        </div>
        <TopSectionDividers />
        <div className="dust-pool-textbox">
          <p className="pool-subtitle">Dust utility token</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="dust-pool-btn" style={{marginTop:"20px"}}>Go to blog</button>
        </div>
        <TopSectionDividers />
        <div className="dust-pool-textbox pb-4">
          <p className="pool-subtitle">Upcoming Dust Pools</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className='row'>
            {
              UPCOMING_POOLS.map((card,idx)=>{
                return <div key={idx} className="col-12 col-lg-3">
                  <UpcomingCard imgSrc={card.imgSrc} name={card.name} price={card.price}/>
                </div>

              })
            }
          </div>
      </div>
    </div>

    :

    <div className="dust-pool-root">
      <ProjectSubpage handleBack = {()=>setSelectedPoolId(null)}/>
    </div>
    }
    </>
  );
};

export default DustPools;
