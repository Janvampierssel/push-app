import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase-config';
import { useState, useEffect } from 'react';

const SignInAndOut = ({ currentUser, setCurrentUser }) => {
  const [signInHidden, setSignInHidden] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setSignInHidden(!!currentUser);
    });
    return () => unsubscribe();
  }, []);

  const doSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // You can get credential and token as well for accessing Google API if needed
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        console.error(errorCode, errorMessage, email);
      });
  };

  const doSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert('sign out error: ' + error);
      });
  };

  return (
    <div className="sign-in-out">
      {!signInHidden && <section id="section-signed-out">
        <p>Sign in to bank your pushups</p>
        <button className="button-sign-in" onClick={doSignIn}>
          Sign in with Google
        </button>
      </section>}
      {signInHidden && <section id="section-signed-in">
        {currentUser && <div>
            <small className="user-details">Your name:</small>
            <p>{currentUser.displayName}</p>
        </div>}
        <button className="button-sign-out" onClick={doSignOut}>
          Sign Out
        </button>
      </section>}
    </div>
  );
};

export default SignInAndOut;

