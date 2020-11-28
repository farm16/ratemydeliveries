import shortid from "shortid";
import PlacesAutocomplete from "react-places-autocomplete";
import { fetchBusinessInfo, getSessionToken } from "../../helpers";
const sessionToken = getSessionToken();
export const BusinessLookUpInput = ({ businessInfo, setBusinessInfo }) => {
  let handleChange = (address) =>
    setBusinessInfo({
      ...setBusinessInfo,
      search: address,
    });
  let handleSelect = (address, placeId) => {
    fetchBusinessInfo(placeId)
      .then((data) => {
        console.log(sessionToken);
        console.log(data);
        setBusinessInfo({
          name: data.name,
          icon: data.icon,
          business_status: data.business_status,
          formatted_address: data.formatted_address,
          formatted_phone_number: data.formatted_phone_number,
          place_id: data.place_id,
          search: data.formatted_address,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <PlacesAutocomplete
        searchOptions={{ types: ["establishment"], sessionToken }}
        value={businessInfo.search}
        onChange={handleChange}
        onSelect={handleSelect}
        debounce={500}
        shouldFetchSuggestions={businessInfo.search.length > 3}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="map-result-container">
            <input
              className="text-input"
              {...getInputProps({
                placeholder: "business's name or address",
              })}
            />

            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion, i) => (
              <div
                className="map-results"
                {...getSuggestionItemProps(suggestion)}
              >
                <span>{suggestion.description}</span>
              </div>
            ))}
          </div>
        )}
      </PlacesAutocomplete>
      <style jsx>
        {`
          .map-result-container {
            // position: absolute;
            // margin-bottom: 15px;
          }
          .map-results {
            margin-bottom: 10px;
          }
          .map-results:hover {
            background-color: #ddd;
            font-weight: bold;
            padding: 5px 0px;
          }
          input {
            width: 100%;
            background-color: #ededed;
            border: none;
            padding: 10px;
            border-radius: 3px;
            opacity: 0.5;
            font-size: 18px;
            text-align: center;
            margin-bottom: 20px;
          }
          input::placeholder {
            text-align: center;
            font-size: 18px;
            font-weight: lighter;
          }
          input:focus {
            background-color: #fff;
          }
        `}
      </style>
    </>
  );
};
