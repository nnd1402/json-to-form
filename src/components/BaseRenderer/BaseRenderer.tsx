import BodyRenderer from "../BodyRenderer";
import MenuRenderer from "../MenuRenderer/MenuRenderer";
import "./BaseRenderer.css";

const BaseRenderer = () => {
  return (
    <div className="container">
      <MenuRenderer />
      <BodyRenderer />
    </div>
  );
};

export default BaseRenderer;
