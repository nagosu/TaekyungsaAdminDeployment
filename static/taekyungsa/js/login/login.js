const idBlankModal = document.getElementById('idBlankModal');
const idBlankModalCloseButton = idBlankModal.querySelector('.close-button');

const passwordBlankModal = document.getElementById('passwordBlankModal');
const passwordBlankModalCloseButton =
  passwordBlankModal.querySelector('.close-button');

const idErrorModal = document.getElementById('idErrorModal');
const idErrorModalCloseButton = idErrorModal.querySelector('.close-button');

const passwordErrorModal = document.getElementById('passwordErrorModal');
const passwordErrorModalCloseButton =
  passwordErrorModal.querySelector('.close-button');

const loginId = document.getElementById('loginId');
const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');

const passwordView = document.getElementById('passwordView');

let testId = 'test';
let testPassword = 'test';

// 로그인 버튼 클릭 이벤트 핸들러
function handleLoginButtonClick() {
  if (loginId.value === '') {
    idBlankModal.style.display = 'flex';
  } else if (loginPassword.value === '') {
    passwordBlankModal.style.display = 'flex';
  } else if (loginId.value !== testId) {
    idErrorModal.style.display = 'flex';
  } else if (loginPassword.value !== testPassword) {
    passwordErrorModal.style.display = 'flex';
  }
}

// 모달 닫기 함수
function closeModal(modal) {
  modal.style.display = 'none';
}

// 비밀번호 보기 버튼 클릭 이벤트
function handlePasswordViewClick() {
  if (loginPassword.type === 'password') {
    loginPassword.type = 'text';
    passwordView.src = '../../static/taekyungsa/images/icon/svg/View_fill.svg';
    passwordView.setAttribute('draggable', 'false');
  } else {
    loginPassword.type = 'password';
    passwordView.src =
      '../../static/taekyungsa/images/icon/svg/View_hide_fill.svg';
    passwordView.setAttribute('draggable', 'false');
  }
}

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // 로그인 버튼 클릭 이벤트
  loginButton.addEventListener('click', handleLoginButtonClick);

  // 아이디 공란 모달 닫기 버튼 클릭 이벤트
  idBlankModalCloseButton.addEventListener('click', () => {
    closeModal(idBlankModal);
  });

  // 비밀번호 공란 모달 닫기 버튼 클릭 이벤트
  passwordBlankModalCloseButton.addEventListener('click', () => {
    closeModal(passwordBlankModal);
  });

  // 아이디 오류 모달 닫기 버튼 클릭 이벤트
  idErrorModalCloseButton.addEventListener('click', () => {
    closeModal(idErrorModal);
  });

  // 비밀번호 오류 모달 닫기 버튼 클릭 이벤트
  passwordErrorModalCloseButton.addEventListener('click', () => {
    closeModal(passwordErrorModal);
  });

  // 비밀번호 보기 버튼 클릭 이벤트
  passwordView.addEventListener('click', handlePasswordViewClick);
});
