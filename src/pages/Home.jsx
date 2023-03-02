import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

import useHome from '../hooks/useHome';

import HeroBanner from '../components/HeroBanner';
import Grid from '../components/Grid';
import Thumbnail from '../components/Thumbnail';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import Error from '../components/Error';

function Home({ searchTerm }) {
  const { state, loading, setLoadMore, error } = useHome(searchTerm);

  if (error) return <Error />;

  return (
    <>
      {!searchTerm && state[0] ? (
        <HeroBanner
          image={state[0].image}
          title={state[0].title}
          readyInMn={state[0].readyInMinutes}
          isGradient={true}
        />
      ) : null}

      {state[0] && (
        <Grid
          header={
            searchTerm
              ? `Search result for "${searchTerm}"`
              : 'Suggested recipes for you'
          }
        >
          {state.map((recipe) => (
            <Thumbnail key={recipe.id} id={recipe.id} image={recipe.image} />
          ))}
        </Grid>
      )}

      {loading && <Spinner />}

      {!loading && (
        <Button
          text="Load More"
          icon={<FaArrowRight />}
          callback={() => setLoadMore(true)}
        />
      )}
    </>
  );
}

Home.propTypes = {
  searchTerm: PropTypes.string,
};

export default Home;
