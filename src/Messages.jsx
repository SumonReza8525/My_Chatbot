const Messages = ({ sender, message }) => {
  const image =
    sender === "user"
      ? "avatar.png"
      : sender === "robot"
        ? "download.jfif"
        : "";

  const userDiv = (
    <div className="flex justify-end items-center  w-100 lg:w-150">
      <p className=" font-semibold bg-gray-200 px-1.5 py-2 rounded-lg">
        {message}
      </p>
      <img src={image} className="w-18" alt="" />
    </div>
  );

  const robotDiv = (
    <div className="flex justify-start items-center  w-100 ">
      <img src={image} className="w-18 rounded-full" alt="" />
      <p className="bg-gray-200 px-1.5 py-2 rounded-lg font-semibold">
        {message}
      </p>
    </div>
  );

  return <>{sender === "user" ? userDiv : robotDiv}</>;
};

export default Messages;
