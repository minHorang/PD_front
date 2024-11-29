import React from 'react';
import './AlarmModal.css';

function AlarmModal({ notifications, onClose, onRemoveNotification }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>알림</p>
        {
          <ul>
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <li key={index}>
                  <div className="alram-row">
                    <div className="alarmmodal-title">{notification.title}</div>
                    <div className="alarmmodal-message">{notification.message}</div>
                    <div className="alarmmodal-user_name">{notification.user_name}</div>
                    <button onClick={() => onRemoveNotification(index)}>수락</button>
                    <button onClick={() => onRemoveNotification(index)}>거절</button>
                  </div>
                </li>
              ))
            ) : (
              <p style={{ fontSize: '10px' }}>알림이 없습니다.</p>
            )}
          </ul>
        }

        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-button">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlarmModal;
