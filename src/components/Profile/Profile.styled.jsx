import styled from '@emotion/styled';

export const ProfileBox = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid var(--background-color-second);
    border-radius: 5px;
    background-color: var(--white-color);
    color: var(--main-color);
    box-shadow: 0px 5px 15px var(--box-shadow);
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;

    img {
        display: block;
    }
`;

export const UserName = styled.p`
    margin: 10px 0 5px;
    font-weight: bold;
    font-size: 35px;
    background-color: var(--background-color-second);
    border-radius: 5px;
    padding: 5px;
`;

export const UserTag = styled.p`
    margin: 5px 0 10px;
    font-size: 20px;
    font-weight: bold;
    color: var(--secondary-color);
`;

export const UserLocation = styled.p`
    margin: 5px 0 10px;
    font-size: 20px;
    font-weight: bold;
    color: var(--secondary-color);
`;

export const UserStats = styled.ul`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    padding: 0;
    background-color: var(--background-color-second);


    li {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    font-size: 20px;
    text-align: center;
    border: 1px solid var(--background-color);
}
`;
 
export const UserStatsLabel = styled.span`
    padding-bottom: 5px;
    color: var(--secondary-color);
`;

export const UserStatsQuantity = styled.span`
    font-weight: bold; 
`;
