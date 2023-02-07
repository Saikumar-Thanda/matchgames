import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab} = props
  const {displayText, tabId} = tabDetails
  const clickTab = () => {
    onClickTab(tabId)
  }

  return (
    <li>
      <button onClick={clickTab} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
