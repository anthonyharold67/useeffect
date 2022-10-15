import React, { useEffect } from 'react'

const Card = ({count,setCounter}) => {
    //component unMount =>component artık çağırılmadığında return kısmı çalışır
    useEffect(()=>{
        console.log("useEffect ben çalışırım")
        return ()=>{
          console.log("yaşam döngüm sona erdiğinde sadece ben çalışırım")
          setCounter(10)//ana componentte showu false yaptığımızda countu 10 yap diyoruz
        }
      },[])

      /* useEffect(()=>{
        console.log("useEffect ben çalışırım")
      },[]) */

  return (
    <div>Card</div>
  )
}

export default Card