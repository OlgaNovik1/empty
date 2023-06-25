import React from 'react';
import UserLists from './components/UserLists';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <UserLists />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
