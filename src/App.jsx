import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import InputMessage from "./InputMessage";
import Messages from "./Messages";
import { useState } from "react";

const App = () => {
  const [isTop, setIstop] = useState("top");
  const [updateData, setUpdateData] = useState([]);

  const handleInput = () => {
    setIstop(isTop === "top" ? "down" : isTop === "down" ? "top" : "");
  };

  const reverseChat = [...updateData].reverse();

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl font-semibold mb-5">My ChatBot</p>
      <div
        className={`border-2 flex w-120  py-2 px-4 rounded-2xl ${isTop === "top" ? "flex-col" : "flex-col-reverse"}  border-amber-400`}
      >
        {/* input filed & arrow */}

        <div
          className={` flex  ${isTop === "top" ? "flex-col-reverse" : "flex-col"}`}
        >
          <InputMessage setUpdateData={setUpdateData}></InputMessage>
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
        <div
          className={`space-y-2.5 flex w-full h-80 ${isTop === "top" ? "flex-col" : "flex-col-reverse"} overflow-y-auto scrollbar-thin`}
        >
          {isTop === "top"
            ? reverseChat.map((chat) => {
                return <Messages key={chat.id} chat={chat}></Messages>;
              })
            : reverseChat.map((chat) => {
                return <Messages key={chat.id} chat={chat}></Messages>;
              })}
        </div>
      </div>
    </div>
  );
};

export default App;
