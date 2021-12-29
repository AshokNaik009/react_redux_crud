import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserList from './features/UserList';
import AddUsers from './features/AddUsers';
import EditUsers from './features/EditUsers';

function App() {
  return (
    <div className="App">

      <Router>
      <Routes>
          <Route path="/" element={<UserList/>} />

          <Route path="/add-user" element={<AddUsers/>} />

          <Route path="/edit-user/:id" element={<EditUsers/>} />
            {/* <UserList /> */}
          {/* </Route> */}
          {/* <Route path="/add-user">
            <h1>Add user</h1>
          </Route>
          <Route path="/edit-user">
            <h1>Edit user</h1>
          </Route> */}
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
