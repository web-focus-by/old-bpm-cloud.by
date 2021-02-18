import React from "react"
import style from'./addCommentArea.module.scss'
import {Link} from 'gatsby'

class AddCommentArea extends React.Component {
    state = {
      firstName: "",
      lastName: "",
      comment: "",
    }
    handleInputChange = event => {
      const target = event.target
      const value = target.value
      const name = target.name
      const comment = target.comment
      this.setState({
        [name]: value,
      })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        alert(`Welcome ${this.state.firstName} ${this.state.lastName} ${this.state.comment}!`)
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit} className={style.form}>
          <h2 className={style.title}>Добавьте комментарий</h2>
          <label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              placeholder="Имя"
            />
          </label>
          <label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              placeholder="E-mail"
            />
          </label>
          <label>
            <textarea
              name="comment"
              value={this.state.comment}
              onChange={this.handleInputChange}
              placeholder="Добавьте комментарий..."
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )
    }
  }
export default AddCommentArea