import { Col } from "react-bootstrap";

interface Props {
  startColor: string;
  endColor?: string;
  isVisible?: boolean;
  x?: string;
  y?: string;
  strokeWidth?: string;
  width?: string;
  height?: string;
}
const SideBar = ({
  startColor,
  endColor = startColor,
  isVisible = false,
  x = "50%",
  y = "0%",
  strokeWidth = "2",
  width = "1%",
  height = "100%",
}: Props) => {
  return (
    <Col className="side-bar" xs={1} md={1} lg={1}>
      {isVisible ? (
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color={startColor} stop-opacity="1" />
              <stop offset="100%" stop-color={endColor} stop-opacity="1" />
            </linearGradient>
          </defs>
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            stroke="url(#grad1)"
            stroke-width={strokeWidth}
            fill="none"
          />
        </svg>
      ) : null}
    </Col>
  );
};

export default SideBar;
