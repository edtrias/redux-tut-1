import React from 'react';

import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

const App = () => {
  return (
    <div>
      <h2>Username List:</h2>
      <UserList />
      <hr />
      <h2>User details:</h2>
      <UserDetail />
    </div>
  )
}

export default App;
