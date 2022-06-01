import firebase from "./firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

import UserSingleton from "./user-singleton";

async function authUser(ra, senha) {
  const auth = getAuth();
  let uid = undefined;

  await signInWithEmailAndPassword(auth, ra, senha).then((value) => {
    uid = value.user.uid;
  });

  return uid;
}

async function findUserData(uid) {
  const db = getDatabase();
  const userRef = ref(db, "users/" + uid);

  let userType = 0;

  await get(userRef).then((snapshot) => {
    if (snapshot.exists()) {
      let userData = snapshot.val();
      userData.uid = uid;
      UserSingleton.setInstance(userData);

      userType = userData.type;
    } else {
      console.log("User data not found!");
    }
  });

  return userType;
}

export { authUser, findUserData };
