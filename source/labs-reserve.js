import firebase from "./firebase-config";
import { getDatabase, ref, push } from "firebase/database";

const db = getDatabase();

async function registerReserve(userUid, reserve) {
  const reserveRef = ref(db, "reserves/" + userUid);

  await push(reserveRef, {
    lab: reserve.lab,
    date: reserve.date,
    startHour: reserve.startHour,
    endHour: reserve.endHour,
    observation: reserve.observation,
  });
}

async function registerReserveSolicitation(userUid, reserve) {
  const reserveSolicitationRef = ref(db, "reserves/solicitation");

  await push(reserveSolicitationRef, {
    userUid: userUid,
    lab: reserve.lab,
    date: reserve.date,
    startHour: reserve.startHour,
    endHour: reserve.endHour,
    observation: reserve.observation,
  });
}

export { registerReserve, registerReserveSolicitation };
