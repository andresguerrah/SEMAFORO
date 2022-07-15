import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const OnOff = () => {

   const [opened, setOpened] = useState(false);
   const [opened2, setOpened2] = useState(false);
   const [opened3, setOpened3] = useState(false);
    
    return (
	<div className="semaforo">
		<div className="red">
        	<button class={ opened ? "redon" : "redoff"} type="button" onClick={() => {setOpened(!opened); opened && (setOpened2(false), setOpened3(false))}}></button>
    	</div>
			
		<div className="yellow">
        	<button class={ opened2 ? "yellowon" : "yellowoff"} type="button" onClick={() => {setOpened2(!opened2); opened2 && (setOpened(false), setOpened3(false))}}></button>
	    </div>

	    <div className="green">
        	<button class={ opened3 ? "greenon" : "greenoff"} type="button" onClick={() => {setOpened3(!opened3); opened3 && (setOpened(false), setOpened2(false))}}></button>
	    </div>
	</div>
	);
}
 
export default OnOff;
