import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import InputMessage from "./InputMessage";
import Messages from "./Messages";
import { useState } from "react";

const App = () => {
  const [isTop, setIstop] = useState("top");

  const handleInput = () => {
    setIstop(isTop === "top" ? "down" : isTop === "down" ? "top" : "");
  };

  const chatMessages = [
    { message: "hello chatbot?", sender: "user", id: 1 },
    { message: "Hello!,How can i help you?", sender: "robot", id: 2 },
    {
      message: "can you get me today's date?",
      sender: "user",
      id: 3,
    },
    {
      message: "Today is May 12",
      sender: "robot",
      id: 4,
    },
  ];

  const reverseChat = [...chatMessages].reverse();

  return (
    <div className="   flex flex-col justify-center items-center">
      <p className="text-2xl font-semibold mb-5">My ChatBot</p>
      <div
        className={`border-2 flex   py-2 px-4 rounded-2xl ${isTop === "top" ? "flex-col" : "flex-col-reverse"}  border-amber-400`}
      >
        {/* input filed & arrow */}

        <div
          className={` flex  ${isTop === "top" ? "flex-col-reverse" : "flex-col"}`}
        >
          <InputMessage></InputMessage>
          <div
            onClick={handleInput}
            className="  w-fit flex justify-center mx-auto cursor-pointer"
          >
            <p className="text-xs text-red-700 font-semibold">
              {isTop === "top"
                ? "Chatbox on down"
                : isTop === "down"
                  ? "Chatbox on top"
                  : ""}
            </p>
            {isTop === "top" ? (
              <ArrowBigDown className="text-red-700" size={20}></ArrowBigDown>
            ) : isTop === "down" ? (
              <ArrowBigUp className="text-red-700 " size={20}></ArrowBigUp>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* Chat mesaages */}
        <div className="space-y-2.5 ">
          {isTop === "top"
            ? reverseChat.map((chat) => {
                return <Messages key={chat.id} chat={chat}></Messages>;
              })
            : chatMessages.map((chat) => {
                return <Messages key={chat.id} chat={chat}></Messages>;
              })}
        </div>
      </div>
    </div>
  );
};

export default App;
