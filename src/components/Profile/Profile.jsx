import PropTypes from 'prop-types';
import {ProfileBox, ProfileInfo, UserName, UserTag, UserLocation, UserStats, UserStatsLabel, UserStatsQuantity} from './Profile.styled'

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileBox>
      <ProfileInfo>
        <img src={avatar} alt="User avatar" width="200px"/>
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </ProfileInfo>

      <UserStats>
        <li>
          <UserStatsLabel>Followers: </UserStatsLabel>
          <UserStatsQuantity>{followers}</UserStatsQuantity>
        </li>
        <li>
          <UserStatsLabel>Views: </UserStatsLabel>
          <UserStatsQuantity>{views}</UserStatsQuantity>
        </li>
        <li>
          <UserStatsLabel>Likes: </UserStatsLabel>
          <UserStatsQuantity>{likes}</UserStatsQuantity>
        </li>
      </UserStats>
    </ProfileBox>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};