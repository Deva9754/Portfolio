import React from 'react';
import './TextSlider.css'; // Ensure the styles are in this CSS file

const TextSlider = () => {
  const textArray = [
    "JavaScript", "TypeScript", "React", "Next.js", "UI/UX", "Tailwind CSS", 
    "Frontend Development", "Responsive Design", "React Query", "Redux", "Zustand", 
    "State Management", "Hooks", "Figma", "Component Libraries", "Styled Components", 
    "API Integration", "Version Control", "Vercel", "Webpack", "Babel", "Rest APIs","optimization","AJAX","JEST","Vite"
  ];

  return (
    <div className="text-sliders-container">
      {/* First Slider (Left to Right) */}
      <div className="text-slider-container">
        <div id="scroller-left" className="text-slider">
          {textArray.concat(textArray).map((text, index) => (
            <h4 key={index} className="stroke">{text}</h4>
          ))}
        </div>
      </div>

      {/* Second Slider (Right to Left) */}
      <div className="text-slider-container">
        <div id="scroller-right" className="text-slider">
          {textArray.concat(textArray).map((text, index) => (
            <h4 key={index} className="stroke">{text}</h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
