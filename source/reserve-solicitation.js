import firebase from "./firebase-config";
import { getDatabase, ref, push, get, set } from "firebase/database";

import { registerReserve } from "./labs-reserve";

const db = getDatabase();

async function registerReserveSolicitation(userUid, reserve) {
  const reserveSolicitationRef = ref(db, "solicitation");

  await push(reserveSolicitationRef, {
    userUid: userUid,
    userName: reserve.userName,
    lab: reserve.lab,
    labName: reserve.labName,
    date: reserve.date,
    startHour: reserve.startHour,
    endHour: reserve.endHour,
    observation: reserve.observation,
  });
}

async function getReserveSolicitations() {
  const reserveSolicitations = new Array();

  const reserveRef = ref(db, "solicitation");
  await get(reserveRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      let reserve = childSnapshot.val();
      reserve.uid = childSnapshot.key;
      reserveSolicitations.push(reserve);
    });
  });

  return reserveSolicitations;
}

async function acceptSolicitation(solicitation) {
  await registerReserve(solicitation.userUid, solicitation);
  await removeSolicitation(solicitation.uid);
}

async function removeSolicitation(solicitationUid) {
  const solicitationRef = ref(db, "solicitation/" + solicitationUid);
  set(solicitationRef, null);
}

export {
  registerReserveSolicitation,
  getReserveSolicitations,
  acceptSolicitation,
  removeSolicitation,
};
