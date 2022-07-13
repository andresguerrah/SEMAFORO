import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const OnOff = () => {

  //  const [opened, setOpened] = useState(true);
  
    
    return (
	<div className="semaforo">
			    <div className="red">
        	<button class="redoff" type="button" onClick={() => setOpened(false)}>
        	OFF
        	</button>
    		
      		<button class="redon" type="button" onClick={() => setOpened(true)}>
       		ON
      		</button>
	    </div>
			    <div className="yellow">
        	<button class="yellowoff" type="button" onClick={() => setOpened(false)}>
        	OFF
        	</button>
    		
      		<button class="yellowon" type="button" onClick={() => setOpened(true)}>
       		ON
      		</button>
	    </div>
	    <div className="green">
        	<button class="greenoff" type="button" onClick={() => setOpened(false)}>
        	OFF
        	</button>
    		
      		<button class="greenon" type="button" onClick={() => setOpened(true)}>
       		ON
      		</button>
	    </div>
	</div>
	);
}
 
export default OnOff;
