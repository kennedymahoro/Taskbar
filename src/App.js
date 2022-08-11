import React from 'react'
import Bar from './components/Bar'
const App = ()=>{
  const data = [
    {
      id:1,
      title:"Wake up",
      text:"Please wake up and have a good day."
    },
    {
      id:2,
      title:"Take a shower",
      text:"Take a shower, brush and clean your hair."
    },
    {
      id:3,
      title:"Cook breakfast",
      text:"Cook some good light food for yourself."
    },
  ];
  const mappedData = data.map((item)=>{
      return (  <Bar key={item.id} title={item.title} text={item.text}  /> )
  })
  return (
    <div>
      <h1>TaskBar</h1>
      {mappedData}
    </div>
  )
}
export default App;
