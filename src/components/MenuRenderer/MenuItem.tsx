/*
 * TODO: Implement a circular component which takes as a parameter
 * 1. Title of the menu item
 * 2. Font Awesome class to display
 * Eg. call: <MenuItem title="First menu" faClass="fa-thin fa-alarm-exclamation" />
 * Eg. output: https://prnt.sc/B84KVsm5bqSs
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./MenuItem.css";

const icons = require("@fortawesome/free-solid-svg-icons");

const MenuItem = (props: any) => {
  console.log(props.faClass);
  return (
    <div className="itemContainer">
      <div className="fa-layers fa-fw fa-5x icons">
        <FontAwesomeIcon icon={faCircle} className="circleIconStyle" />
        <FontAwesomeIcon icon={icons[props.faClass]} transform={"shrink-8"} />
      </div>
      <span className="iconTitle">{props.title}</span>
    </div>
  );
};

export default MenuItem;
