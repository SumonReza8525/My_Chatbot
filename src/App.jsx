import InputMessage from "./InputMessage";
import Messages from "./Messages";

const App = () => {
  return (
    <div className="   flex flex-col justify-center items-center">
      <p className="text-2xl font-semibold mb-5">My ChatBot</p>
      <div className="border-2 flex  flex-col-reverse p-6 rounded-2xl ">
        <InputMessage></InputMessage>
        <div className="space-y-2.5">
          <Messages sender="user" message="hello chatbot?"></Messages>
          <Messages
            sender="robot"
            message="Hello!,How can i help you?"
          ></Messages>
          <Messages
            sender="user"
            message="can you get me today's date?"
          ></Messages>
          <Messages sender="robot" message="Today is May 12"></Messages>
        </div>
      </div>
    </div>
  );
};

export default App;
