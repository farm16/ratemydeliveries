import { useState } from "react";
import { Icon } from "@blueprintjs/core";
import ReactStars from "react-stars";
import { useGetBusiness } from "../hooks";
// import { calculateAverageRate } from "../helpers";
import { DeliveryPersonLookUpInput } from "./inputs/DeliveryPersonLookUpInput";
import { BusinessLookUpInput } from "./inputs/BusinessLookUpInput";

export default function RateDelivery({ setState }) {
  // const { business } = useGetBusiness("mi resturant");
  // console.log("->", business);
  const [rateByName, setrateByName] = useState(true);
  const [speed, setSpeed] = useState(0.0);
  const [quality, setQuality] = useState(0.0);
  const [courtesy, setCourtesy] = useState(0.0);
  const [name, setName] = useState("");
  const [businessInfo, setBusinessInfo] = useState({
    search: "",
    formatted_address: "",
    formatted_phone_number: "",
    name: "",
    value: "",
    placeId: "",
    business_status: "",
  });

  const handleSendRate = (e) => {
    e.preventDefault();
    console.log({ businessInfo, name, speed, quality, courtesy });

    /*
    console.log({ businessInfo, name, speed, quality, courtesy });
    */
  };
  return (
    <div className="container">
      <h1>Rate Your Delivery</h1>
      <p>Rate the</p>
      <div className="rateBy">
        <h2
          className="btn-rateByName"
          onClick={() => (rateByName ? null : setrateByName((s) => !s))}
        >
          <Icon
            icon="user"
            color={rateByName ? "#fff" : "#000"}
            iconSize={18}
          />{" "}
          Person
        </h2>
        <h2
          className="btn-rateByBusiness"
          onClick={() => (rateByName ? setrateByName((s) => !s) : null)}
        >
          <Icon
            icon="shop"
            color={rateByName ? "#000" : "#fff"}
            iconSize={18}
          />{" "}
          Place
        </h2>
      </div>
      <div className="rate-form">
        <p>{rateByName ? "My order came from" : "I ordered from:"}</p>
        <BusinessLookUpInput
          businessInfo={businessInfo}
          setBusinessInfo={setBusinessInfo}
        />
        {rateByName ? (
          <>
            <p>{"delivered by"}</p>
            <DeliveryPersonLookUpInput setName={setName} />
          </>
        ) : null}
        <div className="stars-container">
          <Icon icon="walk" color="gray" iconSize={20} />
          <p>Speed</p>{" "}
          <ReactStars
            value={speed}
            count={5}
            onChange={(s) => setSpeed(s)}
            size={45}
            color2={"#ffd700"}
          />
        </div>{" "}
        <div className="stars-container">
          <Icon icon="clean" color="gray" iconSize={20} />
          <p>Quality</p>{" "}
          <ReactStars
            value={quality}
            count={5}
            onChange={(s) => setQuality(s)}
            size={45}
            color2={"#ffd700"}
          />{" "}
        </div>
        <div className="stars-container">
          <Icon icon="heart" color="gray" iconSize={15} />
          <p>Courtesy</p>
          <ReactStars
            value={courtesy}
            count={5}
            onChange={(s) => setCourtesy(s)}
            size={45}
            color2={"#ffd700"}
          />
        </div>
        <button className="btn-rate" onClick={handleSendRate}>
          SEND
        </button>
      </div>
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
          .stars-container {
            // background-color: red;
            // align-self: center;
            display: flex;
            align-items: center;
          }
          .stars-container p {
            margin: 0;
            margin-left: 5px;
            margin-right: auto;
            padding-right: 15px;
          }
          .rateBy {
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
            padding: 10px;
          }
          .rateBy h1 {
            margin: 0px;
          }
          p {
            text-align: center;
            margin: 10px 0px;
            font-size: 23px;
            margin-bottom: 10px;
            font-weight: 100;
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
          .btn-rateByName {
            color: ${rateByName ? "#fff" : "#000"};
            border-color: ${rateByName ? "#fff" : "#000"};
            background-color: ${rateByName ? "#56e8a1" : "#fff"};
            opacity: ${rateByName ? "1" : ".1"};
          }
          .btn-rateByBusiness {
            color: ${!rateByName ? "#fff" : "#000"};
            border-color: ${!rateByName ? "#fff" : "#000"};
            background-color: ${!rateByName ? "#56e8a1" : "#fff"};
            opacity: ${!rateByName ? "1" : ".1"};
          }
          stars {
            background-color: red;
          }
          rate-form {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }
          rate-form p {
            font-size: 23px;
            margin-bottom: 10px;
            font-weight: 100;
          }
          .btn-rate {
            width: 100%;
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
