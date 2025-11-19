import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Skills from "../pages/Services/Skills";


const AboutNav = () => {
    return (
        <div>
             <div className="  max-w-[1450px] mx-auto lg:pt-10 mb-32">
      

      <div className="max-w-[1200px] mx-auto mb-5">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <img
              className="border-e-8 shadow-2xl rounded-md"
              src="/images/aboutnav-portrait.webp"
              alt="Portrait of Chandon Kumar coding"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div>
            <p className="font-bold text-xm mb-10">
              <span className="text-3xl text-green-500"> Hello!</span> I'm
              Chandon Kumar. I'm a professional web developer.Right now i'm
              develop a MERN Stack projetcs. Hello! I'm Chandon Kumar. I'm a
              professional web developer.Right now i'm develop a MERN Stack
              projetcs. Hello! I'm Chandon Kumar. I'm a professional web
            
            </p>
            <Tabs>
              <TabList>
                <Tab>Skills</Tab>
                <Tab>Eexprience</Tab>
                <Tab>Education</Tab>
              </TabList>

              <TabPanel>
                <div className="grid lg:grid-cols-2 gap-5">
                  <div className="border-r-4	rounded-lg border-green-600 p-4  bg-slate-700">
                    <h2 className="text-xl font-bold mb-5">Web Desgin</h2>
                    <div className="flex gap-1">
                      <img
                        className=" h-[30px]"
                        src="/images/icons/icon-html.webp"
                        alt="HTML5 badge"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        className=" h-[30px]"
                        src="/images/icons/icon-css.webp"
                        alt="CSS3 badge"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        className=" h-[30px]"
                        src="/images/icons/icon-tailwind.webp"
                        alt="Tailwind CSS badge"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        className=" h-[30px]"
                        src="/images/icons/icon-js.webp"
                        alt="JavaScript badge"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        className=" h-[30px]"
                        src="/images/icons/icon-react.webp"
                        alt="React badge"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div className="border-r-4	rounded-lg border-green-600 p-4  bg-slate-700">
                    <h2 className="text-xl font-bold mb-5">Web Developing</h2>
                    <div className="flex gap-1">

                    <img
                        className=" h-[30px]"
                        src="/images/icons/icon-react.webp"
                        alt="React developer badge"
                        loading="lazy"
                        decoding="async"
                      />
                     
                      <img
                        className=" h-[30px]"
                        src="/images/icons/icon-tailwind.webp"
                        alt="Tailwind CSS developer badge"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        className=" h-[30px]"
                        src="/images/icons/icon-node.webp"
                        alt="Node.js developer badge"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        className=" h-[30px]"
                        src="/images/icons/icon-express.webp"
                        alt="Express.js developer badge"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        className=" h-[30px]"
                        src="/images/icons/icon-mongodb.webp"
                        alt="MongoDB developer badge"
                        loading="lazy"
                        decoding="async"
                      />       
                    </div>
                 
                  </div>
                 
                </div>
                <Skills></Skills>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
      
              </TabPanel>
              <TabPanel>
              <div className="grid lg:grid-cols-2 gap-3">
                <div  className="border-r-4	rounded-lg border-green-600 p-4  bg-slate-700">
                <h2 className="font-bold text-gray-300">Secendray School Certificate (SSC)</h2>
                <p>Group of Science</p>
                <p> Education Year: 2018</p>
                <p>Pssed Year: 2019</p>
                </div>
                <div  className="border-r-4	rounded-lg border-green-600 p-4  bg-slate-700">
                <h2 className="font-bold text-gray-300">Higher Secendray Certificate (HSC)</h2>
                <p>Group of Science</p>
                <p> Education Years: 2019-2023</p>
                <p>Pssed Year: 2021</p>
                </div>
              </div>
              </TabPanel>
            </Tabs>
          </div>
          <div></div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AboutNav;