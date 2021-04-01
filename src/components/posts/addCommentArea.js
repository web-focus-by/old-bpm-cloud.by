import React, { useState } from "react"
import style from'./addCommentArea.module.scss'
import { images } from "../../images"
import {Link} from 'gatsby'


const AddCommentArea =({post}) => {
  const [isLogin, setLogin] = useState(false)

  const loginIcons = [
    {
      name: 'vk',
      imgSrc: images.vk,
      url: `https://oauth.vk.com/authorize?client_id=7807660&display=page&redirect_uri=${document.location.href}&scope=friends&response_type=code&v=5.130`,
      target: '_blank',
      id:'7807660',
      securityKey: 'EreTN84q1gqwrZI2Z2CH',
    },
    {
      name: 'facebook',
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

  console.log(post.link) 
 
  console.log()
  if(document.location.href.includes('?code=')){
    console.log(document.location.href.split('?code='))
    authorization(document.location.href.split('?code='), loginIcons)
  }
  /*eslint-disable */
  VK.init({
    apiId: 7807660
  });

  
  async function authorization(uri, loginIcons){
    // console.log(...arguments)
    // const url = `https://oauth.vk.com/access_token?client_id=${loginIcons[0].id}&client_secret=${loginIcons[0].securityKey}&redirect_uri=${uri[0]}&code=${uri[1]}`
    // document.location.href = url;

    VK.Auth.login(function(response) {
      if (response.session) {
        console.log("Пользователь успешно авторизовался")
        if (response.settings) {
          /* Выбранные настройки доступа пользователя, если они были запрошены */
          console.log("Выбранные настройки доступа пользователя, если они были запрошены")
        }
      } else {
        /* Пользователь нажал кнопку Отмена в окне авторизации */
        console.log("Пользователь нажал кнопку Отмена в окне авторизации")
      }
    });
  }
/*eslint-enable */
  const socialLInkArea = loginIcons.map(item =>{
    return(
      <div key={item.name} className={style.socialLinItemWrapper} onClick={() => authorization()}><img src={item.imgSrc}></img></div>
    )
  })

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
          <div className={style.subTitleText}>Выберите социальную сеть, чтобы оставить комментарий</div>
          <div className={style.socialLinkAreaWrapper}>
            {socialLInkArea}
          </div>
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