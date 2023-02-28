/* eslint-disable no-unused-vars */
import React from 'react';

import HeroBanner from '../components/HeroBanner';

import useHome from '../hooks/useHome';

function Home() {
  const { popular } = useHome();
  return (
    <>
      {popular[0] ? (
        <HeroBanner
          image={popular[0].image}
          title={popular[0].title}
          readyInMn={popular[0].readyInMinutes}
        />
      ) : null}
    </>
  );
}

export default Home;
