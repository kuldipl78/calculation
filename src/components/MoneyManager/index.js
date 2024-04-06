import {Component} from 'react'

import moneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class moneyManager extends Component {
  state = {balance: 0, income: 0, expenses: 0, title: ''}

  onTitleChange = title => {
    this.setState({title: title})
  }

  render() {
    const {balance, income, expenses, title} = this.state
    return (
      <div className="main-Container">
        <div className="card-Container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="description">
            Welcome back to your
            <span className="highlight-text"> Money Manager</span>{' '}
          </p>
        </div>
        <div className="amount-containere">
          <div className="balance-container">
            <div className="image-cntainer">
              <img
                alt="balance"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              />
            </div>
            <div className="balnace">
              <p className="balance-type">Your Balance</p>
              <p className="amount">
                Rs <span className="cash">{balance}</span>
              </p>
            </div>
          </div>

          <div className="income-container">
            <div className="image-cntainer">
              <img
                alt="income"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              />
            </div>
            <div className="balnace">
              <p className="balance-type">Your Income</p>
              <p className="amount">
                Rs <span className="cash">{income}</span>
              </p>
            </div>
          </div>

          <div className="expenses-container">
            <div className="image-cntainer">
              <img
                alt="expenses"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              />
            </div>
            <div className="balnace">
              <p className="balance-type">Your Expenses</p>
              <p className="amount">
                Rs <span className="cash">{expenses}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="box-container">
          <div className="transection-container">
            <moneyDetails
              value={title}
              onTitle={this.onTitleChange}
              onAmount={this.onAmountChange}
              type={this.onTypeChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default moneyManager
