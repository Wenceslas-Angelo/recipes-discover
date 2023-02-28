import styled from 'styled-components';
import colors from '../../utils/color';

const BannerStyles = styled.div`
  margin: 20px auto;
  height: 300px;
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  border-radius: 10px;

  .container {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 10px;

    h2 {
      color: ${colors.white};
      font-size: 30px;
    }

    .ready-mn {
      color: ${colors.white};
      font-size: 20px;
      padding: 10px 0;

      span {
        padding-left: 10px;
      }
    }
  }
`;

export default BannerStyles;
