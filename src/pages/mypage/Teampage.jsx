import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Teampage.css';

function Teampage() {
  const location = useLocation();
  const [team, setTeam] = useState(location.state || { title: '', members: [], schedule: [] }); // 초기값 설정

  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', role: '', email: '' });
  const [newSchedule, setNewSchedule] = useState({ task: '', date: '' });

  const closeModal = () => {
    setShowMemberModal(false);
    setShowScheduleModal(false);
  };
  const handleAddMember = () => {
    setTeam(prevTeam => ({
      ...prevTeam,
      members: [...prevTeam.members, newMember],
    }));
    setNewMember({ name: '', role: '', email: '' }); // 입력값 초기화
    closeModal();
  };

  const handleAddSchedule = () => {
    setTeam(prevTeam => ({
      ...prevTeam,
      schedule: [...prevTeam.schedule, newSchedule],
    }));
    setNewSchedule({ task: '', date: '' }); // 입력값 초기화
    closeModal();
  };

  if (!team) {
    return <div>데이터를 불러올 수 없습니다.</div>;
  }

  return (
    <div className="teampadge-container">
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div className="teamname-title">
          <p>{team.title}</p>
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
    </div>
  );
}

export default Teampage;
