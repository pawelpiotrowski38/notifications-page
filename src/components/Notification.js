import '../styles/notification.css';

export default function Notification({ notification, setNotifications }) {
    const isRead = notification.read;
    const notificationType = notification.type;

    const handleRead = function(id) {
        setNotifications((prevNotifications) => (
            prevNotifications.map((notification) => (
                notification.id === id ? {...notification, read: true} : notification
            ))
        ))
    }

    return (
        <li className={`notification ${isRead ? '' : 'notification--unread'}`} onClick={() => handleRead(notification.id)}>
            <div className='notification__avatar-container'>
                <img className='notification__image' src={`/images/${notification.avatar}`} alt='avt' />
            </div>
            <div className='notification__info-container'>
                <p className='notification__content'>
                    <span className='notification__username'>{notification.username}</span> 
                    {notificationType === 'reaction' && (
                        'reacted to your recent post' 
                    )}
                    {(notificationType === 'groupJoin' || notificationType === 'groupLeave') && (
                        notificationType === 'groupJoin' ? 'has joined your group' : 'left the group'
                    )}
                    {notificationType === 'message' && (
                        'sent you a private message'
                    )}
                    {notificationType === 'comment' && (
                        'commented on your picture'
                    )}
                    {notificationType === 'follow' && (
                        'followed you'
                    )}
                    {notification.postName && (
                        <strong className='notification__post-name'>{notification.postName}</strong>
                    )}
                    {notification.groupName && (
                        <strong className='notification__group-name'>{notification.groupName}</strong>
                    )}
                    {!notification.read && (
                        <span className='notification__unread'></span>
                    )}
                </p>
                <p className='notification__time'>
                    {notification.time}
                </p>
                {notification.message && (
                    <div className='notification__message'>
                        {notification.message}
                    </div>
                )}
            </div>
            {notification.picture && (
                <div className='notification__picture-container'>
                    <img className='notification__image' src={`/images/${notification.picture}`} alt='commented-img' />
                </div>
            )}
        </li>
    )
}