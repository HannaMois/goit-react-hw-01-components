import PropTypes from 'prop-types';
import {FriendCard, Status, Avatar, FriendName } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline,id }) {
    return (
      <FriendCard key={id}>
        <Status  isOnline={isOnline} >{ isOnline }</Status>
        <Avatar src={avatar} alt="User avatar"/>
        <FriendName>{name}</FriendName>
      </FriendCard>
    );
  };  

  FriendListItem.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };