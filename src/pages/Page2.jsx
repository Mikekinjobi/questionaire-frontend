import React from 'react'
import {Link} from 'react-router-dom';
import table from '../images/table.png'

export default function Page2() {
  return (
    <div>
      <h1>INSTRUCTIONS</h1>
        <p>You’re involved in an experiment in which you can fictitiously earn money. The fictitious amount you could earn will depend on your own decisions as well as the decisions of other participants.
At the end of the experiment, you will be asked to answer a few questions aimed at knowing you better (your age, your gender, your work occupation, . . . ). All these information will be kept anonymous and confidential.
</p>

<h1>Experiment Procedure </h1>
<h3>1. Overview</h3>
<p>In this experiment you will play the role of a manager who must select a portfolio of projects for his company. You are presented with a collection of items, and each item generates an expected value but requires a capacity. <b>Your objective is to select a subset of this portfolio to maximize the overall value gained for your company, while ensuring that the total resource requirement does not surpass the available capacity.</b></p>
<p>Each portfolio item is detailed so that you can have an overview of its Expected Value and its Resources Requirement. You will also have additional information on the Expected Value minus the Resource Requirement, and the ratio of Value and resources required. The items can be sorted in increasing or decreasing order by clicking on the button above the corresponding column. The sorting order can be changed at any time.</p>
<p>It is not possible to select an item that would lead to a total resource requirement exceeding the available capacity. Selected portfolio items are marked with a check box. Selectable items are marked in grey You are free to select or unselect portfolio items as you please.</p>
<p>The remaining Resource Capacity, as well as the Expected Value of the portfolio is always displayed on the top left corner of your screen. Please take sufficient time to make your decisions. Once you have made all your selections, press the continue button to irrevocably proceed to the next round.</p>
<h3>2. Participant Selection and Grouping</h3>
<p><b>Please note that you will be matched with other participants who will play the role of “employees”.</b>
As their manager, each of the portfolio items you select directly determines the tasks every employee must perform. The higher the resource requirement for the portfolio, the more difficult the is the task the employees must perform. For example, if you choose an item with value of 25 and requirement of 10, the employees must perform a search and count task to count 10 items.</p>
<h3>3. Procedure</h3>
<p>The portfolio choice experiment consists of 2 rounds. Each round consists of a single screen displaying all the portfolio items in a table containing information about the item properties as illustrated in the diagram below</p>
<img src={table} alt="table" /><br /><br />
    <Link to={'/comprehension-questions'} className='button-link'>Next</Link>
    </div>
    
  )
}
