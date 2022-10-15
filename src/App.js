import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Post from './components/Post';

function App() {
  // console.log("İlk ben çalışırım")
  const [count,setCount] = useState(0)
  const [name,setName] = useState("merhaba")
  const [show,setShow]= useState(true)

  /* useEffect(()=>{
    console.log("useEffect")
  }) *///her tetiklemede çalışır
  //ComponentDidMount sayfa mount oldukttan sonra 1kere çalış
  /* useEffect(()=>{
    console.log("useEffect mounted")
  },[]) */

  //update olduğunda değişkenleriş takip et 
  /* useEffect(()=>{
    console.log("count updated:",count)
  },[count]) */
  /* useEffect(()=>{
    console.log("count updated:",count)
    // setCount(count+1)//avoid sonsuz döngüye girer
    if(count === 5){
      // alert("count: 10")
      setCount(0)
    }
  },[count,name]) */
  useEffect(()=>{
    console.log("merhaba")
  },[show])

console.log(count)
  return (
    <div className="App">
      {/* {console.log("İkinci ben çalışırım")} */}
      <h1>UseEffect</h1>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>
        +
      </button>
      <button onClick={()=>setCount(count-1)}>
        -
      </button>

      <hr />
      <button onClick={()=>setName("useEffect çalışmadı")}>
        {name}
      </button>
    {/* <hr />
      {show && <Card />}
      <button onClick={()=>setShow(!show)}>change</button>   */} 
    <hr />
    {/* aynı işlemi props göndereek yaptıryoruz showu false yaptığımızda countun değerini 10 yapmak için */}
    {show && <Card count={count} setCounter={setCount} />}
    <button onClick={()=>setShow(!show)}>change</button>
    <hr />
    <hr />
    <Post/>
    </div>
  );
}

export default App;
