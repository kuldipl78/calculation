import './index.css'

const moneyDetails = (props) => {
  const {onTitle, onAmount, type, value} = props

  const onChangetitle = (event) => {
    onTitle(event.target.value)
  }

  return (
    <div className="transection-contaner">
      <label htmlFor="input-title" className="label">
        TITLE
      </label>
      <input
        onChange={onChangetitle}
        value={value}
        id="input-title"
        placeholder="TITLE"
      />
    </div>
  )
}

export default moneyDetails
