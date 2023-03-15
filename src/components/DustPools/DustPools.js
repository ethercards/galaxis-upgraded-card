import React, { useEffect, useRef, useState } from 'react';
import DustPoolCard from './components/DustPoolCard';
import DragonImg from '../../assets/images/dustPools/dragon.jpg';
import './DustPools.css';

import leftTrick from '../../assets/images/dustPools/leftTrick.svg';
import rightTrick from '../../assets/images/dustPools/rightTrick.svg';

import UpcomingCard from './components/UpcomingCard';
import ProjectSubpage from './components/ProjectSubpage';
import { getContract, getDummy721 } from './Web3/GetContract';
import { Zoom } from 'zoom-next';
import useInterval from '../../common/useInterval';
import UpcomingPoolsCarousel from './components/UpcomingPoolsCarousel.jsx';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import UpcomingProjectSubpage from './components/UpcomingProjectSubpage';
import VaultInterface from './components/VaultInterface';



/* 
const POOLSS = [
  {
  image_src: "/banners/small_banners/dragon.png",
  title: "Test4",
  url: "",
  },
  {
    image_src: "/banners/small_banners/dragon.png",
    title: "Test4",
    url: "",
    },
    {
      image_src: "/banners/small_banners/dragon.png",
      title: "Test4",
      url: "",
      },
      {
        image_src: "/banners/small_banners/dragon.png",
        title: "Test4",
        url: "",
        },
        {
          image_src: "/banners/small_banners/dragon.png",
          title: "Test4",
          url: "",
          },{
            image_src: "/banners/small_banners/dragon.png",
            title: "Test4",
            url: "",
            },
]
 */

const UPDATE_INTERVAL = 60000;
/* let POOLS = [
  {
    id: 0,
    name: 'Cryptopunk Pool',
    imgSrc: DragonImg,
    order: 0,
    totalSupply: 27,
    poolUrl:
      'https://larvalabs.com/cryptopunks/accountInfo?account=0x8fa20dcc712bd224b54bc1cdfd30a37349f8df2a#',
  },
  {
    id: 1,
    name: 'Meebit Pool',
    imgSrc: DragonImg,
    order: 1,
    totalSupply: 30,
    poolUrl:
      'https://meebits.larvalabs.com/meebits/account?address=0x1f3911F4F43671d187A882df129773A7261989e8',
  },
  {
    id: 2,
    name: 'Mike Tyson Pool',
    imgSrc: DragonImg,
    order: 2,
    totalSupply: 25,
    poolUrl: 'https://opensea.io/0xCdA66b3f393cEfc6E476E2183164bD2e9DA78f2e',
  },
  {
    id: 3,
    name: 'EC Alpha Pool',
    imgSrc: DragonImg,
    order: 3,
    totalSupply: 50,
    poolUrl: 'https://opensea.io/0xA375A68CbFf5226E51eEBc2128493D1e30F171B1',
  },
  {
    id: 4,
    name: 'EC Founder Pool',
    imgSrc: DragonImg,
    order: 4,
    totalSupply: 200,
    poolUrl: 'https://opensea.io/0xB27b95e6B138c968ec1BDC56D4a538Ed0F83b3C2',
  },
  {
    id: 5,
    name: 'MetaZoo Pool',
    imgSrc: DragonImg,
    order: 5,
    totalSupply: 50,
    poolUrl: 'https://opensea.io/0xfa87ae4cf49806eEaEa2F7DF1B7411834Ab097d6',
  },
  {
    id: 6,
    imgSrc: DragonImg,
    name: 'Toddlerpillars Pool',
    order: 6,
    totalSupply: 100,
    poolUrl: 'https://opensea.io/0x9dFF1113CF4186deC4feb774632356D22f07eB9e',
  },
]; */

const TopSectionDividers = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      margin: '25px 0',
    }}
  >
    <img src={leftTrick} className='section-divider-img' />
    <img src={rightTrick} className='section-divider-img' />
  </div>
);

