import MessageBox from "./_components/message-box";

export default function MenuView() {
  return (
    <div className="flex justify-center items-center h-screen">
      <MessageBox
        header="Welcome to the Menu View"
        content="This is a simple message box component."
        timer={10}
      />
    </div>
  );
}
