
 const Skills = () => {
  return (
  <div className="max-w-lg space-y-2 space-x-2">

   <div className="flex items-center">
    <img className="h-[30px]" src="/images/icons/icon-html.webp" alt="HTML5 logo" loading="lazy" decoding="async" />
    <progress className="progress progress-error " value={90} max="100"></progress><span>90%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="/images/icons/icon-css.webp" alt="CSS3 logo" loading="lazy" decoding="async" />
    <progress className="progress progress-info " value={80} max="100"></progress><span>80%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="/images/icons/icon-tailwind.webp" alt="Tailwind CSS logo" loading="lazy" decoding="async" />
    <progress className="progress progress-info " value={80} max="100"></progress><span>80%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="/images/icons/icon-js.webp" alt="JavaScript logo" loading="lazy" decoding="async" />
    <progress className="progress progress-warning  " value={70} max="100"></progress><span>70%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="/images/icons/icon-react.webp" alt="React logo" loading="lazy" decoding="async" />
    <progress className="progress progress-info " value={70} max="100"></progress><span>70%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="/images/icons/icon-node.webp" alt="Node.js logo" loading="lazy" decoding="async" />
    <progress className="progress progress-accent " value={40} max="100"></progress><span>40%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="/images/icons/icon-express.webp" alt="Express.js logo" loading="lazy" decoding="async" />
    <progress className="progress progress-white " value={40} max="100"></progress><span>40%</span>
    </div>
   <div className="flex items-center">
    <img className="h-[30px]" src="/images/icons/icon-mongodb.webp" alt="MongoDB logo" loading="lazy" decoding="async" />
    <progress className="progress progress-success " value={40} max="100"></progress><span>40%</span>
    </div>
     
     
     
     
  </div>
    
  );
}
export  default  Skills;