import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import StudentContainer from './studentcontainer';
import FavList from './studentfav';

function App() {
  // Manage the state for users and favUsers at the top-level (App.js)
  const [users, setUsers] = useState(["Kavin", "Mike", "Navin", "Praveen", "Akash", "Suresh", "Hari"]);
  const [favUsers, setFavUsers] = useState([]);

  // Function to add user to favorite list
  const addToFav = (user) => {
    setUsers(users.filter((u) => u !== user)); // Remove user from main list
    setFavUsers([...favUsers, user]); // Add user to favorite list
  };

  // Function to remove user from favorite list and add back to main list
  const removeFromFav = (user) => {
    setFavUsers(favUsers.filter((u) => u !== user)); // Remove user from favorite list
    setUsers([...users, user]); // Add user back to main list
  };

  return (
    <div>
      <BrowserRouter>
      <div id="link">
      <nav>
      
      <Link to="/"> Students List</Link>
    </nav>
        <nav>
      
          <Link to="/studentfav">Favourite Students</Link>
        </nav>
        
        </div>
        <Routes>
          {/* Pass users, favUsers, and functions as props */}
          <Route
            path="/"
            element={<StudentContainer users={users} favUsers={favUsers} addToFav={addToFav} />}
          />
          <Route
            path="/studentfav"
            element={<FavList favUsers={favUsers} onRemoveFromFav={removeFromFav} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
