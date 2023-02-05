import styled from '@emotion/styled';

export const StatBox = styled.section`
    width: 450px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 5px 15px var(--box-shadow);
    border-radius: 5px;
`;

export const Title = styled.h2`
    margin: 0;
    padding: 20px;
    text-transform: uppercase;
    text-align: center;
    color: var(--main-color);
    font-weight: bold;
    font-size: 40px;
`;

export const StatList = styled.ul`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    box-shadow: 0px 5px 15px var(--box-shadow);
    margin: 0;
    padding: 0;
    
    li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 5px;
    }
`;

export const ListLabel = styled.span`
    padding-top: 20px;
    font-size: 15px;
    color: var(--black-color);
    font-weight: bold;
`;

export const ListPercent = styled.span`
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    color: var(--color-white);
`;