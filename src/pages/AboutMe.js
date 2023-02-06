import React from "react"
import Image from "./Assets/Kepin.png"

export default function AboutMe() {
  return (
    <div className="homeContainer">
      <img className="kevinImg" src={Image} alt="image kepin" />
      <div>
        <p className="aboutMeDesc">
          Hi, my name is Kevin Saputra. A friendly attitude and passionate in
          the front-end developer industry whose handsomely work in a team or
          individually and also currently looking for an internship. I am
          willing and more than motivated to learn more from experience
        </p>
      </div>
    </div>
  )
}
