import React, { useState, useEffect } from "react"
import style from "./addCommentArea.module.scss"
import classnames from "classnames"
import { images } from "../../images"
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"
import { client } from "../../context/ApolloContext"

import { useStaticQuery, qraphql, Link } from "gatsby"

import { gql, useMutation } from "@apollo/client"
import { faLeaf } from "@fortawesome/free-solid-svg-icons"

const ADD_COMMENT = gql`
  mutation CREATE_COMMENT(
    $commentOn: Int!
    $content: String!
    $author: String!
    $authorEmail: String!
    $authorUrl: String!
  ) {
    createComment(
      input: {
        commentOn: $commentOn
        content: $content
        author: $author
        authorEmail: $authorEmail
        authorUrl: $authorUrl
      }
    ) {
      success
    }
  }
`

const TEST_LOG_IN = gql`
  mutation LoginUser {
    createComment(
      input: {
        commentOn: 290
        content: "zxcaweghjhj"
        authorUrl: ""
        author: "qweqwczxghjhgjc"
      }
    ) {
      clientMutationId
      success
    }
  }
`

const AddCommentArea = ({ post }) => {
  const [isLogin, setLogin] = useState(false)
  const [commentIsSend, setSend] = useState(false)
  const [comment, changeComment] = useState("")
  const [disabled, setDisable] = useState(false)
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    imgUrl: "",
    socialNetwork: "",
  })
  const [addComment, { data }] = useMutation(ADD_COMMENT)
  // const [addComment, { data }] = useMutation(TEST_LOG_IN);

  const responseFacebook = response => {
    if (response) {
      setUserData({
        firstName: response.name.split(" ")[0],
        lastName: response.name.split(" ")[1],
        imgUrl: response.picture.data.url,
        socialNetwork: "fb",
      })
      setLogin(true)
    }
  }

  const loginIcons = [
    {
      name: "vk",
      imgSrc: images.vk,
      url: ``,
      target: "_blank",
      id: "7807660",
      securityKey: "EreTN84q1gqwrZI2Z2CH",
    },
    {
      name: "fb",
      imgSrc: images.fb,
      url: ``,
      target: "_blank",
    },
    {
      name: "ok",
      imgSrc: images.ok,
      url: `https://connect.ok.ru/oauth/authorize?client_id=512001003099&scope=VALUABLE_ACCESS;LONG_ACCESS_TOKEN&response_type=token&redirect_uri=https://new-bpm-cloud.netlify.app/`,
      target: "_blank",
    },
  ]
  /*eslint-disable */
  useEffect(() => {
    VK.init({
      apiId: 7807660,
    })
  }, [])

  //ОК начало
  var config = {
    app_id: 512001003099, // <-- insert APP ID here
    app_key: "CMFPEEKGDIHBABABA", // <-- insert APP PUBLIC KEY here
  }

  let requestOptions = {
    applicationSecretKey: "4fe8d242617467f4bb8312b9d14c70c5",
    applicationKey: "CMFPEEKGDIHBABABA",
    applicationId: 512001003099,
  }

  //ОК конец

  async function authorization(name) {
    if (name == "vk") {
      VK.Auth.login(function (response) {
        if (response.session) {
          console.log("Пользователь успешно авторизовался")
          VK.Api.call(
            "users.get",
            {
              user_ids: response.session.user.id,
              fields: "crop_photo",
              v: "5.73",
            },
            function (r) {
              if (r.response) {
                setUserData({
                  firstName: r.response[0].first_name,
                  lastName: r.response[0].last_name,
                  imgUrl: r.response[0].crop_photo.photo.photo_604,
                  socialNetwork: "vk",
                })
                setLogin(true)
              }
            }
          )
          if (response.settings) {
            /* Выбранные настройки доступа пользователя, если они были запрошены */
            console.log(
              "Выбранные настройки доступа пользователя, если они были запрошены"
            )
          }
        } else {
          /* Пользователь нажал кнопку Отмена в окне авторизации */
          console.log("Пользователь нажал кнопку Отмена в окне авторизации")
        }
      })
    } else if (name == "fb") {
    }
  }

  /*eslint-enable */
  const socialLInkArea = loginIcons.map(item => {
    return (
      <div
        key={item.name}
        className={style.socialLinItemWrapper}
        onClick={() => authorization(item.name)}
      >
        <img src={item.imgSrc}></img>
      </div>
    )
  })

  const loginSocialNetwork = socialNetwork => {
    const socialIconUrl =
      socialNetwork == "vk"
        ? images.vk_is_login
        : socialNetwork == "fb"
        ? images.fb
        : socialNetwork == "ok"
        ? images.ok
        : false

    return (
      <div
        className={classnames(
          style.subTitleText,
          style.isLogInSocialNetworkWrapper
        )}
      >
        Вы вошли через: <img src={socialIconUrl}></img>
      </div>
    )
  }

  const sendComment = () => {
    setDisable(true)
    console.log({
      comment,
      userData,
    })

    addComment({
      variables: {
        commentOn: post.databaseId,
        content: comment,
        author: `${userData.firstName} ${userData.lastName}`,
        authorEmail: "test@mail.ru",
        authorUrl: `userData.imgUrl`,
      },
    }).then(data => setSend(data.data.createComment.success))
    // addComment();

    //$commentOn: Number!, $content: String!, $author: String!, $authorEmail: String!, $authorUrl: String!
  }

  return (
    <div className={style.form}>
      <h2 className={style.title}>Добавьте комментарий</h2>
      {!isLogin && (
        <div>
          <div className={style.subTitleText}>
            Выберите социальную сеть, чтобы оставить комментарий
          </div>
          <div className={style.socialLinkAreaWrapper}>
            <div
              className={style.socialLinItemWrapper}
              onClick={() => authorization(loginIcons[0].name)}
            >
              <img src={loginIcons[0].imgSrc}></img>
            </div>
            <FacebookLogin
              appId="484774379541257"
              // autoLoad={true}
              fields="name,email,picture.height(480)"
              callback={responseFacebook}
              cssClass={style.myFacebookButton}
              render={renderProps => (
                <div
                  className={style.socialLinItemWrapper}
                  onClick={renderProps.onClick}
                >
                  <img src={loginIcons[1].imgSrc}></img>
                </div>
              )}
            />
            <div className={style.socialLinItemWrapper}>
              <a href={loginIcons[2].url} target="_blank">
                <img src={loginIcons[2].imgSrc}></img>
              </a>
            </div>
          </div>
        </div>
      )}
      {isLogin && !commentIsSend && (
        <div>
          <div>{loginSocialNetwork(userData.socialNetwork)}</div>
          <div className={style.userDataWrapper}>
            <div
              style={{
                backgroundImage: `url(${userData.imgUrl})`,
              }}
              className={style.userPhoto}
            ></div>
            <span>{userData.firstName}</span>
            <span>{userData.lastName}</span>
          </div>

          <div className={style.inputFieldWrapper}>
            <textarea
              placeholder="Добавьте комментарий..."
              value={comment}
              onChange={e => changeComment(e.target.value)}
            ></textarea>
            <button onClick={() => sendComment()} disabled={disabled}>
              отправить
            </button>
          </div>
        </div>
      )}
      {commentIsSend && (
        <div className={style.thxMessage}>
          Спасибо за Ваш комментарий! Вскоре он будет опубликован!
        </div>
      )}
    </div>
  )
}
export default AddCommentArea
