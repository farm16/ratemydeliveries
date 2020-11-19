import styles from "./styles/SearchBar.module.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useState } from "react";
import shortid from "shortid";
export default function SearchBar() {
  const [address, setAddress] = useState("");

  let handleChange = (address) => setAddress(address);
  let handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      debounce={500}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={styles.searchBarContainer}>
          <form className={styles.searchBarInput}>
            <input
              className={styles.searchBarInput}
              {...getInputProps({
                placeholder: "Search by person or business",
              })}
            />
          </form>

          <div className={styles.searchBarActive}>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              // return console.log(suggestion);
              return (
                <div
                  key={shortid.generate()}
                  {...getSuggestionItemProps(suggestion)}
                  className={styles.searchBarActiveDropdown}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
