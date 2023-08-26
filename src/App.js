import Header from "./components/Header";
import AddPushUp from "./components/AddPushUp";
import Leaderboard from "./components/Leaderboard";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const bankPushUp = async (name, pushUpsToAdd) => {
    const user = findUserByName(name);
    console.log(`${name} will get ${pushUpsToAdd} pushups banked!`);

    user === null
      ? newUser(name, pushUpsToAdd)
      : updateUser(user.id, pushUpsToAdd);
  };

  const findUserByName = (n) => {
    const user = users.find((user) => user.name === n);
    const output = user ? user : null;
    return output;
  };

  const findUserByID = (id) => {
    const user = users.find((user) => user.id === id);
    const output = user ? user : null;
    return output;
  };

  const newUser = async (name, pushups) => {
    // Server Update
    await addDoc(usersCollectionRef, {
      name: name,
      pushups: Number(pushups),
    }).then(
      () => {
        alert(`New user ${name} added with ${pushups} pushups!`);
      },
      (error) => {
        alert("Something went wrong. Error: " + error);
      }
    );

    // Update from server
    await updateUsers();
  };

  const updateUser = async (id, pushUpsToAdd) => {
    const userToUpdate = findUserByID(id);
    const specificUserDoc = doc(db, "users", id);
    await updateDoc(specificUserDoc, {
      pushups: userToUpdate.pushups + Number(pushUpsToAdd),
    });
    // Update from server
    await updateUsers();
  };

  const deleteUser = async (target) => {
    setUsers(users.filter((user) => user.id !== target.id));
    const docToDelete = doc(db, "users", target.id);
    await deleteDoc(docToDelete);
  };

  // to understand this fucking mess, play with logging 'data'
  useEffect(() => {
    const getUsers = async () => {
      await updateUsers();
    };

    getUsers();
  }, []);

  const updateUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  return (
    <div className="App">
      <Header />
      <AddPushUp newUser={newUser} bankPushUp={bankPushUp} />
      <Leaderboard users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
