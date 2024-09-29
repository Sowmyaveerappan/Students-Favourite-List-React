import React from 'react';

const FavList = ({ favUsers, onRemoveFromFav }) => {
  console.log('FavList rendered with favUsers:', favUsers); // Log when FavList renders

  return (
    <div className="favorite-list">
      
      <h2>Favorite List</h2>
      <ul>
        {favUsers.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favUsers.map((user, index) => (
            <li key={index}>
              {user}
              
              <button
                onClick={() => {
                  console.log(`Removing ${user} from favorites`); // Log when removing user from favorites
                  onRemoveFromFav(user);
                }}
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    
    </div>
  );
};

export default FavList;
