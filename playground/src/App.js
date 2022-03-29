
import './App.css';
import { HashRouter, Router } from 'react-router-dom';
import { GalaxisCard } from 'galaxis-components';
import { useEffect, useState } from 'react';
import { getFilteredCards } from './ApiTester';

function App() {
  const [metadata,setMetadata] = useState();
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
    (async () => {
      getFilteredCards({})
        .then((response) => {
          if (response) {
            setMetadata(response[0]);
            setLoaded(true)
          }
        })
        .catch((e) => {
          console.log(e);
        });
    })();
  },[])
  return (
    <>
      <HashRouter>
          {loaded && <GalaxisCard name="Teszt" metadata={metadata} traitTypes={null} horizontalPadding={20}/>}
      </HashRouter>
    </>
  );
}

export default App;
