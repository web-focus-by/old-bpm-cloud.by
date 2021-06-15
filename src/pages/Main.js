import React from "react"
import AboutUs from "../components/main/AboutUs"
import Articles from "../components/main/Articles"
import Feedback from "../components/main/Feedback"
import Form from "../components/main/Form"
import KeysBoxs from "../components/main/KeysBoxs"
import NothingPersonal from "../components/main/NothingPersonal"
import OfferService from "../components/main/OfferService"
import Quality from "../components/main/Quality"
import Reviews from "../components/main/Reviews"
import SliderTeam from "../components/main/SliderTeam"
import Сontact from "../components/main/Сontact"
import ComponentName from "../components/main/getCases"

import styles from "./Main.module.scss"

const Main = () => {
  return (
    <div className={styles.wrapperMain}>
      <KeysBoxs />
      <OfferService />
      <AboutUs />
      <Quality />
      <SliderTeam />
      <Form />
      <NothingPersonal />
      <Сontact />
      <Reviews />
      <Articles />
    </div>
  )
}

// export const query = graphql`
//   query MyQuery {
//     allWordpressPage {
//       nodes {
//         title
//         content
//         id
//       }
//     }
//   }
// `

export default Main
