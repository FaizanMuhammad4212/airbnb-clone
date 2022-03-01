import Header from './components/Header';
import Hero from './components/Hero';
import Card from '../src/components/Card'
import data from "../src/data"

export default function App() {
  //
  
     const arr=data.map(dat=>{
          return <Card 
                   {...dat}/>
    })
  return (
    <div>
      <Header/>
      <Hero/>
      <div className='contain'>
        {arr}
      </div>
    </div> 
  );
  }


