import Notification from "./Notification";
import '../styles/notificationsList.css';

export default function NotificationsList() {
    return (
        <ul className="notifications-list">
            <Notification />
            <Notification />
            <Notification />
        </ul>
    )
}