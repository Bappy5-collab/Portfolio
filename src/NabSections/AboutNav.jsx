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
              src="https://i.postimg.cc/PqCW3cr7/Whats-App-Image-2023-12-11-at-00-30-08-f7aceefa-removebg-preview.png"
              alt=""
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
                        src="https://i.postimg.cc/Zny0Z5mp/html-5-svgrepo-com-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/jC02jYq9/css-3-svgrepo-com-1-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/VNDJWh4r/tailwind-svgrepo-com-1-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/fbw3Xs7Q/js-svgrepo-com.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/T3ZxMJw7/react-svgrepo-com-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="border-r-4	rounded-lg border-green-600 p-4  bg-slate-700">
                    <h2 className="text-xl font-bold mb-5">Web Developing</h2>
                    <div className="flex gap-1">

                    <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/T3ZxMJw7/react-svgrepo-com-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                     
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/VNDJWh4r/tailwind-svgrepo-com-1-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/44K1nvNb/node-js-svgrepo-com-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/wTFS9Xwc/ex-removebg-preview.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/sXL1tZk3/mongodb-svgrepo-com-Photo-Room-png-Photo-Room.png"
                        alt=""
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