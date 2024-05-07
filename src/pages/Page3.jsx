import React, {useState}from 'react'
import {Link} from "react-router-dom"
export default function Page3() {
    const [submitted, setSubmitted] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [portfolioSelect, setPortfolioSelect] = useState('');
    const [portfolioCapacity, setPortfolioCapacity] = useState('');
    const [optionsSelected, setOptionsSelected] = useState([]);
  
    const handlePortfolioSelectChange = (event) => {
      setPortfolioSelect(event.target.value);
    };
  
    const handlePortfolioCapacityChange = (event) => {
      setPortfolioCapacity(event.target.value);
    };
  
    const handleOptionChange = (event) => {
      const option = event.target.value;
      const isChecked = event.target.checked;
  
      if (isChecked) {
        setOptionsSelected((prevOptions) => [...prevOptions, option]);
      } else {
        setOptionsSelected((prevOptions) =>
          prevOptions.filter((item) => item !== option)
        );
      }
    };
  
    const handleSubmit = () => {
        if(portfolioSelect == 'false' && portfolioCapacity == 'true' && optionsSelected.length==3){
      setSubmitted(true);
    setWrong(false);
    }
    else{
        setSubmitted(false);
        setWrong(true);
    }
    };
  
    return (
      <div>
        <form action="">
          <h1>Comprehension Questions</h1>
  
          <fieldset>
            <legend>Once a portfolio item is selected, it cannot be unselected.</legend>
            <input
              type="radio"
              name="portfolioSelect"
              id="trueSelect"
              value="true"
              checked={portfolioSelect === 'true'}
              onChange={handlePortfolioSelectChange}
            />
            <label htmlFor="trueSelect">True</label>
            <input
              type="radio"
              name="portfolioSelect"
              id="falseSelect"
              value="false"
              checked={portfolioSelect === 'false'}
              onChange={handlePortfolioSelectChange}
            />
            <label htmlFor="falseSelect">False</label>
            {wrong && <span className="wrongAnswer"> Answer: False</span>}
            {submitted && <span className='answer'> Correct!</span>}
          </fieldset>
  
          <fieldset>
            <legend>The portfolio value must not exceed the specified capacity constraint</legend>
            <input
              type="radio"
              name="portfolioCapacity"
              id="trueCapacity"
              value="true"
              checked={portfolioCapacity === 'true'}
              onChange={handlePortfolioCapacityChange}
            />
            <label htmlFor="trueCapacity">True</label>
            <input
              type="radio"
              name="portfolioCapacity"
              id="falseCapacity"
              value="false"
              checked={portfolioCapacity === 'false'}
              onChange={handlePortfolioCapacityChange}
            />
            <label htmlFor="falseCapacity">False</label>
            {wrong && <span className="wrongAnswer"> Answer: True</span>}
            {submitted && <span className='answer'> Correct!</span>}
          </fieldset>
  
          <fieldset>
            <legend>Which of the following is true? Select all that applies.</legend>
            <input
              type="checkbox"
              name="option1"
              id="option1"
              value="Option 1"
              checked={optionsSelected.includes('Option 1')}
              onChange={handleOptionChange}
            />
            <label htmlFor="option1">Your objective is to maximize the overall portfolio value, while ensuring that the total resource requirement does not surpass the available capacity.</label>
            <br />
            <input
              type="checkbox"
              name="option2"
              id="option2"
              value="Option 2"
              checked={optionsSelected.includes('Option 2')}
              onChange={handleOptionChange}
            />
            <label htmlFor="option2">Your portfolio selection choices define other players’ tasks and actions.</label>
            <br />
            <input
              type="checkbox"
              name="option3"
              id="option3"
              value="Option 3"
              checked={optionsSelected.includes('Option 3')}
              onChange={handleOptionChange}
            />
            <label htmlFor="option3">The higher the resource requirement for the items you select, the more difficult the task is for the employees.</label>
            <br />
            {wrong && <span className="wrongAnswer"> Answer: Select all options</span>}
            {submitted && <span className='answer'> Correct!</span>}
          </fieldset>
        </form>
        {!submitted && <button onClick={handleSubmit} className='button-link'>Submit</button>}
        {submitted && <Link to={'/test'} className='button-link'>Next</Link>}
      </div>
    );
  }
