import React,{useEffect,useRef} from 'react';
import {useSpring,animated} from 'react-spring';
import SectionOne from './header'
import Sectiontwo from './sectiontwo';
import Sectionthree from './sectionthree';
import SectionFour from './sectionfour';

const Metatesk = ({Boolean}) => {
  const {boolean, setboolean} = Boolean


  const container = useSpring({
		to: [{height: "400px" }],

		from: {height: "200px"  },
    config: {
      duration: 1500,
    }
	})

  const Title = useSpring({
		to: [{top: "100px" }],
		from: {top: "-300px"  },
    config: {
      duration: 1500
    }
	})

  

  return (
    <article className='metatesk-section' >
      <SectionOne />
      <Sectiontwo />
      <Sectionthree />
      <SectionFour />
    </article>
  )
}

export default Metatesk