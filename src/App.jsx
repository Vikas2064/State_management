import { createContext, useState } from "react";
import {Button, Card, Typography} from '@mui/material'
const CountContext=createContext()
function App(){
    const [count,setCount]=useState(0)
    return <div>
         Hello world     
    </div>
    //  <CountContext.Provider>
    //     <div style={{display:"flex", justifyContent:'center'}}>
    //       <Card>
    //         <Typography variant="h5">Welcome to the counter game</Typography>
    //         <br></br>
    //         <Buttons count={count} setCount={setCount}/>
    //         <CountComponant count={count} />
    //       </Card>
    //     </div>
    //  </CountContext.Provider>
}

function Buttons({count,setCount}){
   return (
      <div style={{display:"flex",justifyContent:"space-between"}}>
           <Increase count={count} setCount={setCount} />
           <Decrease count={count} setCount={setCount} />
      </div>
   )
} 

function Increase({count,setCount}){
    return <div>
        <Button variant={"contained"} onClick={()=>{setCount(count+1)}}>Increse Counter</Button>
    </div>
}
function Decrease({count,setCount}){
    return <div>
        <Button variant={"contained"} onClick={()=>{setCount(count-1)}}>Decrese Counter</Button>
    </div>
}

function CountComponant({count}){
    return <div>
        {count}
    </div>
}


export default App;
