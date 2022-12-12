import users from './db/users.json';
import { UserList } from 'components';

const App = () => {
  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;
