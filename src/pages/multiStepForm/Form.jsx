import { useState, useEffect } from "react";
import Table1 from "../Table1";
import Table2 from "../Table2";
import Page6 from "../Page6";
import Page7 from "../Page7";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useMultistepForm } from "../../hooks/useMultistepForm"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const initialState = {
    answerId: uuidv4(),
    createdAt: new Date(),
};

export function Form() {
  const [data, setData] = useState(initialState);
  const [seconds, setSeconds] = useState(0);
  const { step, steps, currentStepIndex, next, back, isFirstStep, isLastStep } =
    useMultistepForm([
      <Table1 formData={{... data}} updateFields={updateFields}/>,
      <Table2 formData={{... data}} updateFields={updateFields}/>,
      <Page6 formData={{... data}} updateFields={updateFields}/>,
      <Page7 formData={{... data}} updateFields={updateFields}/>
    ]);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function timeSpent (){
      if(seconds < 60){updateFields({timeSpent: (seconds.toString() + " seconds")})}
      else {
         const postFix = Math.round(seconds/60) > 1 ? " minutes" : " minute"
          updateFields({timeSpent: Math.round(seconds/60).toString() + postFix})
    }
  }
  useEffect(()=>{
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    if(currentStepIndex == 0|| currentStepIndex == 1 || currentStepIndex == 2 || currentStepIndex == 3) {
      timeSpent();
    }
    return () => clearInterval(intervalId); 
  }, [currentStepIndex])
  console.log(data);
let condition = (
                (currentStepIndex === 0 && (!data.hasOwnProperty('table1Choices') || !data.hasOwnProperty('table1Evalue') || data.table1Evalue === 0)) ||
                (currentStepIndex === 1 && (!data.hasOwnProperty('table2Choices') || !data.hasOwnProperty('table2Evalue') || data.table2Evalue === 0)) ||
                (currentStepIndex === 2 && (!data.hasOwnProperty('location') || !data.hasOwnProperty('education') || !data.hasOwnProperty('employment') || data.table2Evalue === 0))
              )
              const newPostMutation = useMutation({
                mutationFn: (data) => {
                    if(currentStepIndex === 0){
                         axios.post("https://questionaire-backend-01x0.onrender.com/addData", data)
                    }else {
                         axios.patch(`https://questionaire-backend-01x0.onrender.com/update/${data.answerId}`, data)
                    }
                },
            
                onSuccess: () => {
                next();
                },

                onError: ()=> {
                    back()
                }
              });
  return (
    <div>
        {step}
        <div>
          {!isLastStep && <button
            className={condition ? "grey": "button-link"}
            onClick={()=> {
                newPostMutation.mutate(data);
            }}
            type="submit"
            disabled={condition || newPostMutation.isLoading}
          >
           Submit
          </button>}
        </div>
    </div>
  );
}
