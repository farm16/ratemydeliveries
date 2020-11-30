import { firebase, fv, timeStamp, local } from "../firebase";
import { useGetBusiness } from "../hooks";

export const calculateAverageRate = (speed, quality, courtesy) => {
  console.log({ speed, quality, courtesy });
  console.log(((speed + quality + courtesy) / 3).toFixed(2).toString());
};
export const loginUser = (userInfo) => {
  console.log("logging user...");
  firebase
    .auth()
    .setPersistence(local)
    .then(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then(() => console.log("user authenticated"))
        .catch((error) => {
          console.log(error);
        });
    })
    .catch(function (error) {
      console.error("error at persisting user ", error);
    });
};
export const createUser = (userInfo) => {
  console.log("creating new user...");
  firebase
    .auth()
    .setPersistence(local)
    .then(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((data) => {
          firebase
            .firestore()
            .collection("users")
            .doc(data.user.uid)
            .set({
              ...userInfo,
              uid: data.user.uid,
              isEmailVerified: data.user.emailVerified,
              createdAt: timeStamp,
              updatedAt: timeStamp,
            })
            .then(
              () => console.log("new user created")
              // console.log("created new user -> ", {
              //   ...userInfo,
              //   uid: data.user.uid,
              //   isEmailVerified: data.user.emailVerified,
              //   createdAt: timeStamp,
              //   updatedAt: timeStamp,
              // })
            )
            .catch((error) =>
              console.error("error during creation of user ", error)
            );
        })
        .catch((error) => {
          console.log("error at authenticating user", error);
        });
    })
    .catch(function (error) {
      console.error("error at persisting user ", error);
    });
};
export const rateBusiness = (businessInfo) => {
  //checks if doc exist
  firebase
    .firestore()
    .collection("business")
    .doc(businessInfo.place_id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document exists! ");
        // console.log(businessInfo.ratingInfo.ratings[0]);
        firebase
          .firestore()
          .collection("business")
          .doc(businessInfo.place_id)
          .update({
            ratings: fv.arrayUnion(businessInfo.ratings[0]),
          })
          .then((data) => {
            console.log("Document successfully updated!");
          })
          .catch((error) => console.error("error at updating array ", error));
      } else {
        firebase
          .firestore()
          .collection("business")
          .doc(businessInfo.place_id)
          .set(businessInfo)
          .then(function () {
            console.log("Document successfully written!");
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
      }
    })
    .catch((error) => console.error("Error at checing business info", error));
};
export const fetchBusinessInfo = (placeId, sessionToken) => {
  console.log("searching for placeId => " + placeId);
  return new Promise((resolve, reject) => {
    const map = new google.maps.Map(document.createElement("div"));
    let service = new google.maps.places.PlacesService(map);
    const request = {
      placeId,
      fields: [
        "name",
        "icon",
        "business_status",
        "formatted_address",
        "formatted_phone_number",
        "place_id",
      ],
      sessionToken,
    };
    service.getDetails(request, callback);
    function callback(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        resolve(place);
      } else
        reject(
          new Error(
            `Fetching place details for ${placeId} failed with ${status}`
          )
        );
    }
  });
};
