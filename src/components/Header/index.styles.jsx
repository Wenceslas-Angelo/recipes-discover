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
`;

export default HeaderStyles;
