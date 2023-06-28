import './index.css'
import {Component} from 'react'

class ActiveEventRegistrationDetails extends Component {
  renderInitial = () => (
    <div className="intitial-card">
      <p className="initial-para">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderRegister = () => (
    <div className="register-card">
      <div className="card-img">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="register-img"
        />
      </div>
      <p className="register-para">
        A live performance brings so much to your relationship with dance.
        Seeing live can often make you fall totally in love with this beautiful
        art form .
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  renderCompleted = () => (
    <div className="completed-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="completed-img"
      />
      <h2 className="completed-para">
        You have already registered for the event
      </h2>
    </div>
  )

  renderNotCompleted = () => (
    <div className="not-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="not-img"
      />
      <h3 className="not-heading">Registrations Are Closed Now!</h3>
      <p className="not-para">
        Stay tuned. We will reopen <br /> the registrations soon!
      </p>
    </div>
  )

  render() {
    const {apiId} = this.props
    switch (apiId) {
      case 'INITIAL':
        return this.renderInitial()

      case 'YET_TO_REGISTER':
        return this.renderRegister()

      case 'REGISTERED':
        return this.renderCompleted()

      case 'REGISTRATIONS_CLOSED':
        return this.renderNotCompleted()

      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
