import styled from 'styled-components';
import colors from '../../utils/color';

const SearchStyles = styled.form`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 45%;
  }

  position: relative;

  .search-icon {
    position: absolute;
    font-size: 20px;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: gray;
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  input {
    width: 100%;
    font-size: 20px;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #adb7d5;
    color: ${colors.black};
    @media screen and (min-width: 768px) {
      padding-left: 40px;
    }
  }
`;

export default SearchStyles;
