import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import {FriendBox} from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendBox>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendBox>
  );
      }

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};