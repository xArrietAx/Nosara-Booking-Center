"use client"

import { Icon } from "../Icon";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Form1 } from "./Forms/Form1";
import { DynamicForm } from "./Forms/DynamicForm";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import axios from "axios";

const initialData = {
    Name: "",
    Phone:"",
    Email:"",
    Information:"",
    Pax:"",
    PickUp:"",
    DropOff:"",
    Vehicle:"",
    Adults:"",
    Children:"",
    Time:"",
    DepartureTime:"",
    Day:"",
    Restaurant:"",
    Luggages:"",
    Surfboard:"",
    ArrivalTime:"",
    FlighNumber:"",
    Airline:"",
    HorseActivity:"",
    Massage:"",
    SeaAdventure:"",
    Yoga:""
}

export function Book({serviceName}) {

    function updateFields(fields) {
        setData(prev => {
            return {...prev, ...fields}
        })
    }

    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(initialData)
    
    const isFirstStep = currentStepIndex === 0

    const steps = serviceName !== "Shuttle" ? [<Form1 key={Date + Math.random()} data={data} updateFields={updateFields} serviceName={serviceName} isFirstStep={isFirstStep} />, <DynamicForm key={Date + Math.random()} data={data} updateFields={updateFields} serviceName={serviceName} isFirstStep={isFirstStep} /> ] : 
    [<Form1 key={Date + Math.random()} data={data} updateFields={updateFields} serviceName={serviceName} isFirstStep={isFirstStep} currentStep={currentStepIndex} />, <DynamicForm
    key={Date + Math.random()} data={data} updateFields={updateFields} serviceName={serviceName} isFirstStep={isFirstStep} currentStep={currentStepIndex}  />, <DynamicForm key={Date + Math.random()} 
    data={data} updateFields={updateFields} serviceName={serviceName} isFirstStep={isFirstStep} currentStep={currentStepIndex} /> ] 
    
    const isLastStep = currentStepIndex === steps.length - 1 

    const step = steps[currentStepIndex]
    
    const [open, setOpen] = useState(false)
    
    function next() {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return 1
            return i + 1 
        })
    }

    function back() {
        setCurrentStepIndex(i => {
            if (i <= 0) return i
            return i - 1 
        })
    }

    const filterEmptyFields = (data) => {
        const filteredData = {};
        for (const key in data) {
          if (data[key] !== "") {
            filteredData[key] = data[key];
          }
        }
        return filteredData;
    };

    async function onSubmit(e) {
        e.preventDefault()
        if (!isLastStep) return next()
        setLoading(true)
        try {
            const filteredFormData = filterEmptyFields(data);
            filteredFormData.ServiceName = serviceName
            const res = await axios.post("/sendEmail", filteredFormData)
            toast.success(res?.data?.message);
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        } finally {
            setData({ ...initialData })
            setLoading(false)
            setCurrentStepIndex(0)
        }
    }

    return <>
    <button className="pulse hidden fixed bottom-5 right-5 btn btn-circle w-14 h-14 bg-green-500 text-white hover:bg-green-600 lg:block" onClick={() => {setOpen(true), document.documentElement.style.overflow = "hidden"}}>Book</button>
    
<div className="w-full max-w-sm xl:max-w-xs lg:w-0">
<div className={`mx-auto w-full sticky top-5 h-fit p-4 border rounded-xl bg-white transition-[transform opacity] duration-500 lg:fixed lg:w-screen lg:max-w-none lg:h-screen lg:top-0 lg:left-0 lg:z-50 lg:rounded-none lg:overflow-y-auto ${open ? "lg:translate-y-0 lg:opacity-1" : "lg:translate-y-[100%] lg:opacity-0"}`}>
        <span className="inline-block w-full mb-3 font-medium text-lg text-center text-gray-900 uppercase lg:text-xl lg:mb-5" >Book now!</span>
        <Icon className={"absolute top-3 p-1 hidden lg:block"} onClick={() => {setOpen(false), document.documentElement.style.overflow = "visible"}}>
            <IoClose fontSize={"25px"} />
        </Icon>
        <form onSubmit={onSubmit}>

            {step}
            {isLastStep && <button className="btn btn-neutral w-full mb-3" disabled={loading}> <span className={loading ? "loading loading-spinner" : "hidden" } /> Send</button>} 

         <div className="flex items-center justify-end gap-5">
            {
                !isFirstStep && <button type="button" onClick={back}>
                <Icon className={"p-2"}>
            <IoIosArrowBack fontSize={"22px"} />
                </Icon>
            </button>
            }
            {!isLastStep && <button>
                <Icon className={"p-2"}>
            <IoIosArrowForward fontSize={"22px"} />
                </Icon>
            </button>}
           
         </div>
            
        </form>
    </div>
</div>
    </>
}