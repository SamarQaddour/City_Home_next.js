import React from "react"
import "./About.css"
const AboutCard = (props) => {
  return (
    <>
      <div>{props.icon}</div>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </>
  )
}
export default AboutCard
