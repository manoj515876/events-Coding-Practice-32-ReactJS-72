import './index.css'

const EventItem = props => {
  const {eventDetails, onEvent} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails
  const onClicked = () => {
    onEvent(registrationStatus)
  }
  return (
    <li className="list-card">
      <button type="button" className="event-button" onClick={onClicked}>
        <img src={imageUrl} alt="event" className="card-img" />
      </button>
      <p className="event-heading">{name}</p>
      <p className="event-para">{location}</p>
    </li>
  )
}

export default EventItem
