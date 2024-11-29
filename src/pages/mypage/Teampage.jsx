import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Teampage.css';
import alarm from '../../img/alarm.png';
import AlarmModal from './AlarmModal';

function Teampage() {
  const location = useLocation();
  const [team, setTeam] = useState(location.state || { title: '', members: [], schedule: [] });
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', role: '', email: '' });
  const [newSchedule, setNewSchedule] = useState({ task: '', date: '' });

  const baseURL = 'http://localhost:4000';

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseURL}/notifications`);
        const result = await response.json();

        if (result.isSuccess) {
          setNotifications(result.result.notifications || []);
        } else {
          setError('알림 데이터를 가져오는데 실패했습니다.');
        }
      } catch (error) {
        setError('네트워크 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const handleRemoveNotification = index => {
    setNotifications(prev => prev.filter((_, i) => i !== index));
  };

  const closeModal = () => {
    setShowMemberModal(false);
    setShowScheduleModal(false);
    setShowNotificationModal(false);
  };

  const handleAddMember = () => {
    if (!newMember.name || !newMember.role || !newMember.email)
      return alert('모든 필드를 입력해주세요.');

    setTeam(prevTeam => ({
      ...prevTeam,
      members: [...prevTeam.members, newMember],
    }));
    setNewMember({ name: '', role: '', email: '' });
    closeModal();
  };

  const handleAddSchedule = () => {
    if (!newSchedule.task || !newSchedule.date) return alert('모든 필드를 입력해주세요.');

    setTeam(prevTeam => ({
      ...prevTeam,
      schedule: [...prevTeam.schedule, newSchedule],
    }));
    setNewSchedule({ task: '', date: '' });
    closeModal();
  };

  if (loading) return <div className="loading">알림 데이터를 로드 중입니다...</div>;
  if (error) return <div className="error">{error}</div>;

  if (!team) {
    return <div>데이터를 불러올 수 없습니다.</div>;
  }

  return (
    <div className="teampadge-container">
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div className="teamname-title">
          <p>{team.title}</p>
          <button onClick={() => setShowNotificationModal(true)} className="teampage-add-button">
            <img src={alarm} alt="alarm" className="alarmimg" />
          </button>
        </div>
        <section className="teampage-table">
          <p>팀원</p>
          <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left' }}>
            <thead>
              <tr>
                <th>닉네임</th>
                <th>역할</th>
                <th>이메일</th>
              </tr>
            </thead>
            <tbody>
              {team.members.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                  <td>{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <button onClick={() => setShowMemberModal(true)} className="teampage-add-button">
          추가하기
        </button>

        <section className="teampage-table">
          <p>일정</p>
          <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left' }}>
            <thead>
              <tr>
                <th>일정</th>
                <th>날짜</th>
              </tr>
            </thead>
            <tbody>
              {team.schedule.map((item, index) => (
                <tr key={index}>
                  <td>{item.task}</td>
                  <td>{item.date || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <button onClick={() => setShowScheduleModal(true)} className="teampage-add-button">
          추가하기
        </button>
      </div>

      {showMemberModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>팀원 추가</p>
            <input
              type="text"
              placeholder="닉네임"
              value={newMember.name}
              onChange={e => setNewMember({ ...newMember, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="역할"
              value={newMember.role}
              onChange={e => setNewMember({ ...newMember, role: e.target.value })}
            />
            <input
              type="text"
              placeholder="이메일"
              value={newMember.email}
              onChange={e => setNewMember({ ...newMember, email: e.target.value })}
            />
            <div className="modal-buttons">
              <button onClick={handleAddMember} className="confirm-button">
                추가
              </button>
              <button onClick={closeModal} className="cancel-button">
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {showScheduleModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>일정 추가</p>
            <input
              type="text"
              placeholder="일정"
              value={newSchedule.task}
              onChange={e => setNewSchedule({ ...newSchedule, task: e.target.value })}
            />
            <input
              type="text"
              placeholder="날짜"
              value={newSchedule.date}
              onChange={e => setNewSchedule({ ...newSchedule, date: e.target.value })}
            />
            <div className="modal-buttons">
              <button onClick={handleAddSchedule} className="confirm-button">
                추가
              </button>
              <button onClick={closeModal} className="cancel-button">
                취소
              </button>
            </div>
          </div>
        </div>
      )}
      {showNotificationModal && (
        <AlarmModal
          notifications={notifications}
          onClose={() => setShowNotificationModal(false)}
          onRemoveNotification={handleRemoveNotification}
        />
      )}
    </div>
  );
}

export default Teampage;
