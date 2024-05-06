import { useState } from "react";
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
    gender: 'male',
    age: 'under 18'
};

export function Form() {
  const [data, setData] = useState(initialState);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const queryClient = useQueryClient();
  console.log(data);
  const { step, steps, currentStepIndex, next, back, isFirstStep, isLastStep } =
    useMultistepForm([
      <Table1 formData={{... data}} updateFields={updateFields}/>,
      <Table2 formData={{... data}} updateFields={updateFields}/>,
      <Page6 formData={{... data}} updateFields={updateFields}/>,
      <Page7 formData={{... data}}/>
    ]);
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
