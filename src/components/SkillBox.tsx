interface SkillBoxProps {
  skillPercentage: number;
  stopColor1?: string;
  stopColor2?: string;
  skillName: string;
}

const SkillBox = ({
  skillPercentage,
  stopColor1 = "#AA367C",
  stopColor2 = "#4A2FBD",
  skillName,
}: SkillBoxProps) => {
  // Calculate the stroke dash offset based on skillPercentage
  const strokeDashOffset = 440 - 440 * 0.01 * skillPercentage;
  console.log(strokeDashOffset);
  return (
    <div className="skill-container">
      <div className="skill-item">
        <div className="outer">
          <div className="inner">
            <div id="skill-number">{skillPercentage + "%"}</div>
          </div>
        </div>
      </div>

      <svg
        className="skill-circle"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient
            id="GradientColor"
            x1="-12.4348"
            y1="91.2145"
            x2="228.124"
            y2="92.098"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color={stopColor1} />
            <stop offset="1" stop-color={stopColor2} />
          </linearGradient>
        </defs>
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke-linecap="round"
          style={{ strokeDashoffset: strokeDashOffset }}
        />
      </svg>
      <h5>{skillName}</h5>
    </div>
  );
};

export default SkillBox;
