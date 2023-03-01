import styled from 'styled-components';
import colors from '../../utils/color';

const ButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${colors.black};
  color: white;
  font-size: 30px;
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  margin: 20px auto;
  transition: all 0.3s linear;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default ButtonStyles;
