import { useState } from "react";

const FormPractice = () => {
  const [message, setMessage] = useState("");
  const [updatedData, setUpdatedData] = useState([]);

  const sendData = () => {
    setUpdatedData((prev) => [...prev, { text: message, user: "sumon" }]);
  };

  return (
    <div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="your message"
        className="border p-2 rounded my-4 mr-3"
        type="text"
        name=""
        id=""
      />
      <button
        onClick={sendData}
        className="bg-red-600 cursor-pointer font-semibold px-4 py-2 rounded"
      >
        send
      </button>

      <div>
        {updatedData.map((data, index) => {
          return (
            <div className="border-2 p-2 m-3" key={index}>
              <p className="text-2xl text-red-700 font-semibold">{data.text}</p>
              <p>{data.user}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormPractice;
