import styled from '@emotion/styled';

export const TransactionTable = styled.table`
    box-shadow: 0px 5px 15px var(--box-shadow);
`;

export const HeadersRow = styled.thead`
     font-size: 20px;
     text-align: center;
`;

export const ValuesRow = styled.tr`
     width: 33%;
     color: var(--secondary-color);
     font-size: 20px;
     text-align: center;
     text-transform: capitalize;

     &:nth-child(even) {
     background-color: var(--background-color);
  }
`;

export const ColumnHeader = styled.th`
     width: 30%;
     padding: 20px 40px;
     background-color: var(--background-color-second);
     color: var(--main-color);
     text-transform: uppercase;
     text-align: center;
`;
 