import React from "react";
import TopNav from "./TopNav";
import Chart from "chart.js/auto";
import { useRef, useEffect, useState } from "react";
import { BsCalendar4Event } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineMoreHoriz } from "react-icons/md";

const Body = () => {
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);

  const chartInstance = useRef(null);
  const chartInstance2 = useRef(null);

  useEffect(() => {
    const ctx2 = chartRef2.current.getContext("2d");
    const barColours2 = [
      "rgba(255, 146, 174)",
      "rgba(76, 111, 265)",
      "rgba(166, 183, 212 )",
      "rgba(76, 111, 265)",
     
      "rgba(255, 146, 174)",
    ];

    chartInstance2.current = new Chart(ctx2, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          {
            label: "highest charting",
            data: [80, 24, 59, 80, 70],
            backgroundColor: barColours2,
            barThickness: 19,
          },
        ],
      },
      options: {
        indexAxis: "x",
        cutout: "90%",
      },
    });

    return () => {
      chartInstance2.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");
    const barColours = [
      "rgba(166, 183, 212 )",
      "rgba(76, 111, 265)",
     
      "rgba(255, 146, 174)",
    ];

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "Data",
            barThickness: 3,
            data: [50, 150, 120],
            backgroundColor: barColours,
          },
        ],
      },
      options: {
        cutout: "60%",
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    setTimeout(() => {
      const text = "Your Center Text";
      const textX = chartRef.current.width / 2;
      const textY = chartRef.current.height / 2;

      myChartRef.font = "20px sans-serif";
      myChartRef.fillStyle = "black";
      myChartRef.textAlign = "center";
      myChartRef.fillText(text, textX, textY);
    }, 100);
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className=" overflow-x-hidden w-full ">
      <TopNav />
      <div className="flex flex-col lg:flex-row items-start w-full py-3 px-3">
        <div className="md:w-9/12 w-full flex-col gap-2 px-3 flex item-start">
          <div className="grid grid-cols-3 gap-14  lg:gap-7">
            <div className="w-[250px] flex gap-5  items-center justify-start h-full rounded-[8px] px-3 py-4 bg-white">
              <img src="/images/chart.jpg" className="w-[60px]" alt="" />
              <div className="flex flex-col ">
                <h1 className="text-[17px] text-[#7A7A9D]  font-medium">
                  Applicants
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-[22px] font-semibold">2.300</p>{" "}
                  <p className="text-[13px] font-medium text-[#66CB9F]">
                    (+5%)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[250px] flex gap-5  items-center justify-start h-full rounded-[8px] px-3 py-1 bg-white">
              <img src="/images/chart2.jpg" className="w-[60px]" alt="" />
              <div className="flex flex-col ">
                <h1 className="text-[17px] text-[#7A7A9D]  font-medium">
                  New Jobs
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-[22px] font-semibold">12</p>{" "}
                  <p className="text-[13px] font-medium text-[#66CB9F]">
                    (+20%)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[250px] flex gap-5  items-center justify-start h-full rounded-[8px] px-3 py-1 bg-white">
              <img src="/images/chart3.jpg" className="w-[60px]" alt="" />
              <div className="flex flex-col ">
                <h1 className="text-[17px] text-[#7A7A9D]  font-medium">
                  Growth
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-[22px] font-semibold">23%</p>{" "}
                  <p className="text-[13px] font-medium text-[red]">(-15%)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[250px] rounded-[8px] px-3 py-1  bg-white">
            <div className="flex justify-between items-center px-4">
              <h1 className="text-[20px] pb-[3px] font-medium">Profile Views</h1>

              <div className=" items-center flex ml-[60px] gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-[9px]  h-[9px] rounded-full bg-blue-500"></div>
                  <p className="text-[16px] pb-[3px] text-[#7A7A9D] font-medium">
                    users
                  </p>
                </div>

                <div className="items-center flex gap-2">
                  <div className="w-[9px]  h-[9px] rounded-full bg-[#FF92AE]"></div>
                  <p className="text-[16px] pb-[3px] text-[#7A7A9D] font-medium">
                    recruiters
                  </p>
                </div>

                <div className="items-center flex gap-2">
                  <div className="w-[9px]  h-[9px] rounded-full bg-[#A6B7D4]"></div>
                  <p className="text-[16px] pb-[3px] text-[#7A7A9D] font-medium">
                    incognito
                  </p>
                </div>
              </div>

              <button className="w-[130px] border-gray-100 bg-blue-500 rounded-[8px] text-white text-[13px] font-bold h-[39px] border-2">
                Export
              </button>
            </div>
            <div className="w-[800px] m-[auto] h-[200px] items-center flex justify-center">
              <canvas className="w-[800px]" ref={chartRef2} />
            </div>
          </div>
          <h1 className="text-[15px] font-bold">Interviews</h1>
          <div className="grid grid-cols-3 gap-14  lg:gap-7">
            <div className="w-[250px]  rounded-[8px] h-full px-3 py-1 bg-white">
              <div className="flex flex-col gap-2">
                <div className="flex  justify-between">
                  <div className="relative">
                    <img
                      className="relative w-[40px]"
                      src="/images/man.png"
                      alt=""
                    />
                    <img
                      className="absolute w-[20px] left-7 top-7"
                      src="/images/infinity.png"
                      alt=""
                    />
                  </div>{" "}
                  <MdOutlineMoreHoriz size={22} />
                </div>
                <div>
                  <h1 className="text-[14px] font-semibold">Marc Joseph</h1>
                  <h3 className="text-[13px] font-semibold text-blue-700">
                    outcrowd
                  </h3>
                </div>

                <div className="flex text-gray-500 items-center gap-3">
                  <div className="flex items-center gap-1">
                    <BsCalendar4Event />
                    <h1 className="text-[13px]">Thu.24</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoCameraOutline />
                    <h1 className="text-[13px]">11:00 - 12:00</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[250px]  rounded-[8px] h-full px-3 py-1 bg-white">
              <div className="flex flex-col gap-2">
                <div className="flex  justify-between">
                  <div className="relative">
                    <img
                      className="relative w-[40px]"
                      src="/images/maria.png"
                      alt=""
                    />
                    <img
                      className="absolute w-[20px] left-7 top-7"
                      src="/images/extrasmall.png"
                      alt=""
                    />
                  </div>{" "}
                  <MdOutlineMoreHoriz size={22} />
                </div>
                <div>
                  <h1 className="text-[14px] font-semibold">Maria Lopez</h1>
                  <h3 className="text-[13px] font-semibold text-blue-700">
                    dribbble
                  </h3>
                </div>

                <div className="flex text-gray-500 items-center gap-3">
                  <div className="flex items-center gap-1">
                    <BsCalendar4Event />
                    <h1 className="text-[13px]">Thu.24</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoCameraOutline />
                    <h1 className="text-[13px]">11:00 - 12:00</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[250px]  rounded-[8px] h-full px-3 py-1 bg-white">
              <div className="flex flex-col gap-2">
                <div className="flex  justify-between">
                  <div className="relative">
                    <img
                      className="relative w-[40px]"
                      src="/images/smith.png"
                      alt=""
                    />
                    <img
                      className="absolute w-[20px] left-7 top-7"
                      src="/images/net.png"
                      alt=""
                    />
                  </div>{" "}
                  <MdOutlineMoreHoriz size={22} />
                </div>
                <div>
                  <h1 className="text-[14px] font-semibold">Albert Smith</h1>
                  <h3 className="text-[13px] font-semibold text-blue-700">
                    netGuru
                  </h3>
                </div>

                <div className="flex text-gray-500 items-center gap-3">
                  <div className="flex items-center gap-1">
                    <BsCalendar4Event />
                    <h1 className="text-[13px]">Thu.24</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoCameraOutline />
                    <h1 className="text-[13px]">11:00 - 12:00</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-3/12 lg:grid-cols-1  mt-2 lg:mt-0  grid grid-cols-3 px-4 gap-14 lg:gap-2 w-full ">
          <div className="max-w-[250px] flex gap-5  items-center justify-start h-full rounded-[8px] px-3 py-4 bg-white">
            <img src="/images/chart4.jpg" className="w-[60px]" alt="" />
            <div className="flex flex-col ">
              <h1 className="text-[17px] text-[#7A7A9D]  font-medium">
                Recruitment
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-[22px] font-semibold">57</p>{" "}
                <p className="text-[13px] font-medium text-[#66CB9F] ">
                  (100%)
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[250px] lg:max-w-full rounded-[8px] px-5  py-1 bg-white">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ flex: "1" }}>
                <h2 className="font-bold text-[13px]">Viewers</h2>
                <ul className="flex-col p-1 flex gap-1">
                  <li className="flex flex-col items-start">
                    <div className="flex items-center  gap-1">
                      <p className="w-[7px] h-[7px] rounded-full bg-[#4C6FFF]"></p>
                      <p className="text-[11px] font-bold">8</p>
                    </div>
                    <p className="text-[11px] text-[#ACACC2] font-bold">
                      icognito
                    </p>
                  </li>
                  <li className="flex flex-col items-start">
                    <div className="flex items-center gap-1">
                      <p className="w-[7px] h-[7px] rounded-full bg-[#FF92AE]"></p>
                      <p className="text-[11px] font-bold">8</p>
                    </div>
                    <p className="text-[11px] text-[#ACACC2] font-bold">
                      users
                    </p>
                  </li>
                  <li className="flex flex-col items-start">
                    <div className="flex items-center gap-1">
                      <p className="w-[7px] h-[7px] rounded-full bg-[#A6B7D4]"></p>
                      <p className="text-[11px] font-bold">8</p>
                    </div>
                    <p className="text-[11px] text-[#ACACC2] font-bold">
                      recruiters
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <canvas className="w-[100px]" ref={chartRef} />
              </div>
            </div>
          </div>
          <div className="w-[250px] lg:max-w-full flex flex-col gap-4 py-2 rounded-[8px]  px-3 bg-white">
            <div className="w-[220px] flex items-center justify-between px-1 rounded-lg bg-[#F7FAFC] py-1">
              <h1 className="text-[#7A828A]">E-mail</h1>
              <button className=" w-[130px] border-gray-100 bg-blue-500 rounded-[8px] text-white text-[13px] font-bold h-[36px] border-2">
                Subscribe
              </button>
            </div>

            <h1 className="text-[#596A79]">Follow your statistics</h1>
          </div>
          <a className="text-blue-700 text-end" href="">
            show all
          </a>
          <div className="w-[250px]  rounded-[8px] h-full px-3 py-1 bg-white">
            <div className="flex flex-col gap-2">
              <div className="flex  justify-between">
                <div className="relative">
                  <img
                    className="relative w-[40px]"
                    src="/images/heather.png"
                    alt=""
                  />
                  <img
                    className="absolute w-[20px] left-7 top-7"
                    src="/images/monkey.png"
                    alt=""
                  />
                </div>{" "}
                <MdOutlineMoreHoriz size={22} />
              </div>
              <div>
                <h1 className="text-[14px] font-semibold">Heather Wright</h1>
                <h3 className="text-[13px] font-semibold text-blue-700">
                  mailChimp
                </h3>
              </div>

              <div className="flex text-gray-500 items-center gap-3">
                <div className="flex items-center gap-1">
                  <BsCalendar4Event />
                  <h1 className="text-[13px]">Thu.24</h1>
                </div>
                <div className="flex items-center gap-1">
                  <IoCameraOutline />
                  <h1 className="text-[13px]">11:00 - 12:00</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
