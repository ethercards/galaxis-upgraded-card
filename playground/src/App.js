import './App.css';
import { HashRouter, Router } from 'react-router-dom';
import { GalaxisCard } from 'galaxis-components';
import { useEffect, useState } from 'react';
import { getFilteredCards } from './ApiTester';

const traitTypes = [
  {
    icon_black: '/storage/app/uploads/public/trait_type_icons/badge-black.svg',
    icon_orange:
      '/storage/app/uploads/public/trait_type_icons/badge-orange.svg',
    icon_white: '/storage/app/uploads/public/trait_type_icons/badge-white.svg',
    id: 7,
    name: 'Badges',
  },
];

function App() {
  const [metadata, setMetadata] = useState();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      getFilteredCards({})
        .then((response) => {
          if (response) {
            setMetadata(response[0]);
            setLoaded(true);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    })();
  }, []);
  return (
    <>
      <HashRouter>
        {loaded && (
          <GalaxisCard
            name="Teszt"
            metadata={metadata}
            traitTypes={traitTypes}
            horizontalPadding={20}
            imageContainerWidth={400}
          />
        )}
      </HashRouter>
    </>
  );
}

export default App;
