import firebase from "./firebase-config";
import { getDatabase, ref, push } from "firebase/database";

async function registerReserve(userUid, reserve) {
  const db = getDatabase();

  push(ref(db, "reserves/" + userUid), {
    lab: reserve.lab,
    date: reserve.date,
    startHour: reserve.startHour,
    endHour: reserve.endHour,
    observation: reserve.observation,
  });
}

export { registerReserve };
