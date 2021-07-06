import React, { useState } from "react"
import { ButtonSmall } from "../buttons"
import { useForm, ValidationError } from "@formspree/react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"

import { fab } from "@fortawesome/free-brands-svg-icons"

import styles from "./Feedback.module.scss"
import { Link } from "gatsby"

library.add(fab)

const socialNetwork = [
  {
    name: "instagram",
    iconName: "instagram",
    url: "https://www.instagram.com/bpm_claud_minsk/",
  },
  {
    name: "telegram",
    iconName: "telegram-plane",
    url: "https://telegram.me/375293244000",
  },
  {
    name: "behance",
    iconName: "behance",
    url: "https://www.behance.net/bpm-cloud",
  },
  {
    name: "whatsapp",
    iconName: "whatsapp",
    url: "https://wa.me/375293244000",
  },
  {
    name: "odnoklassniki",
    iconName: "odnoklassniki",
    url: "https://ok.ru/group/58919185809484",
  },
  {
    name: "viber",
    iconName: "viber",
    url: "viber://chat?number=%2B375293244000",
  },
  {
    name: "facebook",
    iconName: "facebook-f",
    url: "https://www.facebook.com/BPM-CLAUD-104959811504920",
  },
  {
    name: "vk",
    iconName: "vk",
    url: "https://vk.com/bpm_cloud",
  },
]

const templateText =
  "Сегодняшний мир предполагает обилие каналов общения. Классический визит в офис для заказа услуги перестает быть актуальным. Идем в ногу со временем. Связаться с нами можно не только по телефону, но и посредством мессенджеров. Выберите тот формат, который в наибольшей степени приемлем в конкретной ситуации.\n\n Сказано достаточно. Пора наполнить слова настоящим смыслом, а это возможно только с Вашей помощью. Давайте покажем, чем способны помочь в конкретном случае! Для этого свяжитесь с нами и расскажите о потребностях. Digital-агентство «BPM Cloud» легко справится с поставленной задачей. Ждем возможности проявиться! "

const Feedback = ({ content }) => {
  const currentContent = content !== undefined ? content : templateText
  return (
    <div className={styles.wrapperFeedback}>
      <div className={styles.boxGreen}>
        <div className={styles.box}>
          <div className={styles.title}>Свяжитесь с нами</div>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: currentContent }}
          ></div>
          <div className={styles.icons}>
            <IconNew socialNetwork={socialNetwork} />
          </div>
        </div>
      </div>
      <div className={styles.boxFeedback}>
        <div className={styles.tableTitle}>Свяжитесь с нами</div>

        <Form />
      </div>
    </div>
  )
}

export default Feedback

