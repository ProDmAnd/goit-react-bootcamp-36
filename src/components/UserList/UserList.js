import User from 'components/User/User';
import PropTypes from 'prop-types';

const UserList = ({ users = [] }) => {
  return (
    <ul>
      {users.map(({ id, name, avatar, isOnline }) => (
        <User key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
