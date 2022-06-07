import firebase from "./firebase-config";
import { getDatabase, ref, get } from "firebase/database";

const db = getDatabase();

async function getLabs() {
  const labs = new Array();

  const labsRef = ref(db, "labs");
  await get(labsRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      labs.push(childSnapshot.val());
    });
  });

  return labs;
}

export { getLabs };
