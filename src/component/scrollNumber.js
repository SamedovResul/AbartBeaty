import React,{useState} from 'react';
import CountUp from 'react-countup';
import ScrollTriger from 'react-scroll-trigger';



const ScrollNumber = () => {
  const [number, setNumber] = useState(false)
  console.log(number)
  return (
    <ScrollTriger onEnter={()=>  setNumber(true)} onExit={() => setNumber(false)} >
      <div style={{ backgroundColor:"black", height:"200px" }} >
        {
          number &&  <CountUp style={{color:"red"}} start={0} end={100} duration={5} delay={1} />
        }
      </div>
     
    </ScrollTriger>
  )
}

export default ScrollNumber