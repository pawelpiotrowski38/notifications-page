import NotificationsHeader from "./NotificationsHeader";
import NotificationsList from "./NotificationsList";

export default function NotificationsPage() {
    return (
        <section className="notifications-page">
            <NotificationsHeader />
            <NotificationsList />
        </section>
    )
}