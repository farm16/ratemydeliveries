import { useState, useEffect } from "react";
import { firebase } from "../firebase";

export const useTask = (selectedProject) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("task")
      .where("userId", "==", "cffr90");

    unsubscribe = selectedProject;
  }, []);
};
