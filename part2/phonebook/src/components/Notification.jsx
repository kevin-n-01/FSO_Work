import './notification.modules.css'

const Notification = ({ message, messageType }) => {

    return (
        <div className={`${message ? 'message' : ''} ${messageType}`}>
            {message}
        </div>
    )
}

export default Notification