import React from 'react';
import styled from 'styled-components';

const AnimatedButton = ({ text, onClick }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        {text}
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className={`star-${n}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 784.11 815.53"
              style={{
                shapeRendering: 'geometricPrecision',
                textRendering: 'geometricPrecision',
                imageRendering: 'optimizeQuality',
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              }}
            >
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74 
                 20.93,-210.06 184.09,-378.37 392.05,-407.74 
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              />
            </svg>
          </div>
        ))}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    padding: 10px 28px;
    background: #000;
    font-size: 14px;
    font-weight: 600;
    color: white;
    border: 2px solid #fff1c0;
    border-radius: 9999px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    overflow: hidden;
  }

  button:hover {
    background: #fef08a;
    color: #000;
    border-color: #facc15;
    box-shadow: 0 0 25px #fef08a80;
  }

  .fil0 {
    fill: #fffdef;
  }

  ${[1, 2, 3, 4, 5, 6].map(
    (n) => `
    .star-${n} {
      position: absolute;
      filter: drop-shadow(0 0 0 #fffdef);
      z-index: -5;
      transition: all 1s ease;
    }

    button:hover .star-${n} {
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }
  `
  )}

  .star-1 { top: 20%; left: 20%; width: 25px; }
  .star-2 { top: 45%; left: 45%; width: 15px; }
  .star-3 { top: 40%; left: 40%; width: 5px; }
  .star-4 { top: 20%; left: 40%; width: 8px; }
  .star-5 { top: 25%; left: 45%; width: 15px; }
  .star-6 { top: 5%;  left: 50%; width: 5px; }

  button:hover .star-1 { top: -80%; left: -30%; }
  button:hover .star-2 { top: -25%; left: 10%; }
  button:hover .star-3 { top: 55%; left: 25%; }
  button:hover .star-4 { top: 30%; left: 80%; }
  button:hover .star-5 { top: 25%; left: 115%; }
  button:hover .star-6 { top: 5%;  left: 60%; }
`;

export default AnimatedButton;
