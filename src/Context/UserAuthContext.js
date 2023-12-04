import { createContext, useContext, useEffect, useState } from "react";
import {
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth,  db } from "../FirebaseConfig";
import {  doc, setDoc } from "firebase/firestore";



const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");

  async function signUp(values) {
    const { name: displayName } = values;
  
    try {
      const userRes = await createUserWithEmailAndPassword(auth, values.email, values.password);
      await updateProfile(auth.currentUser, { displayName });
  
      // Now, you can proceed to store user info in the firebase database without the profile photo code.
  
      try {
        const userInfo = {
          name: values.name,
          email: values.email,
          password: values.password,
          gender: values.gender,
          dob: values.dob,
          country: values.country,
          // No imageURL in userInfo since we removed profile photo code
        };
  
        // Assuming `db` is your Firestore database reference
        await setDoc(doc(db, 'users', userRes.user.uid), userInfo);
        console.log("User Info ", userRes.user);
      } catch (err) {
        console.log("User not added", err);
      }
  
      return true;
    } catch (err) {
      console.error("Error setting name:", err);
      return false; // Update failed
    }
  }
  
  function logOut() {
    return signOut(auth);
  }
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logOut, signIn, signUp }}>
      {" "}
      {children}{" "}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
