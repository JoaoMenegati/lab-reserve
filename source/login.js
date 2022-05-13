import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native";

import firebase from "./firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function doLogin(ra, senha) {
  // console.log("logando");
  // return true;

  // const [ra, setRa] = useState("");
  // const [senha, setSenha] = useState("");
  console.log(ra.text);
  console.log(senha.text);
  let a = logarUsuario(ra.text, senha.text);
  console.log(a);
  return a;
  //return logarUsuario(ra.text, senha.text);

  function logarUsuario(ra, senha) {
    const auth = getAuth();
    let teste = false;

    signInWithEmailAndPassword(auth, ra, senha)
      .then((value) => {
        alert("Olá " + value.user.uid);
        teste = true;
      })
      .catch(() => {
        alert("Usuário não cadastrado");
        return false;
      });

    console.log(teste);
    return teste;
  }
}
