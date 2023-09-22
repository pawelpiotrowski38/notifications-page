import NotificationsHeader from "./NotificationsHeader";
import NotificationsList from "./NotificationsList";
import '../styles/notificationsPage.css';
import { useState } from "react";

const notificationsArray = [
    {
        id: 1,
        type: 'reaction',
        username: 'Mark Webber',
        avatar: 'avatar-mark-webber.webp',
        time: '1m ago',
        read: false,
        extName: 'My first tournament today!',
        picture: null,
        message: null,
    },
    {
        id: 2,
        type: 'follow',
        username: 'Angela Gray',
        avatar: 'avatar-angela-gray.webp',
        time: '5m ago',
        read: false,
        extName: null,
        picture: null,
        message: null,
    },
    {
        id: 3,
        type: 'groupJoin',
        username: 'Jacob Thompson',
        avatar: 'avatar-jacob-thompson.webp',
        time: '1 day ago',
        read: false,
        extName: 'Chess Club',
        picture: null,
        message: null,
    },
    {
        id: 4,
        type: 'message',
        username: 'Rizky Hasanuddin',
        avatar: 'avatar-rizky-hasanuddin.webp',
        time: '5 days ago',
        read: true,
        extName: null,
        picture: null,
        message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
    },
    {
        id: 5,
        type: 'comment',
        username: 'Kimberly Smith',
        avatar: 'avatar-kimberly-smith.webp',
        time: '1 week ago',
        read: true,
        extName: null,
        picture: 'image-chess.webp',
        message: null,
    },
    {
        id: 6,
        type: 'reaction',
        username: 'Nathan Peterson',
        avatar: 'avatar-nathan-peterson.webp',
        time: '2 weeks ago',
        read: true,
        extName: '5 end-game strategies to increase your win rate',
        picture: null,
        message: null,
    },
    {
        id: 7,
        type: 'groupLeave',
        username: 'Anna Kim',
        avatar: 'avatar-anna-kim.webp',
        time: '2 weeks ago',
        read: true,
        extName: 'Chess Club',
        picture: null,
        message: null,
    }
]

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState(notificationsArray);
    const notificationsUnread = notifications.reduce((acc, notification) => {
        if (!notification.read) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);

    return (
        <section className="notifications-page">
            <NotificationsHeader
                notificationsUnread={notificationsUnread}
                setNotifications={setNotifications}
            />
            <NotificationsList
                notifications={notifications}
                setNotifications={setNotifications}
            />
        </section>
    )
}