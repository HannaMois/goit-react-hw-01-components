import styled from '@emotion/styled';

export const FriendBox = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const FriendCard = styled.li`
    width: 300px;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    align-items: center; 
    border: 2px solid var(--main-color);
    border-radius: 5px;
    box-shadow: 0px 5px 15px var(--box-shadow);
    margin-bottom: 10px;
    padding: 5px 10px;
`;

export const Status = styled.span`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    background-color:${({ isOnline }) => {
    switch (isOnline) {
        case true:
            return "lightgreen";
        case false:
            return "tomato";
        default:
            return "black";
        }
    }}`;

export const FriendName = styled.p`
    margin: 0;
    font-weight: bold;
    color: var(--main-color);
`;

export const Avatar = styled.img`
 width: 48px;
`;
