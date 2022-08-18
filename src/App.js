import React, {useState} from 'react'
import Bar from './components/Bar'
const App = ()=>{
  const [data, setData] = useState([
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
  ]);
  const handle = (ID)=>{
    setData((items)=>{
      return items.filter((item)=> item.id !== ID)
    })
  }
  const mappedData = data.map((item)=>{
      return (  <Bar uniqe={item.id} title={item.title} text={item.text} handleClick={handle} key={item.id}  /> )
  })
  return (
    <div>
      <h1>TaskBar</h1>
      {mappedData}
    </div>
  )
}
export default App;
