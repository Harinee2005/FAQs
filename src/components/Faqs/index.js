import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="background-color">
        <div className="container">
          <h1 className="title">FAQs</h1>
          <ul className="ul-container">
            {faqsList.map(eachFaqs => (
              <FaqItem faqDetails={eachFaqs} key={eachFaqs.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
