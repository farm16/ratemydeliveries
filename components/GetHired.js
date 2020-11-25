export default function GetHired({ setState }) {
  const [searchByName, setsearchByName] = useState(true);

  return (
    <div className="container">
      <h1>Find A Delivery Guy</h1>
      <p>Search by:</p>
      <div className="searchBy">
        <h2
          className="btn-searchByName"
          onClick={() => (searchByName ? null : setsearchByName((s) => !s))}
        >
          <Icon icon="person" color={searchByName ? "#fff" : "#000"} /> Name
        </h2>
        <h2
          className="btn-searchByBusiness"
          onClick={() => (searchByName ? setsearchByName((s) => !s) : null)}
        >
          <Icon icon="shop" color={searchByName ? "#000" : "#fff"} /> Business
        </h2>
      </div>
      <form>
        <label>
          {searchByName
            ? "I'm looking for a delivery person at:"
            : "I'm looking for a delivery person that works at "}
        </label>
        <SearchBusiness />
        {searchByName ? (
          <>
            <label>named</label>
            <SearchPerson />
          </>
        ) : null}
        <button className="btn-search">SEARCH</button>
      </form>
      <button className="btn-cancel" onClick={() => setState("")}>
        Cancel
      </button>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }
          .searchBy {
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
            padding: 10px;
          }
          .searchBy h1 {
            margin: 0px;
          }
          p {
            font-size: 18px;
            margin: 10px 0px;
          }
          h1 {
            text-align: center;
          }
          h2 {
            padding: 8px 15px;
            border-radius: 25px;
            color: #fff;
            margin: 0px;
          }
          h2:hover {
            cursor: pointer;
            // opacity: 0.5;
          }
          .btn-searchByName {
            color: ${searchByName ? "#fff" : "#000"};
            border-color: ${searchByName ? "#fff" : "#000"};
            background-color: ${searchByName ? "#56e8a1" : "#fff"};
            opacity: ${searchByName ? "1" : ".1"};
          }
          .btn-searchByBusiness {
            color: ${!searchByName ? "#fff" : "#000"};
            border-color: ${!searchByName ? "#fff" : "#000"};
            background-color: ${!searchByName ? "#56e8a1" : "#fff"};
            opacity: ${!searchByName ? "1" : ".1"};
          }
          form {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }
          form label {
            font-size: 23px;
            margin-bottom: 10px;
            font-weight: 100;
          }
          .btn-search {
            background: #56e8a1;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            padding: 10px;
            border: none;
            border-radius: 3px;
            margin-top: 10px;
          }
          .btn-cancel {
            background: none;
            border: none;
            font-size: 15px;
            font-weight: bold;
            margin: 5px;
          }
          .btn-cancel:hover {
            color: grey;
          }
        `}
      </style>
    </div>
  );
}

const SearchBusiness = () => {
  const [address, setAddress] = useState("");

  let handleChange = (address) => setAddress(address);
  let handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };
  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        debounce={500}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <input
              className="text-input"
              {...getInputProps({
                placeholder: "business's name or address",
              })}
            />

            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                // return console.log(suggestion);
                return (
                  <div
                    key={shortid.generate()}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </PlacesAutocomplete>{" "}
      <style jsx>
        {`
          input {
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

const SearchPerson = () => {
  return (
    <>
      <input
        className="text-input"
        autoComplete="false"
        placeholder="name or username"
      />
      <style jsx>
        {`
          input {
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
