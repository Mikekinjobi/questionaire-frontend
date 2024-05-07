import React from 'react'
import {Link} from 'react-router-dom';
import table from '../images/table.png'

export default function Page2() {
  return (
    <div>
      <h1>INSTRUCTIONS</h1>
        <p><b>You are given the role of a manager who must select a portfolio of projects for his company.</b> You
are presented with a collection of items. Each item generates an expected value, and it has a cost.</p>
      <p>- The expected value is the value you expect to get from the portfolio.</p>
<p>- The cost of having this value is the resource requirement. Note that you cannot spend more than the resources available to you.</p>
<p>In addition to this information, you will be presented with the difference (value - cost) and the ratio value/cost.</p>
<p><b>The items you have selected will be assigned to other participants who are given the role of employees.</b> Each of the portfolio items you select determines the tasks the employees must perform. The higher the resource requirement for the portfolio items selected, the more difficult the task the employees must perform. For example, if you choose an item with value of 25 and cost of 10, the employees must perform a ‘search and count’ task over 10 items. If the cost is of 50, the employees must perform a ‘search and count’ task over 50 items.</p>
<p><b>If the employee for any reason chooses to not do the task or doesn’t get it right, the company gets no value.</b></p>
<p>Please note that you cannot choose items that would use up the resources available. The items you have already selected are marked with a blue tick in the checkbox next to it. Selectable items have a grey checkbox next to it. You are free to select or unselect portfolio items as you please. The remaining capacity as well as the total value expected of all the items selected are displayed on the left of your screen.</p>
<p>After you've made all your selections, click the "Submit" button to proceed to the next round. This action is final and cannot be undone.</p>
<p>The portfolio choice experiment consists of 2 rounds. Each round consists of a single screen displaying all the portfolio items in a table containing information about the item properties as illustrated in the figure below. Before the main rounds start, you will have a training round.</p>

<img src={table} alt="table" /><br /><br />
<h3>Thanks for participating!</h3>
    <Link to={'/comprehension-questions'} className='button-link'>Next</Link>
    </div>
    
  )
}
