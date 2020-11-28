export const DeliveryPersonLookUpInput = ({ name, setName }) => {
  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-input"
        autoComplete="false"
        placeholder="name or username"
      />
      <style jsx>
        {`
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