const DustPools = ({ address, ethersProvider, chainId, handleConnect, config }) => {
  const [selectedPoolIdx, setSelectedPoolIdx] = useState(null);
  const [selectedUpcomingPoolIdx, setselectedUpcomingPoolIdx] = useState(null)
  const [dustContract, setDustContract] = useState(null);
  const [dust4PunksContract, setDust4PunksContract] = useState(null);
  const [zoom2, setZoom2] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const [initDone, setInitDone] = useState(false);

  const [poolsFromBackend, setPoolsFromBackend] = useState([]);
  const [allPools, setAllPools] = useState([]);
  const [pools, setPools] = useState([]);
  const [upcomingPools, setUpcomingPools] = useState([]);
  const [upcomingPool, setUpcomingPool] = useState(null);

  const loc = useLocation();


  //console.log('congig',config);

  const url = config.API_URL;
  const upcomingImgUrl = config.AWS_URL;

  useEffect(()=>{
    const getPoolData = async ()=>{

      //console.log('00000000000000000', url)
      const res = await axios.get(url+'/vaults').catch(e=>console.log);
      //console.log('vaults',res);
      if(res.status === 200){
        setPoolsFromBackend(res.data);
      }

      const upcoming = await axios.get(url+'/upcoming-vaults').catch(e=>console.log);
     
      if(upcoming.status === 200){
        setUpcomingPools(upcoming.data);

        //console.log('UPCOM',upcoming.data)
        

        if(loc.search && loc.search.indexOf('upcoming=')>0){
          let params=loc.search.slice(1).split('&');
          //console.log(params);
          if(params.length>0){
            let parsedParams = {};
            for(let i=0;i<params.length;i++){
              let item = params[i].split('=');
              parsedParams[item[0]]=item[1];
            }
            if(parsedParams.upcoming){
             // console.log('UPCOMING POOL',upcoming.data[Number(parsedParams.upcoming)]);
              setUpcomingPool(upcoming.data[Number(parsedParams.upcoming)]);
              
            }

          }
        }


      }
    }




    if(chainId!==null){
      getPoolData();
    }
  },[chainId]);




  useEffect(() => {
    const initContract = async () => {
      let c = await getContract('Dust', ethersProvider);
      if (c) {
        setDustContract(c);
        console.log('DUST:', c);
      } else {
        console.log('contract not found');
      }

      let Zoom2Contract = await getContract('Zoom2', ethersProvider);
      if (Zoom2Contract) {
        setZoom2(Zoom2Contract);
        //console.log('ZOOM:', Zoom2Contract);
      } else {
        console.log('Could not initialise Zoom2 Contract');
      }

      let D4P = await getContract('Dust4Punks', ethersProvider);
      if (D4P) {
        setDust4PunksContract(D4P);
        //console.log('D4P:', D4P);
      } else {
        console.log('Could not initialise D4P Contract');
      }
    };

    if (ethersProvider) {
      initContract();
    }
  }, [ethersProvider]);

  useEffect(() => {
    if (dust4PunksContract && dustContract && poolsFromBackend.length>0 && zoom2 /*  && !initDone */) {
      getPools();
    }
  }, [dust4PunksContract,poolsFromBackend]); //,dustContract,zoom2

  const getPools = async () => {
   // console.log('GETTING POOL DATA....');

    let res = await dust4PunksContract
      .next_redeemable()
      .catch((e) => console.log);

    let numberOfPools = 0;

    if (res) {
      numberOfPools = Number(res);
    }

    //console.log('#OF POOLS', numberOfPools);

    // if(address){
    const ZoomLibraryInstance = new Zoom({ use_reference_calls: true });
    let calls = [];

    for (let i = 0; i < numberOfPools; i++) {
      // vault address
      const vaultAddress = ZoomLibraryInstance.addCall(
        dust4PunksContract,
        ['vaultAddress', [i]],
        'vaultAddress(uint256) returns (address)'
      );
      calls.push(vaultAddress);

      //Pool Name
      const vaultName = ZoomLibraryInstance.addCall(
        dust4PunksContract,
        ['vaultName', [i]],
        'vaultName(uint256) returns (string)'
      );
      calls.push(vaultName);

      //Vault price
      const vaultPrice = ZoomLibraryInstance.addCall(
        dust4PunksContract,
        ['vaultPrice', [i]],
        'vaultPrice(uint256) returns (uint256)'
      );
      calls.push(vaultPrice);

      //Vault token addredd
      const vaultToken = ZoomLibraryInstance.addCall(
        dust4PunksContract,
        ['vaultToken', [i]],
        'vaultToken(uint256) returns (address)'
      );
      calls.push(vaultToken);
    }

    const ZoomQueryBinary = ZoomLibraryInstance.getZoomCall();

    //console.log("======== ZOOM CALL START ============" );
    //console.time('zoomCall');
    const combinedResult = await zoom2.combine(ZoomQueryBinary);
    //console.timeEnd('zoomCall');
    //console.log("======== ZOOM CALL END ==============" );

    ZoomLibraryInstance.resultsToCache(combinedResult, ZoomQueryBinary);

    //4 calls per vault
    let tempPool = [];
    let poolIdx = 0;
    for (let i = 0; i < numberOfPools * 4; i += 4) {
      let va = ZoomLibraryInstance.decodeCall(calls[i + 0]).toString();
      let vn = ZoomLibraryInstance.decodeCall(calls[i + 1]).toString();
      let vp = ZoomLibraryInstance.decodeCall(calls[i + 2]).toString();
      let vt = ZoomLibraryInstance.decodeCall(calls[i + 3]).toString();

     // console.log('va,vn,vp,vt',va,vn,vp,vt);


      const vd = {
        vaultAddress: va,
        vaultName: vn,
        vaultPrice: vp,
        vaultToken: vt,
        available: null,
      };

      let vToken = await getDummy721(vt, ethersProvider);

      if (vToken) {
        vd.tokenContract = vToken;
      }

      if(poolIdx<poolsFromBackend.length){
      
        let poolByVaultId = poolsFromBackend.find((i)=>{return i.vault_id===poolIdx});

       // tempPool.push({ ...poolsFromBackend[poolIdx], vaultData: vd });
        tempPool.push({ ...poolByVaultId, vaultData: vd });
        poolIdx++;
      }else{
        console.log('overflow :/', poolIdx,poolsFromBackend.length);
      }
    }

    //console.log('AP', tempPool);
    setAllPools(tempPool);
    setPools(tempPool);
    setSelectedFilter('ALL');
  };

  useEffect(() => {
   // console.log('allPools changed...', allPools.length);
    if (allPools.length > 0) {
      updateVaultBalances();
    }
  }, [allPools]);

  useInterval(() => {
    updateVaultBalances();
  }, UPDATE_INTERVAL);

  const updateVaultBalances = async () => {
    if (allPools[0].vaultData && allPools[0].vaultData.tokenContract) {
      //console.log('vaultdata',vaultData);

      const ZoomLibraryInstance = new Zoom();
      let calls = [];

      let hasContract = [];

       //console.log('UPD',pools,allPools);

      for (let i = 0; i < allPools.length; i++) {
        if (
          allPools[i].vaultData.tokenContract.address !==
          '0x0000000000000000000000000000000000000000'
        ) {
          /*     console.log(allPools[i].vaultData.tokenContract,i)

                const totalSupply = ZoomLibraryInstance.addCall(
                    allPools[i].vaultData.tokenContract,
                    ["totalSupply",[]],
                    "totalSupply() returns (uint256)"
                );
                calls.push(totalSupply); */

          const vaultBalance = ZoomLibraryInstance.addCall(
            allPools[i].vaultData.tokenContract,
            ['balanceOf', [allPools[i].vaultData.vaultAddress]],
            'balanceOf(address) returns (uint256)'
          );
          calls.push(vaultBalance);
          hasContract.push(allPools[i].vault_id);
        }
      }

     // console.log('STUFF', calls, hasContract);

      if (calls.length > 0) {
        const ZoomQueryBinary = ZoomLibraryInstance.getZoomCall();

        // console.log('zqb',ZoomQueryBinary);

        //console.log("======== ZOOM CALL START ============" );
        //console.time('zoomCall');
        const combinedResult = await zoom2.combine(ZoomQueryBinary);
        //console.timeEnd('zoomCall');
        //console.log("======== ZOOM CALL END ==============" );

        ZoomLibraryInstance.resultsToCache(combinedResult, ZoomQueryBinary);

        let ap = allPools;
        let hasContractIdx = 0;
        for (let i = 0; i < calls.length; i++) {
          //  let ts = ZoomLibraryInstance.decodeCall(calls[i]).toString();
          let ab = ZoomLibraryInstance.decodeCall(calls[i]).toString();
         // console.log('idx, balance', i, ab);
          let poolIdx = hasContract[hasContractIdx];
          //console.log('pool index, allpools', poolIdx,ap);
          ap[poolIdx].vaultData = {
            ...ap[poolIdx].vaultData,
            /* totalSupply:ts, */ available: Number(ab),
          };
          if (Number.parseInt(ab) === 0) {
            ap[poolIdx].order += 100;
          }
          hasContractIdx++;
        }
        /* 
            let op = [...ap];

            op.sort((a,b)=>{
                if(a.order>b.order){
                    return 1
                }else{
                    return -1;
                }
            });
 */
        setPools(getFiltered());
        setInitDone(true);
        //console.log('AP upd', ap);
      }
    }
  };

  const getFiltered = () => {
    let result = [];

    if (selectedFilter === 'SOLD_OUT') {
      result = allPools.filter((pool) => pool.vaultData.available === 0);
    } else if (selectedFilter === 'ACTIVE') {
      result = allPools.filter((pool) => pool.vaultData.available > 0);
    } else {
      result = [...allPools];
    }
    return result;
  };

  useEffect(() => {
    setPools(getFiltered());
  }, [selectedFilter]);

  const showDetails = (idx) => {
    //console.log('poolId,idx',idx);
    if (idx !== null) {
      setSelectedPoolIdx(idx);
    }
  };

  const showUpcomingDetails = (idx) => {
    if (idx !== null) {
      setselectedUpcomingPoolIdx(idx);
    }
  }



  return (
    <>
      {(selectedPoolIdx === null && upcomingPool === null) ? (
        <div className="dust-pool-root">
          <div className="dust-pool-textbox">
            <p className="pool-subtitle" style={{ marginBlockEnd: '1em' }}>
              Digital Collectible Vaults
            </p>
            <div className="tab-choose">
              <div
                className={`${selectedFilter === 'ALL' ? 'active-tab' : ''}`}
                onClick={() => setSelectedFilter('ALL')}
              >
                All
              </div>
              <div
                className={`${selectedFilter === 'ACTIVE' ? 'active-tab' : ''}`}
                onClick={() => setSelectedFilter('ACTIVE')}
              >
                Active
              </div>
              <div
                className={`${
                  selectedFilter === 'SOLD_OUT' ? 'active-tab' : ''
                }`}
                onClick={() => setSelectedFilter('SOLD_OUT')}
              >
                Sold out
              </div>
            </div>
            <p>
              You can exchange your Dust for some awesome items including
              Cryptopunks and other valuable Digital Collectibles.
            </p>
          </div>
          <div className="container  mt-5">
            <div className="row" style={{ rowGap: '25px' }}>
              {pools.map((card, idx) => {
                return (
                  <div key={idx} className="col-12 col-lg-6">
                    <DustPoolCard card={card} idx={idx} chainId={chainId} handleClick={showDetails} imageBaseUrl={config.AWS_URL} />
                  </div>
                );
              })}
            </div>
            <TopSectionDividers />
            <div className="dust-pool-textbox">
              <p className="pool-subtitle">Dust utility token</p>
              <p>
                $DUST tokens are used throughout the Galaxis ecosystem to
                reserve and pay for upcoming mints, return value to Ether Card holders,
                and exchange for Digital Collectibles via the Galaxis Vaults.{' '}
              </p>
              <button
                className="dust-pool-btn"
                style={{ marginTop: '20px' }}
                onClick={() =>
                  window.open(
                    'https://blog.ether.cards/dust-utility-token-model-distribution/'
                  )
                }
              >
                More
              </button>
            </div>

         {/*    <VaultInterface address={address} hc={handleConnect} d4p={dust4PunksContract} ethersProvider={ethersProvider} />
 */}

            <TopSectionDividers />
            <div className="dust-pool-textbox pb-4">
              <p className="pool-subtitle">Upcoming Digital Collectible Vaults</p>
              <p>Checkout all the upcoming Galaxis Vaults - where $DUST Utility Tokens may be exchanged for high quality Digital Collectibles!</p>
            </div>
                
            {upcomingPools.length>0 && 
              <UpcomingPoolsCarousel imgUrl={upcomingImgUrl} poolsData={upcomingPools} handleSelect={setUpcomingPool} handleSelectedIndex={showUpcomingDetails}/>
            }
            
            {/* <div className="row">
              {UPCOMING_POOLS.map((card, idx) => {
                return (
                  <div key={idx} className="col-12 col-lg-3">
                    <UpcomingCard
                      imgSrc={card.imgSrc}
                      name={card.name}
                      price={card.price}
                    />
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      ) : (
        <>
          {selectedPoolIdx!== null? 
            <>
              <div className="dust-pool-root">
                <ProjectSubpage
                  pools = {pools}
                  currentIndex = {selectedPoolIdx}
                  address={address}
                  dust={dustContract}
                  d4p={dust4PunksContract}
                  ethersProvider={ethersProvider}
                  chainId={chainId}
                  handleConnect={handleConnect}
                  handleBack={() => setSelectedPoolIdx(null)}
                  handleChangePool={showDetails}
                  mediaBaseUrl={config.AWS_URL}
                />
              </div>
            </>
            :
            <>
              <div className="dust-pool-root">
                <UpcomingProjectSubpage
                  pools = {upcomingPools}
                  currentIndex = {selectedUpcomingPoolIdx}
                  chainId={chainId}
                  handleBack={() => setUpcomingPool(null)}
                  handleChangePool={showUpcomingDetails}
                />
              </div>
            </>}
        </>

      )}



      

    </>
  );
};

export default DustPools;
