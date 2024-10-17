const schoolAddButton = document.getElementById('schoolAddButton');
const schoolAddModal = document.getElementById('schoolAddModal');
const schoolAddModalConfirmButton =
  schoolAddModal.querySelector('.confirm-button');
const schoolAddModalCancelButton =
  schoolAddModal.querySelector('.cancel-button');

const schoolEditButton = document.getElementById('schoolEditButton');
const schoolEditModal = document.getElementById('schoolEditModal');
const schoolEditModalConfirmButton =
  schoolEditModal.querySelector('.confirm-button');
const schoolEditModalCancelButton =
  schoolEditModal.querySelector('.cancel-button');

const schoolDeleteButton = document.getElementById('schoolDeleteButton');
const deleteConfirmModal = document.getElementById('deleteConfirmModal');
const deleteConfirmModalConfirmButton =
  deleteConfirmModal.querySelector('.confirm-button');
const deleteConfirmModalCancelButton =
  deleteConfirmModal.querySelector('.cancel-button');

// 학교 추가 모달 열기 함수
function openSchoolAddModal() {
  schoolAddModal.style.display = 'flex';
}

// 학교 추가 모달 닫기 함수
function closeSchoolAddModal() {
  schoolAddModal.style.display = 'none';
}

// 학교 수정 모달 열기 함수
function openSchoolEditModal() {
  schoolEditModal.style.display = 'flex';
}

// 학교 수정 모달 닫기 함수
function closeSchoolEditModal() {
  schoolEditModal.style.display = 'none';
}

// 삭제 하시겠습니까? 모달 열기 함수
function openDeleteConfirmModal() {
  deleteConfirmModal.style.display = 'flex';
}

// 삭제 하시겠습니까? 모달 닫기 함수
function closeDeleteConfirmModal() {
  deleteConfirmModal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  schoolAddButton.addEventListener('click', openSchoolAddModal);

  schoolAddModalConfirmButton.addEventListener('click', closeSchoolAddModal);

  schoolAddModalCancelButton.addEventListener('click', closeSchoolAddModal);

  schoolEditButton.addEventListener('click', openSchoolEditModal);

  schoolEditModalConfirmButton.addEventListener('click', closeSchoolEditModal);

  schoolEditModalCancelButton.addEventListener('click', closeSchoolEditModal);

  schoolDeleteButton.addEventListener('click', openDeleteConfirmModal);

  deleteConfirmModalConfirmButton.addEventListener(
    'click',
    closeDeleteConfirmModal
  );

  deleteConfirmModalCancelButton.addEventListener(
    'click',
    closeDeleteConfirmModal
  );
});
