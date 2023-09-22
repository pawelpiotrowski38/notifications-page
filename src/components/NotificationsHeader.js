import '../styles/notificationsHeader.css';

export default function NotificationsHeader({ notificationsUnread, setNotification }) {


    return (
        <div className="notifications-header">
            <div className="notifications-header__info-conatiner">
                <h1 className="notifications-header__title">
                    Notifications
                </h1>
                <div className="notifications-header__number">
                    {notificationsUnread}
                </div>
            </div>
            <button className="notifications-header__button">
                Mark all as read
            </button>
        </div>
    )
}