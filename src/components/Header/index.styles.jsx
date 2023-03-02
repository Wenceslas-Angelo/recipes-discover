import styled from 'styled-components';
import colors from '../../utils/color';

const HeaderStyles = styled.header`
  padding: 20px 0;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 50px;
    font-weight: bolder;
    color: ${colors.black};
    display: none;

    span {
      color: ${colors.green};
    }

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .home-link {
    color: black;
    border: 1px solid black;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s linear;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      padding-left: 5px;
    }

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export default HeaderStyles;
