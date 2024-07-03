import Image from "next/image";
import projectimage1 from "./img/adopet.png";
import profilepic from "./img/profile.jpeg"
import projectimage2 from "./img/mobile.png"
import projectimage3 from "./img/mobile2.png"


export default function Portfolio() {
  return (
    
    <main >
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a  className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RC</span>
        </a>
        {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div> */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#home" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#about" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#project" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Project</a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
        


     <div className="flex flex-col items-center justify-between p-24">

        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-4 text-[#f1ede6]" id="home">Portofolio</h1>
        </div>
        <div className="flex flex-row items-center space-x-10">
          <div>
          <Image src={profilepic} alt="Project 1" width={400} height={400} className="rounded-full" />
          </div>
          <div className="flex flex-col max-w-md p-5 ">
            <h4 className="pb-4">Hello Welcome</h4>
            <h1 className="text-4xl pb-4">Ryan Chandra</h1>
            <p className="mb-3 text-justify font-normal text-gray-700 dark:text-gray-400 pb-4 ">
            With a strong academic background and a passion for continuous learning, I am excited to apply my skills and expertise to create meaningful and impactful digital experiences. I am committed to making a positive difference in the field of Informatics and the broader technology landscape.
              
            </p>
                    
            <a href="#nullcv" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                 </svg>
            </a>
         
          </div>
        </div>

        <div>
          <h2 className="flex-none text-4xl font-bold mb-4 text-left pt-20 items-center" id="about">About me</h2>
          <p className="mb-3 text-justify font-normal text-gray-700 dark:text-gray-400">
              I am a 6th semester student majoring in Informatics who is very enthusiastic to continue developing
              myself. I have experience in UI/UX design and website development. I can adapt well and work in
              a team. I have a high interest in technology and design, and always look for opportunities to learn
              new things in these fields
          </p>
        </div>

        
          
        
      
        <h2 className="flex text-4xl font-bold mb-4 text-left pt-20 pb-4" id="project">Project</h2>
      <div className="flex flex-row items-center justify-center space-x-10">
        
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Image className="rounded-t-lg" src={projectimage1} width={2000} height={2000} alt="p1" />
                </a>
                <div className="p-5">
                    <a href="#null">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 1</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Web aplikasi untuk adopsi hewan dari user ke user</p>
                    <a href="#null" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 object-cover aspect-square">
                <a href="#">
                    <Image className="rounded-t-lg object-cover aspect-square" src={projectimage2} width={200} height={200} alt="p1" />
                </a>
                <div className="p-5">
                    <a href="#null">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 2</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mobile untuk user mencari rekomendasi tempat wisata Indonesia.</p>
                    <a href="https://snack.expo.dev/@elmorenalx/a4198b" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
          </div>
              
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <Image className="rounded-t-lg" src={projectimage1} width={2000} height={2000} alt="p1" />
                  </a>
                  <div className="p-5">
                      <a href="#null">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus incidunt unde </p>
                      <a href="#null" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Read more
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>
                </div>
      </div> 

        <div>
          <h2 className="flex-none text-4xl font-bold mb-4 text-left pt-20 items-center" id="contact">Contact</h2>
        </div>
        
        <div className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <div className="flex flex-col p-1">
              <div className="flex flex-row pb-2">
                <svg className="h-10 w-10 text-gray-500 items-center"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
              <p className="font-normal text-gray-700 dark:text-gray-400 pl-10 items-center">
                ryan.chandra789@gmail.com
              </p>
              </div>
              <div className="flex flex-row pb-2">
              <svg className="h-10 w-10 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <p className="font-normal text-gray-700 dark:text-gray-400 pl-10 items-center">
                +62 85156463370
              </p>
              </div>
              <div className="flex flex-row">
              <svg className="h-10 w-10 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              <p className="font-normal text-gray-700 dark:text-gray-400 pl-10 items-center">
                ryanchandra3
              </p>
              </div>
              
           
            </div>
        
        </div>


    </div> 

        
      
    </main>
  );
}