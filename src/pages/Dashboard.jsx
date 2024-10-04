import React, { useState } from "react";
import { Chart as ChartJS, defaults, BarController, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import sourceData from "../data/income.json";
import exp from "../data/exp.json";
import { CiSearch } from "react-icons/ci";
import { RiHome5Fill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineTask } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { RiLoginCircleLine } from "react-icons/ri";
import { HiMiniCube } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { RiMessage2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { FaRegImage } from "react-icons/fa6";
import { RiShareCircleLine } from "react-icons/ri";
import Calendar from "react-calendar"; // Import the calendar component
import "react-calendar/dist/Calendar.css";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";
function Dashboard() {

    const data = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'Finance Health',
          data: [200, 200, 200, 200, 200, 100],
          backgroundColor: 'lightgreen',
          borderColor: 'black',
          borderWidth: 1
        }]
      };
    
      const options = {
        responsive: true,
        plugins: {
            title:{
                text:"Finance health"
            }
        },
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: true,
          text: 'Finance Health'
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 10,
                family: 'Arial'
              }
            }
          }
        }
      };
        
      
        
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleCalendarOpen = () => {
    setIsCalendarOpen(true);
  };

  const handleCalendarClose = () => {
    setIsCalendarOpen(false);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <div className="flex  justify-between  h-screen overflow-y-auto ">
        <div className=" border-2 overflow-y-auto h-auto p-[25px]">
          <div className=" ml-[-24px] mb-[20px] sticky  z-[50] top-0 ">
            <FaBars className="  text-2xl cursor-pointer" />
          </div>
          <div className=" relative  shadow-md">
            <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="pl-10 pr-[70px] w-[323px] py-4 font-serif border outline-none capitalize rounded-md  "
              placeholder="Search..."
            />
          </div>
          <hr className="my-[40px] border-2 border-gray-200" />
          <div className=" ">
            <div className="flex p-[20px] cursor-pointer  items-center hover:bg-blue-700 hover:text-white rounded-xl text-[21px] font-serif">
              <RiHome5Fill className="mr-[10px]  " />
              <h1 className="c">
                <Link to="/">Dashboard</Link>
              </h1>
            </div>
            <div className="flex p-[20px] cursor-pointer  items-center hover:bg-blue-700 hover:text-white rounded-xl text-[21px] font-serif">
              <MdOutlineTask className="mr-[10px]  " />
              <h1 className="c">
                <Link to="/">Task</Link>
              </h1>
            </div>
            <div className="flex p-[20px] cursor-pointer  items-center hover:bg-blue-700 hover:text-white rounded-xl text-[21px] font-serif">
              <HiMiniCube className="mr-[10px]  " />
              <h1 className="c">
                <Link to="/">Rooms</Link>
              </h1>
            </div>
            <div className="flex p-[20px] cursor-pointer  items-center hover:bg-blue-700 hover:text-white rounded-xl text-[21px] font-serif">
              <IoCalendarOutline className="mr-[10px] c " />
              <h1 className="c">
                <Link to="/">Calender</Link>
              </h1>
            </div>
            <div className="flex p-[20px] cursor-pointer  items-center hover:bg-blue-700 hover:text-white rounded-xl text-[21px] font-serif">
              <FaRegUser className=" mr-[10px]  " />
              <h1 className="c">
                <Link to="/">Members</Link>
              </h1>
            </div>
            <hr className="my-[40px] border-2 border-gray-200" />
            <div className="flex p-[20px] cursor-pointer  items-center hover:bg-blue-700 hover:text-white rounded-xl text-[21px] font-serif">
              <RiMessage2Line className="mr-[10px]  " />
              <h1 className="c">
                <Link to="/">Messages</Link>
              </h1>
            </div>
            <div className="flex p-[20px] cursor-pointer  items-center hover:bg-blue-700 hover:text-white rounded-xl text-[21px] font-serif">
              <IoSettingsOutline className="mr-[10px]  " />
              <h1 className="c">
                <Link to="/">Settings</Link>
              </h1>
            </div>
            <div className="flex p-[20px] cursor-pointer  items-center hover:bg-blue-700 hover:text-white rounded-xl text-[21px] font-serif">
              <TbLogout2 className="mr-[10px]  " />
              <h1 className="c">
                <Link to="/">Logout</Link>
              </h1>
            </div>
          </div>
          <div className="bg-blue-600 flex flex-col rounded-xl my-[30px] p-[10px]">
            <h1 className=" text-center text-2xl text-white my-[10px]  p-[20px]">
              Update your account to <br /> PRO VERSION now
            </h1>
            <button className="bg-blue-50 text-xl p-[15px] mb-[10px] text-blue-900 rounded-xl">
              Upgrade Now
            </button>
          </div>
        </div>
        <div className=" items-center  justify-between border-2 p-[20px]">
          <div className="flex items-center justify-between">
            <h1 className="text-[40px] font-bold">Dashboard</h1>
            <IoCalendarOutline
              className="text-2xl"
              onClick={handleCalendarOpen}
            />

            {isCalendarOpen && (
              <div className="absolute bg-white shadow-md p-4 rounded-lg z-[40]">
                <Calendar onChange={handleDateChange} value={date} />
              </div>
            )}
          </div>

          <div className="h-[300px] w-[860px]">
            <Bar
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Total expanses",
                    data: exp.map((data) => data.value),
                    backgroundColor: "#60D1EB",
                    borderRadius: 3,
                  },
                  {
                    label: "Total income",
                    data: sourceData.map((data) => data.value),
                    backgroundColor: "#4073C0",
                    borderRadius: 3,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Summery",
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false, 
                    },
                  },
                  y: {
                    grid: {
                      display: false, 
                    },
                  },
                },
              }}
            />
          </div>
          <h1 className="my-[10px] text-2xl font-bold">Activity Summery</h1>
          <div className="flex ">
            <div className=" h-[306px] border-2 w-[350px]"><Doughnut data={data} options={options} /></div>
            <div className="border-2  p-[20px]   ">
              <h1 className="c">Transaction</h1>
              <div className="overflow-auto h-[300px]">
              <div className="flex mt-[20px] items-center ">
                <RiShareCircleLine className="text-3xl" />
                <div className="ml-[15px]">
                  <h1 className="text-lg font-bold">Monthly Groceries</h1>
                  <p className="opacity-65">Aug 10,2021</p>
                </div>
                <div className="bg-red-700 h-[10px] rounded-full ml-[40px] w-[10px]"></div>
                <h1 className="text-lg text-red-600 ml-[10px] font-semibold">Low</h1>
                <div className="text-end ">
                  <h1 className="text-xl text-red-600 font-bold ml-[80px]">$-1800,00</h1>
                  <p className="opacity-60 ml-[0px]">From 'savings' wallet</p>
                </div>
                
              </div>
              <hr className="my-[20px]  border-2 border-gray-200" />
              <div className="flex mt-[20px] items-center ">
              <RiLoginCircleLine className="flex rotate-45 text-3xl" />
                <div className="ml-[15px]">
                  <h1 className="text-lg font-bold">Freelance work</h1>
                  <p className="opacity-65">Aug 10,2021</p>
                </div>
                <div className="bg-green-700 h-[10px] rounded-full ml-[40px] w-[10px]"></div>
                <h1 className="text-lg text-green-700 ml-[10px] font-semibold">High</h1>
                <div className="text-end ">
                  <h1 className="text-xl text-green-600 font-bold ml-[80px]">+$650,00</h1>
                  <p className="opacity-60 ml-[0px]">From 'savings' wallet</p>
                </div>
                
              </div>
              <hr className="my-[20px]  border-2 border-gray-200" />
              <div className="flex mt-[20px] items-center ">
                <RiShareCircleLine className="text-3xl" />
                <div className="ml-[15px]">
                  <h1 className="text-lg font-bold">Monthly Groceries</h1>
                  <p className="opacity-65">Aug 10,2021</p>
                </div>
                <div className="bg-red-700 h-[10px] rounded-full ml-[40px] w-[10px]"></div>
                <h1 className="text-lg text-red-600 ml-[10px] font-semibold">Low</h1>
                <div className="text-end ">
                  <h1 className="text-xl text-red-600 font-bold ml-[80px]">$-1800,00</h1>
                  <p className="opacity-60 ml-[0px]">From 'savings' wallet</p>
                </div>
                
              </div>
              <hr className="my-[20px]  border-2 border-gray-200" />
              <div className="flex mt-[20px] items-center ">
                <RiShareCircleLine className="text-3xl" />
                <div className="ml-[15px]">
                  <h1 className="text-lg font-bold">Monthly Groceries</h1>
                  <p className="opacity-65">Aug 10,2021</p>
                </div>
                <div className="bg-red-700 h-[10px] rounded-full ml-[40px] w-[10px]"></div>
                <h1 className="text-lg text-red-600 ml-[10px] font-semibold">Low</h1>
                <div className="text-end ">
                  <h1 className="text-xl text-red-600 font-bold ml-[80px]">$-1800,00</h1>
                  <p className="opacity-60 ml-[0px]">From 'savings' wallet</p>
                </div>
                
              </div>
              <hr className="my-[20px]  border-2 border-gray-200" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-[40px]   border-2">
          <div className="flex  ">
            <div className="bg-gray-300 flex text items-center justify-center h-[60px] w-[60px] text-[20px] rounded-full">
              <FaRegImage />
            </div>
            <div className="flex flex-col text-left ml-[15px] items-center">
              <h1 className="font-bold text-lg">Peter Parker</h1>
              <h3 className="ml-[-15px] text-gray-500 font-semibold">
                ID - 281770
              </h3>
            </div>
            <FaAngleRight className="flex mt-[20px] ml-[70px] cursor-pointer text-xl text-gray-500" />
          </div>
          <hr className="my-[40px] border-2 border-gray-200" />
          <div className="bg-blue-800 text-white p-[20px] rounded-xl">
            <FaRegImage className="text-black text-4xl" />
            <h3 className="uppercase text-[13px]  mt-[10px] opacity-40">
              card number
            </h3>
            <h1 className="text-[30px]">3829 4820 4629 ****</h1>
            <div className="flex justify-between mt-[10px]">
              <div className="">
                {" "}
                <h3 className="uppercase text-[13px] opacity-40">
                  holder name
                </h3>
                <h1 className="text-[20px]  font-bold">Peter Parker</h1>
              </div>
              <div className="c">
                {" "}
                <h3 className="uppercase text-[13px] opacity-40">valid thru</h3>
                <h1 className="text-[20px]  font-bold">07/25</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-[30px]">
            <button className="flex hover:bg-red-600 hover:text-white items-center border-2 rounded-full px-[20px] py-[10px] text-xl font-semibold gap-[5px]">
              <RiShareCircleLine />
              Cash Out
            </button>
            <button className="flex hover:bg-green-700 hover:text-white items-center border-2 rounded-full px-[20 px] py-[10px] text-xl font-semibold gap-[5px]">
              <RiLoginCircleLine className="flex rotate-45" />
              Add Cash
            </button>
          </div>
          <h1 className="capitalize mt-[20px] text-[20px] font-bold">
            latest news
          </h1>
          <div className="flex flex-col overflow-auto  h-auto">
            <div>
              <div className="flex items-center mt-[20px] gap-[15px]">
                <div className="bg-gray-300 p-[10px]  rounded-full flex ">
                  <FaRegImage />
                </div>
                <h1 className="text-blue-500">Anthony Liem</h1>
              </div>
              <div className="flex gap-[25px] mt-[16px]  items-center">
                <h1 className="capitalize text-[17px] font-bold">
                  Bank od england risks <br /> hiking for ahaead
                </h1>
                <div className="bg-gray-300 p-[20px] h-[70px] flex w-[100px] rounded-xl text-3xl items-center justify-center">
                  <FaRegImage />
                </div>
              </div>
              <div className="flex items-center gap-[40px] mt-[10px] opacity-50">
                <h1 className="uppercase font-bold">economics </h1>
                <h1 className="c"> Aug 01,2021</h1>
              </div>
              <hr className="my-[40px] border-2 border-gray-200" />
            </div>
            <div>
              <div className="flex items-center mt-[20px] gap-[15px]">
                <div className="bg-gray-300 p-[10px]  rounded-full flex ">
                  <FaRegImage />
                </div>
                <h1 className="text-blue-500">Anthony Liem</h1>
              </div>
              <div className="flex gap-[25px] mt-[16px]  items-center">
                <h1 className="capitalize text-[17px] font-bold">
                  Bank od england risks <br /> hiking for ahaead
                </h1>
                <div className="bg-gray-300 p-[20px] h-[70px] flex w-[100px] rounded-xl text-3xl items-center justify-center">
                  <FaRegImage />
                </div>
              </div>
              <div className="flex items-center gap-[40px] mt-[10px] opacity-50">
                <h1 className="uppercase font-bold">economics </h1>
                <h1 className="c"> Aug 01,2021</h1>
              </div>
              <hr className="my-[40px] border-2 border-gray-200" />
            </div>
            <div>
              <div className="flex items-center mt-[20px] gap-[15px]">
                <div className="bg-gray-300 p-[10px]  rounded-full flex ">
                  <FaRegImage />
                </div>
                <h1 className="text-blue-500">Anthony Liem</h1>
              </div>
              <div className="flex gap-[25px] mt-[16px]  items-center">
                <h1 className="capitalize text-[17px] font-bold">
                  Bank od england risks <br /> hiking for ahaead
                </h1>
                <div className="bg-gray-300 p-[20px] h-[70px] flex w-[100px] rounded-xl text-3xl items-center justify-center">
                  <FaRegImage />
                </div>
              </div>
              <div className="flex items-center gap-[40px] mt-[10px] opacity-50">
                <h1 className="uppercase font-bold">economics </h1>
                <h1 className="c"> Aug 01,2021</h1>
              </div>
              <hr className="my-[40px] border-2 border-gray-200" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="">
        <Bar
          data={{
            labels: sourceData.map((data) =>data.label),
            datasets: [
              {
                label: "a",
                data: sourceData.map((data) => data.value),
                backgroundColor: ["rgba(75, 192, 192, 0.2)"],
              },
              {
                label:"b",
                data:exp.map((data)=>data.value),
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              },
            ],
          }}
        />
        <Doughnut
          data={{
            labels: ["a", "b", "c"],
            datasets: [
              {
                label: "sales",
                data: [200, 300, 400],
                backgroundColor: ["rgba(75, 192, 192, 0.2)"],
                borderColor: ["rgba(75, 192, 192, 1)"],
                borderWidth: 1,
              },
            
            ],
          }}
        />
      </div> */}
    </>
  );
}

export default Dashboard;
