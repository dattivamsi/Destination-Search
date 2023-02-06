import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinatioSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const filteredList = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="destination-heading">Destination Search</h1>
          <div className="search-box-container">
            <input
              type="search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destination-list">
            {filteredList.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                eachDestinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinatioSearch
