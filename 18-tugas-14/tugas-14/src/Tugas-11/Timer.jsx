import React, { useState, useEffect, useRef } from "react";

const style = {
  margin: "20px",
  padding: "30px 10px",
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid black",
  borderRadius: "5px"
}

export default function Timer() {
  const [time, setTime] = useState(100)
  const [showHours, setShowHours] = useState(null)
  const countdown = useRef()
  
  useEffect(() => {
    setShowHours(clock())
    time > 0 && setTimeout(() => setTime(time - 1), 1000)
    const ref = countdown.current
    return () => {
      if(time <= 1) ref.remove()
    }
  }, [time])

  const clock = () => {
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const seconds = new Date().getSeconds()
    const ampm = hours >= 12 ? "PM" : "AM";
    return `${hours}:${minutes}:${seconds} ${ampm}`
  }

  return (
    <>
      <div ref={countdown} style={ style }>
        <span><strong>sekarang jam {showHours}</strong></span>
        <span><strong>hitung mundur:{ time }</strong></span>
      </div>
    </>
  )
}