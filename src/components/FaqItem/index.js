import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isAnsVisible: false}

  showAns = () => {
    this.setState(prevState => ({
      isAnsVisible: !prevState.isAnsVisible,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {isAnsVisible} = this.state
    const imgLink = isAnsVisible
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isAnsVisible ? 'minus' : 'plus'
    const {questionText, answerText} = faqDetails
    return (
      <li className="list-item">
        <div className="list-cont">
          <h1 className="qn-ans-text">{questionText}</h1>
          <button onClick={this.showAns} className="btn" type="button">
            <img src={imgLink} alt={altText} className="icon" />
          </button>
        </div>
        {isAnsVisible && (
          <div>
            <hr />
            <p className="qn-ans-text ans">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
