import firebase from "./firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default async function doLogin(ra, senha) {
  return logarUsuario(ra, senha);

  async function logarUsuario(ra, senha) {
    const auth = getAuth();
    let success = false;

    await signInWithEmailAndPassword(auth, ra, senha).then((value) => {
      alert("Olá " + value.user.uid);
      success = true;
    });

    return success;
  }
}
