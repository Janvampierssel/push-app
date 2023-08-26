import Header from "./components/Header";
import AddPushUp from "./components/AddPushUp";
import Leaderboard from "./components/Leaderboard";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  // to understand this fucking mess, play with logging 'data'
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <Header />
      <AddPushUp />
      <Leaderboard users={users} />
    </div>
  );
}

export default App;
