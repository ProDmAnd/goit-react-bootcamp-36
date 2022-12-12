import reactImage from 'assets/logo512.png';
import PropTypes from 'prop-types';
import { UserName } from 'components';

const User = ({ name, avatar = reactImage, isOnline }) => {
  const online = isOnline ? 'True' : 'False';
  return (
    <li>
      <UserName>{name}</UserName>
      <div>Is online: {online}</div>
      <img src={avatar} width={400} height={400} alt={avatar} />
    </li>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default User;
