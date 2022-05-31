import firebase from "./firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

export default async function doLogin(ra, senha) {
  const uid = await logarUsuario(ra, senha);

  let sucess = uid !== undefined;

  if (sucess) {
    buscarDadosUsuario(uid);
  }

  return sucess;

  async function logarUsuario(ra, senha) {
    const auth = getAuth();
    let uid = undefined;

    await signInWithEmailAndPassword(auth, ra, senha).then((value) => {
      uid = value.user.uid;
    });

    return uid;
  }

  function buscarDadosUsuario(uid) {
    const db = getDatabase();
    const userRef = ref(db, "users/" + uid);

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }
}
