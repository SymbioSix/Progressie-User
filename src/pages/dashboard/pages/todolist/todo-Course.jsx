import { Icon } from "@iconify/react";

import Sidebar from "../../components/sidebar";
import Navbar from "../../components/header";


export default function ToDoListPage() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <Sidebar />
      <div className="flex w-full h-screen mt-24 ml-20">
        <div className="flex flex-col w-full h-full gap-10 mt-4 ml-5 mr-8 rounded-2xl">
          <div className="flex justify-between w-full h-auto">
            <div className="flex flex-col h-auto w-[52%] gap-5 shadow-[0_0px_5px_0px_rgba(0,0,0,0.5)] rounded-2xl p-5">
              <span className="text-2xl font-bold text-center">To do list</span>
              <div
                id="container-target"
                className="flex items-center gap-3 p-3 bg-[#9797977b]"
              >
                <Icon
                  icon="teenyicons:tick-circle-solid"
                  width="26"
                  height="26"
                  style={{ color: "#000000" }}
                />
                <Icon
                  icon="teenyicons:tick-circle-solid"
                  width="26"
                  height="26"
                  style={{ color: "#000000" }}
                />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-black">
                    Title dari todolist target
                  </span>
                  <span className="text-black">
                    Today 03.00 PM (sudah pasti Today)
                  </span>
                </div>
              </div>
              <div
                id="container-todolist"
                className="flex items-center gap-3 p-3"
              >
                <Icon
                  icon="mdi:tick-circle-outline"
                  width="30"
                  height="30"
                  style={{ color: "#000000" }}
                />
                <Icon
                  icon="mdi:tick-circle-outline"
                  width="30"
                  height="30"
                  style={{ color: "#000000" }}
                />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-black">
                    Title dari todolist
                  </span>
                  <span className="text-black">Videp ke -1</span>
                  <span className="text-black">Quiz ke -1</span>
                  <div className="flex items-center gap-2">
                    <span className="text-black">Coming</span>
                    <span className="text-black">30-07-2024</span>
                    <span className="text-black">03.00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 h-auto w-[45%] shadow-[0_0px_5px_0px_rgba(0,0,0,0.5)] rounded-2xl p-5">
              <h1 className="text-2xl font-bold text-center">Title Todolist Target</h1>
              <p className="text-2xl font-bold">Title Target</p>
              <p className="text-2xl font-bold">Title Target</p>
              <p className="text-2xl font-bold">Title Target</p>
              <p className="text-2xl font-bold">Title Target</p>
            </div>
          </div>
          <div className="flex justify-between w-full h-auto">
            <div className="flex flex-col h-auto w-[52%] gap-5 rounded-2xl">
              <div className="w-full h-auto p-8 border-2 border-black cursor-pointer rounded-2xl">
                <span className="text-4xl font-bold">Make a New Target</span>
              </div>
              <div className="w-full h-auto p-8 border-2 border-black cursor-pointer rounded-2xl">
                <span className="text-4xl font-bold">Add Schedule SubCourse</span>
              </div>
            </div>
            <div className="relative flex flex-col gap-5 h-auto w-[35%] max-w-[35%] bg-[#F7EBE6] rounded-2xl">
              <span className="pr-[200px] text-4xl font-bold p-5">Enthusiasm towards becoming a better person</span>
              <div className="absolute right-0 top-[-10%] z-50 bg-pasir-icon w-[150px] h-[290px] bg-cover bg-center bg-no-repeat"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}