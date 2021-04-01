import React, { useState } from "react"
import VK from 'vk-openapi'
import style from'./addCommentArea.module.scss'
import classnames from 'classnames'
import { images } from "../../images"
import {Link} from 'gatsby'


const AddCommentArea =({post}) => {
  const [isLogin, setLogin] = useState(false)
  const [comment, changeComment] = useState('')
  const [userData, setUserData] = useState({
    firstName:'',
    lastName:'',
    imgUrl:'',
    socialNetwork:'',
  })
  console.log(comment)
  const loginIcons = [
    {
      name: 'vk',
      imgSrc: images.vk,
      url: ``,
      target: '_blank',
      id:'7807660',
      securityKey: 'EreTN84q1gqwrZI2Z2CH',
    },
    {
      name: 'fb',
      imgSrc: images.fb,
      url: ``,
      target: '_blank',
    },{
      name: 'ok',
      imgSrc: images.ok,
      url: ``,
      target: '_blank',
    }
  ]

  /*eslint-disable */
  VK.init({
    apiId: 7807660
  });

  
  async function authorization(name){
    console.log(name)
    if(name == 'vk'){
      
    VK.Auth.login(function(response) {
      if (response.session) {
        console.log("Пользователь успешно авторизовался")
        VK.Api.call('users.get', {user_ids: response.session.user.id,  fields: 'crop_photo', v:"5.73"}, function(r) {
          if(r.response) {
            console.log(r)
            console.log(r.response)
            setUserData({
              firstName:r.response[0].first_name,
              lastName:r.response[0].last_name,
              imgUrl:r.response[0].crop_photo.photo.photo_604,
              socialNetwork:'vk',
            })
            setLogin(true)
          }
        });
        if (response.settings) {
          /* Выбранные настройки доступа пользователя, если они были запрошены */
          console.log("Выбранные настройки доступа пользователя, если они были запрошены")
        }
      } else {
        /* Пользователь нажал кнопку Отмена в окне авторизации */
        console.log("Пользователь нажал кнопку Отмена в окне авторизации")
      }
    });
    }else if(name == 'fb'){
      window.fbAsyncInit = function() {
        FB.init({
          appId            : 484774379541257,
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v10.0'
        });
      };

      FB.login(function(response) {
        if (response.authResponse) {
         console.log('Welcome!  Fetching your information.... ');
         FB.api('/me', function(response) {
           console.log('Good to see you, ' + response.name + '.');
         });
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
    });


    }
  }
/*eslint-enable */
  const socialLInkArea = loginIcons.map(item =>{
    return(
      <div key={item.name} className={style.socialLinItemWrapper} onClick={() => authorization(item.name)}><img src={item.imgSrc}></img></div>
    )
  })

  const loginSocialNetwork = (socialNetwork)=>{
    const socialIconUrl = socialNetwork == 'vk'?images.vk_is_login:socialNetwork == 'fb'?images.fb:socialNetwork == 'ok'?images.ok:false;
    console.log(socialNetwork)
    console.log(socialIconUrl)
    
    return(
      <div className={classnames(style.subTitleText, style.isLogInSocialNetworkWrapper)}>Вы вошли через: <img src={socialIconUrl}></img></div>
    )
  }

  const sendComment = () =>{
    console.log({
      comment,
      userData,
    })

  }
    // <div key={item.name} className={style.socialLinItemWrapper}><a href={item.url}><img src={item.imgSrc}></img></a></div>

    // state = {
    //   firstName: "",
    //   lastName: "",
    //   comment: "",
    // }
    // handleInputChange = event => {
    //   const target = event.target
    //   const value = target.value
    //   const name = target.name
    //   const comment = target.comment
    //   this.setState({
    //     [name]: value,
    //   })
    // }
    
    // handleSubmit = event => {
    //     event.preventDefault()
    //     alert(`Welcome ${this.state.firstName} ${this.state.lastName} ${this.state.comment}!`)
    // }
      return (
        <div className={style.form}>
          <h2 className={style.title}>Добавьте комментарий</h2>
          {!isLogin &&(
            <div>
              <div className={style.subTitleText}>Выберите социальную сеть, чтобы оставить комментарий</div>
              <div className={style.socialLinkAreaWrapper}>
                {socialLInkArea}
              </div>
            </div>
          )}
          {isLogin && (<div>
            <div>
              {loginSocialNetwork(userData.socialNetwork)}
            </div>
            <div className={style.userDataWrapper}>
              <div style={{
                backgroundImage: `url(${userData.imgUrl})`
              }} className={style.userPhoto}></div>
              <span>{userData.firstName}</span>
              <span>{userData.lastName}</span>
            </div>
              <div className={style.inputFieldWrapper}>
              <textarea placeholder='Добавьте комментарий...'value={comment} onChange={(e)=> changeComment(e.target.value)}></textarea>
              <button onClick={()=> sendComment()}>отправить</button>
              </div>
          </div>)}
        </div>
        // <form onSubmit={this.handleSubmit} className={style.form}>
        //   <h2 className={style.title}>Добавьте комментарий</h2>
        //   <label>
        //     <input
        //       type="text"
        //       name="firstName"
        //       value={this.state.firstName}
        //       onChange={this.handleInputChange}
        //       placeholder="Имя"
        //       required 
        //     />
        //   </label>
        //   <label>
        //     <input
        //       type="text"
        //       name="lastName"
        //       value={this.state.lastName}
        //       onChange={this.handleInputChange}
        //       placeholder="E-mail"
        //       required
        //     />
        //   </label>
        //   <label>
        //     <textarea
        //       name="comment"
        //       value={this.state.comment}
        //       onChange={this.handleInputChange}
        //       placeholder="Добавьте комментарий..."
        //       required
        //     />
        //   </label>
        //   <button type="submit">отправить</button>
        // </form>
      )
    }
export default AddCommentArea