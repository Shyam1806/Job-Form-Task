import './App.css';
import "../src/input.css";
import React from 'react';
import Stepformone from './components/stepformone';
import Stepformtwo from './components/stepformtwo';
import Jobposting from './components/jobposting';
function App() {
  const datas = [{
    jobtitle: "UX UI Designer",
    salary: "INR (₹) 30,000 - 60,000 / Month"
  },
  {
    jobtitle: "Developer",
    salary: "INR (₹) 50,000 - 70,000 / Month"
  },
  {
    jobtitle: "Interaction Designer ",
    salary: "INR (₹) 30,000 - 50,000 / Month"
  },
  {
    jobtitle: "SEO Analyst  ",
    salary: "INR (₹) 30,000 - 50,000 / Month"
  }
  ];
  return (
    <>

      <div className="App">
        <header className="App-header">
          
         

          <Stepformone />
          <Stepformtwo />
          <div className="job-posting-overall flex flex-wrap justify-space-between">

            {datas.map(data => {
              return (
                <>
                  <Jobposting data={data} />
                </>
              )
            })}
          </div>

        </header>
        {/* <p class="text-2xl text-gray-600	font-bold underline">hello</p> */}
      </div>
    </>
  );
}

export default App;
