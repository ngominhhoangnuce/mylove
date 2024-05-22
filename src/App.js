import "./App.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Hiệu ứng hiện dần từng chữ một
    const text = document.querySelector(".fade-in");
    text.innerHTML = text.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.27}s`; // Điều chỉnh thời gian giữa các chữ cái
    });

    // Tạo hiệu ứng trái tim bay lơ lửng
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    };

    const interval = setInterval(createHeart, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1 className="fade-in">
        MY BABY LOVE YOU SO MUCH FOREVER YOU AND I !!! I LOVE YOU OH I LOVE YOU
        SO MUCH FOREVER YOU AND I
      </h1>
    </div>
  );
}

export default App;
