import styled from 'styled-components';

const GridStyles = styled.div`
  padding: 20px 0;
  margin: 0 auto;

  h1 {
    padding: 20px 0;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
  }
`;

export default GridStyles;
