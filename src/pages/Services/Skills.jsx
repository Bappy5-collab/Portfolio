
 const Skills = () => {
  return (
  <div className="max-w-lg space-y-2 space-x-2">

   <div className="flex items-center">
    <img className="h-[30px]" src="https://i.postimg.cc/Zny0Z5mp/html-5-svgrepo-com-Photo-Room-png-Photo-Room.png" alt="" />
    <progress className="progress progress-error " value={90} max="100"></progress><span>90%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="https://i.postimg.cc/jC02jYq9/css-3-svgrepo-com-1-Photo-Room-png-Photo-Room.png" alt="" />
    <progress className="progress progress-info " value={80} max="100"></progress><span>80%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="https://i.postimg.cc/VNDJWh4r/tailwind-svgrepo-com-1-Photo-Room-png-Photo-Room.png" alt="" />
    <progress className="progress progress-info " value={80} max="100"></progress><span>80%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="https://i.postimg.cc/fbw3Xs7Q/js-svgrepo-com.png" alt="" />
    <progress className="progress progress-warning  " value={70} max="100"></progress><span>70%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="https://i.postimg.cc/T3ZxMJw7/react-svgrepo-com-Photo-Room-png-Photo-Room.png" alt="" />
    <progress className="progress progress-info " value={70} max="100"></progress><span>70%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="https://i.postimg.cc/44K1nvNb/node-js-svgrepo-com-Photo-Room-png-Photo-Room.png" alt="" />
    <progress className="progress progress-accent " value={40} max="100"></progress><span>40%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="https://i.postimg.cc/wTFS9Xwc/ex-removebg-preview.png" alt="" />
    <progress className="progress progress-white " value={40} max="100"></progress><span>40%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="https://i.postimg.cc/sXL1tZk3/mongodb-svgrepo-com-Photo-Room-png-Photo-Room.png" alt="" />
    <progress className="progress progress-success " value={40} max="100"></progress><span>40%</span>
    </div>
     
     
     
     
  </div>
    
  );
}
export  default  Skills;