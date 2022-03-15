/*
 * TODO: Implement a circular component which takes as a parameter
 * 1. Title of the menu item
 * 2. Font Awesome class to display
 * Eg. call: <MenuItem title="First menu" faClass="fa-thin fa-alarm-exclamation" />
 * Eg. output: https://prnt.sc/B84KVsm5bqSs
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPenFancy } from "@fortawesome/free-solid-svg-icons";

const circleIconStyle = {
  color: "808080",
};

const MenuItem = (props: any) => {
  return (
    <>
      <span className="fa-layers fa-fw fa-5x">
        <FontAwesomeIcon icon={faCircle} style={circleIconStyle} />
        <FontAwesomeIcon icon={faPenFancy} transform={"shrink-8"} />
      </span>
      <div>{props.title}</div>
    </>
  );
};

export default MenuItem;
