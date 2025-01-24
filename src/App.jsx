import { useState } from "react";
import "./App.css";
import SearchUser from "./Components/SearchUser";
import User from "./Components/User";
import AlertComonent from "./Components/Alerts";

function App() {
  const [data, setData] = useState();
  const [username, setUsername] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSearch = () => {
    if (!username && username === "") {
      setShowAlert(true);
    } else {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`GitHub API error: ${res.statusText}`);
          }
          return res.json();
        })
        .then((data) => setData(data))
        .catch((error) => {
          setShowAlert(true);
          console.error(error);
        });
    }
  };

  const handleUSername = (e) => {
    setUsername(e.target.value);
  };

  const closeAlert = () => {
    if (showAlert === true) {
      setShowAlert(false);
    }
  };

  return (
    <>
      {showAlert && <AlertComonent onclose={closeAlert} />}
      <div className="topClass">
        <SearchUser
          user={username}
          onSetUsername={handleUSername}
          onHandleSearch={handleSearch}
        />
        <User data={data} username={username} />
      </div>
    </>
  );
}

export default App;
