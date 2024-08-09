import { useEffect } from "react";
import Background from "../Background/Background";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";

function Iwatch() {
  useEffect(() => {
    document.title = "Apple Watch | Apple";
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Background with scroll support */}
        <Background>
          <Navbar />{" "}
          {/* Adjust the padding-top to ensure the content isn't hidden under the Navbar */}
          <Title />
        </Background>
      </main>
    </div>
  );
}

export default Iwatch;
