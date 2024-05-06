import React from 'react'

export default function Page7({formData}) {
  return (
    <div style={{textAlign: "center"}}>
        <h1>Thank you for your Participation!</h1>
        <p>Your response has been recorded</p>

        <h3>Here are your Results:</h3>

        <p>Portfolio 1 : {((formData.table1Evalue/3556) * 100).toFixed(1)}% optimal, 3556 was the Maximum Value possible</p>
        <p>Portfolio 2 : {((formData.table2Evalue/2653) * 100).toFixed(1)}% optimal, 2653 was the Maximum Value possible</p>

    </div>
  )
}
