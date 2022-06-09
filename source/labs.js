import firebase from "./firebase-config";
import { getDatabase, ref, get, push } from "firebase/database";

const db = getDatabase();
const labsRef = ref(db, "labs");

async function getLabs() {
  const labs = new Array();

  await get(labsRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      labs.push(childSnapshot.val());
    });
  });

  return labs;
}

async function registerLaboratory(lab) {
  await push(labsRef, {
    name: lab.name,
    id: lab.id,
    description: lab.description,
  });
}

export { getLabs, registerLaboratory };
