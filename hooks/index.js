import { useState, useEffect } from "react";
import { firebase } from "../firebase";

export const useGetBusiness = (businessAddress) => {
  const [business, setBusiness] = useState([]);
  console.log('getting data from "businessAddress"');
  useEffect(() => {
    firebase
      .firestore()
      .collection("business")
      // .where("name", "==", businessAddress)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => console.log("Error fetching from firebase ", error));
  }, [business]);

  return { business, setBusiness };
};
