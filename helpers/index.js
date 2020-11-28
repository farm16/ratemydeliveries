import { firebase } from "../firebase";

export const calculateAverageRate = (speed, quality, courtesy) => {
  console.log({ speed, quality, courtesy });
  console.log(((speed + quality + courtesy) / 3).toFixed(2).toString());
};
export const rateBusiness = (address) => {
  firebase.collection("business").add({});
};
export const fetchBusinessInfo = (placeId, sessionToken) => {
  // const res = await fetch(googleAPI);
  // const json = await res.json();
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
export const getSessionToken = () =>
  new google.maps.places.AutocompleteSessionToken();
