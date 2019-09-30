import styled from 'styled-components';
import { color } from 'shared/global';

export const SearchBarWrapper = styled.div`
.am-search-start {
  .am-search-cancel,
  .am-search-synthetic-ph {
    z-index: 3;
  }
}

.am-search {
  padding: 0px;
  height: 50px;
  display: flex;
  justify-content: center;
  background: ${color.lightBlue};
  border-radius: 3px;
  .am-search-input {
    background: ${color.lightBlue};
  }

  .am-search-input,
  .am-search-value,
  .am-search-input,
  .am-search-synthetic-ph,
  input {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color.black}
  }

  .am-search-clear {
    background-color: ${color.primary};
    background-image: url("data:image/svg+xml,%3Csvg width='9' height='8' viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.67384 3.6005L7.28533 0.695511L6.56681 0L4.00196 2.85311L1.43711 0L0.718598 0.695511L3.33009 3.6005L0 7.30485L0.718516 8.00036L4.00196 4.34789L7.28541 8.00036L8.00393 7.30485L4.67384 3.6005Z' fill='%23E9F0FB'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    position: absolute;
    top: inherit;
    right: 16px;
    cursor: pointer;
  }

  .am-search-synthetic-ph {
    .am-search-synthetic-ph-placeholder {
      color: ${color.black}
    }

    i {
      background-image: none;
    }
  }

  .am-search-start .am-search-input  {
    z-index: 3;
  }


  .am-search-cancel {
    display: none;
  }
}
`;

export default SearchBarWrapper;
