import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectIcon from "../../assets/images/project_icon.svg";

gsap.registerPlugin(ScrollTrigger);

const Digit = ({ value, delay }) => {
  const digitRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a vertical strip of numbers 0-9 repeated
      // We want to land on 'value'.
      // To make it roll, we can create a long list of numbers ending in 'value'.
      // For simplicity, let's just have 0-9 and loop it, or just a long strip ending in the target.
      // A simple approach: 0 1 2 3 4 5 6 7 8 9 0 1 ... [value]

      // Calculate the y position to scroll to.
      // Assuming each number has a fixed height (e.g., 1em or 100%).
      // We'll use percentage for responsiveness.

      // Let's animate the 'y' percent.
      // If we have 10 digits (0-9), and we want to land on 'value',
      // we can just have a strip of 0-9.
      // But for a "rolling" effect, we want it to spin multiple times.
      // So let's create a strip that has (0-9) * 2 + (0-value).

      const digitHeight = digitRef.current.clientHeight;
      const singleNumberHeight = digitHeight / 30; // Assuming 30 numbers in the strip (3 sets of 0-9)

      // Actually, a cleaner way for GSAP slot machine:
      // Just render 0-9 repeated 3 times.
      // Land on the specific number in the last set.
      // Index of target in 0-9 is 'value'.
      // In the 3rd set (index 2), the position is (2 * 10) + value = 20 + value.

      const targetIndex = 10 + parseInt(value);
      const scrollY = -(targetIndex * 100) / 30 + "%"; // Move up by percentage

      gsap.fromTo(
        digitRef.current,
        { y: "0%" },
        {
          y: scrollY,
          duration: 2,
          ease: "power2.inOut",
          delay: delay,
          scrollTrigger: {
            trigger: digitRef.current,
            start: "top bottom",
          },
        }
      );
    }, digitRef);

    return () => ctx.revert();
  }, [value, delay]);

  // Generate the strip of numbers: 0-9 repeated 3 times
  const numbers = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= 9; j++) {
      numbers.push(j);
    }
  }

  return (
    <div
      style={{
        height: "1em",
        overflow: "hidden",
        display: "inline-block",
        verticalAlign: "bottom",
      }}
    >
      <div ref={digitRef} style={{ display: "flex", flexDirection: "column" }}>
        {numbers.map((num, i) => (
          <span
            key={i}
            style={{ height: "1em", lineHeight: "1em", display: "block" }}
          >
            {num}
          </span>
        ))}
      </div>
    </div>
  );
};

const Statistics = ({ items }) => {
  return (
    <div className="counter_main">
      <div className="level custom-container">
        {items.map((item, index) => {
          // Split the number into digits
          const digits = item.end.toString().split("");

          return (
            <div key={index} className="level-item has-text-centered">
              <div className="level-item__inner">
                <img src={ProjectIcon} alt="Icon" />
                <p className="heading">{item.title}</p>
                <div
                  className="title"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    overflow: "hidden",
                  }}
                >
                  {digits.map((digit, i) => (
                    <Digit
                      key={i}
                      value={digit}
                      delay={index * 0.1 + i * 0.02}
                    />
                  ))}
                  <span>+</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
