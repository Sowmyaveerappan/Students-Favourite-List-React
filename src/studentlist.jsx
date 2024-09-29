import React from 'react';

const StudList = ({ users, favUsers, onAddToFav }) => {
  console.log('StudList rendered with users:', users); // Log when StudList renders

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button
              onClick={() => {
                console.log(`Adding ${user} to favorites`); // Log when adding user to favorite
                onAddToFav(user);
              }}
              disabled={favUsers.includes(user)} // Disable the button if already in favUsers
              style={{
                backgroundColor: favUsers.includes(user) ? 'gray' : 'black', // Change button color
                color: 'white',
                cursor: favUsers.includes(user) ? 'not-allowed' : 'pointer',
              }}
            >
              {favUsers.includes(user) ? 'Added to Favourites' : 'Add to Favourites'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudList;
