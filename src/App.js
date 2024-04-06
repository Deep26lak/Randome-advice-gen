import { useEffect, useState } from "react";
import bg from "./img/bg.jpeg";

import "./app.css";
function App() {
  // Destructure the useState hook to get the state variable and the setter function
  const [newAdvice, setNewAdvice] = useState("");

  // Fetch data when component mounts
  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        setNewAdvice(data.slip.advice); // Update the state with the fetched advice
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log any errors
      });
  };
  fetchAdvice();

  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center text-center">
      <img
        className="-z-10 absolute  h-full w-full bg-cover bg-center opacity-80"
        src={bg}
        alt="Background"
      />

      <div className="card w-[45%] h-[30%] border   rounded-2xl    mt-52 flex justify-center items-center flex-col p-[2%] hover:shadow-xl shadow-black-500/100  ease-in duration-300 bg-white bg-opacity-30 ">
        <h1 className="text-3xl font-bold text-black opacity-85 ">
          {newAdvice}
        </h1>
        <button onClick={fetchAdvice}>
          <span>Give Me Advice!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
