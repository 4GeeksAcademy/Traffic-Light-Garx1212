import React, { useState } from 'react';


const Home = () => {
  const [activeLight, setActiveLight] = useState('');

  const changeLight = (color) => {
    setActiveLight(color);
  };

  return (
    <div>
      <div className="traffic-light">
        <div className={`light red ${activeLight === 'red' ? 'active' : ''}`} id="redLight"onClick={() => changeLight('red')}> 
			 
		</div>
        <div className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`} id="yellowLight"onClick={() => changeLight('yellow')}>

		</div>
        <div className={`light green ${activeLight === 'green' ? 'active' : ''}`} id="greenLight"onClick={() => changeLight('green')}
		></div>
      </div>
    </div>
  );
};

export default Home;