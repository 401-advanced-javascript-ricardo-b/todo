import { render } from "react-dom";
import React, {useState} from 'react';


function Header(props){
  const [smallScreen, setSmallScreen] = useState(false);
  const [mediumScreen, setMediumScreen] = useState(false);

  useEffect(()=>{
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });

  const checkScreenSize = ()=>{
    setSmallScreen(windo.innerWidth < 600);
  }

  return(
    <section className={`${smallScreen ? "small" : "large"}`} id="header">
      <h3>Header</h3>
      {smallScreen ?
      <h3>Welcome small screen user</h3>
      :
      <h3>Welcome large screen user</h3>   
    }
    </section>
  )
}

export default Header