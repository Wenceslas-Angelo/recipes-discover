import React from 'react';
import PropTypes from 'prop-types';

import HeroBanner from '../components/HeroBanner';
import Grid from '../components/Grid';

import useHome from '../hooks/useHome';
import Thumbnail from '../components/Thumbnail';

function Home({ searchTerm }) {
  const { state } = useHome(searchTerm);
  return (
    <>
      {!searchTerm && state[0] ? (
        <HeroBanner
          image={state[0].image}
          title={state[0].title}
          readyInMn={state[0].readyInMinutes}
        />
      ) : null}

      <Grid
        header={
          searchTerm
            ? `Search result for "${searchTerm}"`
            : 'Suggested recipes for you'
        }
      >
        {state.map((recipe) => (
          <Thumbnail key={recipe.id} image={recipe.image} />
        ))}
      </Grid>
    </>
  );
}

Home.propTypes = {
  searchTerm: PropTypes.string,
};

export default Home;