const Form = () => {
  const [fileName, setFileName] = useState("Прикрепить файл")
  const [state, handleSubmit] = useForm("xvovejva")
  if (state.succeeded) {
    return (
      <div className={styles.successPage}>
        <h2>Отлично!</h2>
        <span>Мы свяжемся с Вами в ближайшее время!</span>
      </div>
    )
  }
  const handleChange = event => {
    const fileUploaded = event.target.files[0]
    setFileName(fileUploaded.name)
  }

  return (
    <form
      className={styles.inputs}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className={styles.formDescription}>
        *Обязательные поля для заполнения
      </div>

      <input
        className={styles.input}
        id="TextInput-4"
        placeholder="Имя*"
        type="text"
        required
      />
      <input
        className={styles.input}
        placeholder="Номер телефона*"
        type="text"
        name="phone"
        type="tel"
        required
      />
      <input
        className={styles.input}
        placeholder="E-mail"
        name="E-mail"
        type="email"
      />
      <input
        className={styles.input}
        placeholder="Компания"
        type="text"
        name="Компания"
      />
      <textarea
        placeholder="Опишите задачу"
        className={styles.textarea}
        name="Описание задачи"
      />
      <input
        className={styles.invisibleInput}
        type="file"
        name="file"
        id="fileInput"
        onChange={handleChange}
      />
      <label className={styles.addFile} htmlFor="fileInput">
        <svg width="29" height="32" viewBox="0 0 29 32">
          <path
            id={styles.skrepka}
            d="M5.24477 21.7157C4.95906 21.4305 4.73235 21.0917 4.5776 20.7188C4.42284 20.3459 4.34307 19.9462 4.34285 19.5425L4.34828 13.3975C4.34806 12.9936 4.42745 12.5936 4.58191 12.2204C4.73638 11.8472 4.96289 11.5081 5.2485 11.2225C5.5341 10.9369 5.8732 10.7104 6.24641 10.5559C6.61962 10.4015 7.01961 10.3221 7.42352 10.3223L22.7888 10.3223C23.5984 10.3414 24.3696 10.6715 24.9422 11.2441C25.5148 11.8168 25.845 12.5879 25.864 13.3975L25.8586 16.4673C25.8588 16.8712 25.7794 17.2711 25.625 17.6443C25.4705 18.0176 25.244 18.3566 24.9584 18.6422C24.6728 18.9279 24.3337 19.1544 23.9605 19.3088C23.5873 19.4633 23.1873 19.5427 22.7834 19.5425L10.4933 19.5425C9.67771 19.5425 8.89552 19.2185 8.3188 18.6417C7.74208 18.065 7.41808 17.2829 7.41808 16.4673C7.41808 15.6517 7.74208 14.8695 8.3188 14.2928C8.89552 13.7161 9.67771 13.3921 10.4933 13.3921L20.4851 13.3975L20.5068 14.9623H10.5205C10.1127 14.9623 9.72158 15.1243 9.43322 15.4126C9.14486 15.701 8.98287 16.0921 8.98287 16.4999C8.98287 16.9077 9.14486 17.2987 9.43322 17.5871C9.72158 17.8755 10.1127 18.0375 10.5205 18.0375L22.7888 18.0049C22.9908 18.005 23.1908 17.9653 23.3774 17.888C23.564 17.8108 23.7335 17.6976 23.8763 17.5548C24.0191 17.412 24.1324 17.2424 24.2096 17.0558C24.2868 16.8692 24.3265 16.6692 24.3264 16.4673L24.321 13.3975C24.3211 13.1955 24.2814 12.9956 24.2042 12.809C24.1269 12.6224 24.0137 12.4528 23.8709 12.31C23.7281 12.1672 23.5585 12.0539 23.3719 11.9767C23.1853 11.8995 22.9853 11.8598 22.7834 11.8599L7.41808 11.8599C7.21613 11.8598 7.01613 11.8995 6.82953 11.9767C6.64293 12.0539 6.47338 12.1672 6.33057 12.31C6.18777 12.4528 6.07451 12.6224 5.99728 12.809C5.92005 12.9956 5.88035 13.1955 5.88047 13.3975L5.8859 19.5425C5.88579 19.7444 5.92548 19.9444 6.00271 20.131C6.07995 20.3176 6.1932 20.4871 6.33601 20.6299C6.47881 20.7727 6.64836 20.886 6.83496 20.9632C7.02157 21.0405 7.22156 21.0802 7.42352 21.08L20.4634 21.08L20.4688 22.6068L7.42895 22.6068C7.02414 22.6094 6.6228 22.5321 6.24797 22.3791C5.87315 22.2262 5.53222 22.0008 5.24477 21.7157Z"
            fill="#fa5c45"
          />
        </svg>
        <div className={styles.textAdd}>{fileName}</div>
      </label>
      <button
        type="submit"
        disabled={state.submitting}
        className={styles.button}
      >
        ЗАКАЗАТЬ ЗВОНОК
      </button>
    </form>
  )
}

const IconNew = ({ socialNetwork }) => {
  const socialNetworkArr = socialNetwork.map((element, index) => {
    return (
      <div className={styles.iconWrapper} key={index}>
        <a href={element.url}>
          <FontAwesomeIcon icon={["fab", `${element.iconName}`]} />
        </a>
      </div>
    )
  })

  return <div className={styles.iconAreaWrapper}>{socialNetworkArr}</div>
}
