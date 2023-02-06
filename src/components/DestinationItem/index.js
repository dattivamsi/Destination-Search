// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachDestinationDetails} = props
  const {imgUrl, name} = eachDestinationDetails

  return (
    <li className="list-items">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
