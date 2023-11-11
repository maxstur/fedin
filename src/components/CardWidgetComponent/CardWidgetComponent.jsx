import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import "../../main.css";

const CardWidgetComp = () => {
  return (
    <div>
      <FontAwesomeIcon  icon={faCartArrowDown} className="me"/>
      <span className="mis-productos">0</span>
    </div>
  );
};

export default CardWidgetComp;
