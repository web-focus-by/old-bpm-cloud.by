import React from "react"
import styles from "./Animation.module.css"
import AnimationEight from "./AnimationEight"
import AnimationFive from "./AnimationFive"
import AnimationFour from "./AnimationFour"
import AnimationNine from "./AnimationNine"
import AnimationOne from "./AnimationOne"
import AnimationSeven from "./AnimationSeven"
import AnimationSix from "./AnimationSix"
import AnimationThree from "./AnimationThree"
import AnimationTwo from "./AnimationTwo"

const Animation = ({ state }) => {
  const showAnimation = key => {
    switch (key) {
      case 1:
        return <AnimationOne />
      case 2:
        return <AnimationTwo />
      case 3:
        return <AnimationThree />
      case 4:
        return <AnimationFour />
      case 5:
        return <AnimationFive />
      case 6:
        return <AnimationSix />
      case 7:
        return <AnimationSeven />
      case 8:
        return <AnimationEight />
      case 9:
        return <AnimationNine />
      default:
        return <AnimationOne />
    }
  }

  return <div className={styles.boxRed}>{showAnimation(state)}</div>
}
export default Animation
