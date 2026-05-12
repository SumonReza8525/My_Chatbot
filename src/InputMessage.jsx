const InputMessage = () => {
  return (
    <div className="w-100 mt-5 lg:w-150">
      <input
        className="border bg-gray-100  p-2 mr-3 rounded-lg w-80 lg:w-130"
        type="text"
        placeholder="Send a message to Chatbot"
      />
      <button className="bg-green-800 px-3 py-2 rounded-lg cursor-pointer font-bold text-white">
        Send
      </button>
    </div>
  );
};

export default InputMessage;
