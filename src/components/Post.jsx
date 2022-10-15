import React, { useEffect, useState } from 'react'

const Post = () => {
    const [data,setData]=useState([])
    const [sayac,setSayac]=useState(0)
    const [searchVal,setSearchVal] = useState("")//search işlemlerinde boş string vermek önemli 
const getData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(json => setData(json))
  console.log("getData çalıştı")
}

// useEffect(() => {
//   getData()
// })

// getData()//sonsuz loopa giriyor

// useEffect(() => {
//   getData()
// },[])

// useEffect(() => {
//   getData()
// },[sayac])
useEffect(() => {
    if(sayac===6){
        getData()
    }
  },[sayac])
  //searchVal e göre filter yapıyoruz
  const search = data?.filter(item=> item.username.toLowerCase().includes(searchVal.toLowerCase()))



  return (
    <div>
        <h1>Todos</h1>
        {
            search?.map(item=><p key={item.id}>{item.username}</p>)
        }

        <hr />
        <button onClick={()=>setSayac(sayac+1)}>
            +
        </button>
        <h5>{sayac}</h5>
        <input type="text" onChange={(e)=>setSearchVal(e.target.value)} />
        <hr /><hr />

    </div>
  )
}

export default Post