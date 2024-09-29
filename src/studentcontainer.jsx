import React from 'react';
import StudList from './studentlist';

const StudentContainer = ({ users, favUsers, addToFav }) => {
  return (
    <div className="container">
      
      
      <StudList users={users} favUsers={favUsers} onAddToFav={addToFav} />
    </div>
  );
};

export default StudentContainer;
