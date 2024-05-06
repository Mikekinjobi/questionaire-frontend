import React from 'react'
import {Link} from 'react-router-dom';
import table from '../images/table.png'

export default function Page2() {
  return (
    <div>
      <h1>INSTRUCTIONS</h1>
        <p>You’re involved in an experiment. The survey will take 15 minutes (or less) of your time.</p>
      <p>At the end of the experiment, you will be asked to answer a few questions aimed at knowing you better (your age, your gender, your work occupation, . . . ). <b> All this information will be kept anonymous and confidential.</b></p>
<h1>Experiment Procedure </h1>
<h3>1. Overview</h3>
<p>In this experiment you will play the role of a manager who must select a portfolio of projects for his company. You are presented with a collection of items, and each item generates an expected value but has a cost. The expected value is the value you expect to get from the portfolio. The cost of having this value is the <b>resource requirement</b>. You cannot spend more than the resources available to you. <b>Your objective is to select a subset of these portfolio to maximize the overall value gained for your company, while ensuring that the total resource requirement (cost) does not surpass the available capacity.</b></p>
<p>Each portfolio item is detailed so that you can have an overview of its Expected Value and its Resources Requirement (cost). You will also have additional information on the Expected Value minus the Resource Requirement, and the ratio of value and resources requirement. Thus, each row is considered as a single item. The resource capacity shows you how much resources you have available to spend on choosing portfolio items.</p>
<p>You will not be able to choose items that would use up more resources than what's available. Once you reach the capacity limit, an error message will prevent you from selecting any more items. The items you have already selected are marked with a blue tick in the checkbox next to it. Selectable items have a grey checkbox next to it. You are free to select or unselect portfolio items as you please.</p>
<p>The remaining Resource Capacity as well as the total value expected of all the items you select. is always displayed on the left of your screen, and it updates based on the items you select. Please take sufficient time to make your decisions. After you've made all your selections, click the "Submit" button to proceed to the next round. This action is final and cannot be undone.</p>
<h3>2. Participant Selection and Grouping</h3>
<p><b>Please note that you will be matched with other participants who will play the role of “employees”.</b>
As their manager, each of the portfolio items you select directly determines the tasks each of your assigned employees must perform. The higher the resource requirement for the portfolio items selected, the more difficult the is the task the employees must perform. For example, if you choose an item with value of 25 and cost of 10, your employees must perform a ‘search and count’ task to count 10 items.</p>
<h3>3. Procedure</h3>
<p>The portfolio choice experiment consists of 2 rounds. Each round consists of a single screen displaying all the portfolio items in a table containing information about the item properties as illustrated in the figure below. Before the main rounds start, you will have 1 training round.</p>
<img src={table} alt="table" /><br /><br />
<h3>Thanks for participating!</h3>
    <Link to={'/comprehension-questions'} className='button-link'>Next</Link>
    </div>
    
  )
}
