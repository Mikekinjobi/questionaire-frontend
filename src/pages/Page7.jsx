import React, {useEffect} from 'react'

export default function Page7({formData, updateFields}) {
  return (
    
    <div style={{textAlign: "center"}}>
        <h1>Thank you for your Participation!</h1>
        <p>Your response has been recorded</p>

        <h3>Here are your Results:</h3>

        <p>Portfolio 1 : {formData.table1Result} optimal, 3556 was the Maximum Value possible</p>
        <p>Portfolio 2 : {formData.table2Result} optimal, 2653 was the Maximum Value possible</p>

    </div>
  )
}
