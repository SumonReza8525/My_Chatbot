import { useState } from "react";

const InputMessage = ({ setUpdateData }) => {
  const [inputData, setInputData] = useState("");

  const sendData = () => {
    if (inputData) {
      setUpdateData((prev) => [
        ...prev,
        { message: inputData, sender: "user", id: crypto.randomUUID() },
      ]);
    }
    setUpdateData((prev) => [
      ...prev,
      {
        message: "How can i help you?",
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputData("");
  };

  return (
    <div className="w-full my-3.5">
      <input
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        className="border bg-gray-100  p-2 mr-3 rounded-lg w-92"
        type="text"
        placeholder="Send a message to Chatbot"
      />
      <button
        onClick={sendData}
        className="bg-green-800 px-3 py-2 rounded-lg cursor-pointer font-bold text-white"
      >
        Send
      </button>
    </div>
  );
};

export default InputMessage;
