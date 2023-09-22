import NotificationsHeader from "./NotificationsHeader";
import NotificationsList from "./NotificationsList";
import '../styles/notificationsPage.css';

export default function NotificationsPage() {
    return (
        <section className="notifications-page">
            <NotificationsHeader />
            <NotificationsList />
        </section>
    )
}