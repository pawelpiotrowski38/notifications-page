import Notification from "./Notification";
import '../styles/notificationsList.css';

export default function NotificationsList({ notifications, setNotifications }) {
    return (
        <ul className="notifications-list">
            {notifications.map((notification) => (
                <Notification key={notification.id} notification={notification} setNotifications={setNotifications} />
            ))}
        </ul>
    )
}