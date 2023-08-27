import Header from "./components/Header";
import AddPushUp from "./components/AddPushUp";
import Leaderboard from "./components/Leaderboard";
import SignInAndOut from "./components/SignInAndOut";

import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const usersCollectionRef = collection(db, "users");

  // Funtions
  const bankPushUp = async (name, pushUpsToAdd) => {
    const user = findUserByName(name);
    console.log(`${name} will get ${pushUpsToAdd} pushups banked!`);

    user === null
      ? newUser(name, pushUpsToAdd)
      : updateUser(user.id, pushUpsToAdd);
  };

  const findUserByName = (n) => {
    const user = usersList.find((user) => user.name === n);
    const output = user ? user : null;
    return output;
  };

  const findUserByID = (id) => {
    const user = usersList.find((user) => user.id === id);
    const output = user ? user : null;
    return output;
  };

  const newUser = async (name, pushUpsToAdd) => {
    // Update Server
    await addDoc(usersCollectionRef, {
      name: name,
      pushups: Number(pushUpsToAdd),
    })
      .then(() => {
        alert(`New user ${name} added with ${pushUpsToAdd} pushups!`);
      })
      .catch((error) => {
        alert("Whoopsiedoopsie, something went wrong!. Error: " + error);
      });

    // Update UI
    await updateUsersUI();
  };

  const updateUser = async (id, pushUpsToAdd) => {
    const userToUpdate = findUserByID(id);
    const specificUserDoc = doc(db, "users", id);
    await updateDoc(specificUserDoc, {
      pushups: userToUpdate.pushups + Number(pushUpsToAdd),
    });
    // Update from server
    await updateUsersUI();
  };

  const deleteUser = async (target) => {
    setUsersList(usersList.filter((user) => user.id !== target.id));
    const docToDelete = doc(db, "users", target.id);
    await deleteDoc(docToDelete);
  };

  const updateUsersUI = async () => {
    const q = query(usersCollectionRef, orderBy("pushups", "desc"));
    const data = await getDocs(q);

    setUsersList(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    const getUsers = async () => {
      await updateUsersUI();
    };

    getUsers();
  }, []);

  return (
    <div className="app">
      <Header />
      <SignInAndOut currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {currentUser && (
        <AddPushUp currentUser={currentUser} bankPushUp={bankPushUp} />
      )}
      <Leaderboard usersList={usersList} updateUsersUI={updateUsersUI} />
    </div>
  );
}

export default App;
