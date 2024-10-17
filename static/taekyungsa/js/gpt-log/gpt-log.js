const chatLogs = document.querySelectorAll('.chat-log');
const modalChatLog = document.querySelector('.modal-chat-log');
const modalChatLogCloseButton = modalChatLog.querySelector('.close-button');

// 대화 기록 모달 열기 함수
function openModalChatLog() {
  modalChatLog.style.display = 'flex';
}

// 대화 기록 모달 닫기 함수
function closeModalChatLog() {
  modalChatLog.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  // 대화 기록 모달 열기
  chatLogs.forEach((chatLog) => {
    chatLog.addEventListener('click', openModalChatLog);
  });

  // 대화 기록 모달 닫기
  modalChatLogCloseButton.addEventListener('click', closeModalChatLog);
});
