import '../styles/notification.css';

export default function Notification() {
    return (
        <li className="notification">
            <div className='notification__avatar-container'>
                <img className='notification__avatar' src='/images/avatar-mark-webber.webp' alt='avt' />
            </div>
            <div className='notification__info-container'>
                <p className='notification__content'>
                    <span className='notification__username'>Mark Webber</span> 
                    reacted to your recent post 
                    <span className='notification__post-name'>My first tournament today!</span>
                    <span className='notification__unread'></span>
                </p>
                <p className='notification__time'>
                    1m ago
                </p>
            </div>
        </li>
    )
}