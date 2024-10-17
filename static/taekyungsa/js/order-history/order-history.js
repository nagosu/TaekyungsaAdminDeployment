const excelSaveButton = document.getElementById('excelSaveButton');
const modalExcelSave = document.querySelector('.modal-excel-save');
const excelModalConfirmButton = document.querySelector(
  '.modal-excel-save .confirm-button'
);
const excelModalCloseButton = document.querySelector(
  '.modal-excel-save .close-button'
);

const deleteSelectedButton = document.getElementById('deleteSelectedButton');
const deleteBlankModal = document.getElementById('deleteBlankModal');
const deleteBlankModalCloseButton =
  deleteBlankModal.querySelector('.close-button');
const modalDeleteConfirm = document.querySelector('.modal-delete-confirm');
const deleteConfirmButton = modalDeleteConfirm.querySelector('.confirm-button');
const deleteCancelButton = modalDeleteConfirm.querySelector('.cancel-button');

const updateStatusAllButton = document.getElementById('updateStatusAllButton');
const updateBlankModal = document.getElementById('updateBlankModal');
const updateBlankModalCloseButton =
  updateBlankModal.querySelector('.close-button');
const updateAllModal = document.getElementById('updateAllModal');
const updateAllModalSubmitButton =
  updateAllModal.querySelector('.submit-button');

const printOrderFormButton = document.getElementById('printOrderFormButton');

const statusButtons = document.querySelectorAll(
  '.status__container .status .grid button'
);
const periodButtons = document.querySelectorAll(
  '.period .button__container button'
);

const selectAllCheckbox = document.querySelector(
  'thead input[type="checkbox"]'
);
const tbodyCheckboxes = document.querySelectorAll(
  'tbody input[type="checkbox"]'
);

// 엑셀파일저장 모달 열기 함수
function openModalExcelSave() {
  modalExcelSave.style.display = 'flex';
}

// 엑셀파일저장 모달 닫기 함수
function closeModalExcelSave() {
  modalExcelSave.style.display = 'none';
}

// 삭제할 주문을 선택하지 않았습니다. 모달 열기 함수
function openModalDeleteBlank() {
  deleteBlankModal.style.display = 'flex';
}

// 삭제할 주문을 선택하지 않았습니다. 모달 닫기 함수
function closeModalDeleteBlank() {
  deleteBlankModal.style.display = 'none';
}

// 주문상태 일괄처리 모달 열기 함수
function openModalUpdateAll() {
  updateAllModal.style.display = 'flex';
}

// 주문상태 일괄처리 모달 닫기 함수
function closeModalUpdateAll() {
  updateAllModal.style.display = 'none';
}

// 선택한 주문을 정말 삭제하시겠습니까? 모달 열기 함수
function openModalDeleteConfirm() {
  modalDeleteConfirm.style.display = 'flex';
}

// 선택한 주문을 정말 삭제하시겠습니까? 모달 닫기 함수
function closeModalDeleteConfirm() {
  modalDeleteConfirm.style.display = 'none';
}

// 변경할 주문을 선택하지 않았습니다. 모달 열기 함수
function openModalUpdateBlank() {
  updateBlankModal.style.display = 'flex';
}

// 변경할 주문을 선택하지 않았습니다. 모달 닫기 함수
function closeModalUpdateBlank() {
  updateBlankModal.style.display = 'none';
}

// 진행상태 버튼 색상 변경 함수
function changeStatusButtonColor(button) {
  statusButtons.forEach((statusButton) => {
    statusButton.classList.remove('active');
  });

  button.classList.add('active');
}

// 기간 버튼 색상 변경 함수
function changePeriodButtonColor(button) {
  periodButtons.forEach((periodButton) => {
    periodButton.classList.remove('active');
  });

  button.classList.add('active');
}

// 체크박스 선택/해제 함수
selectAllCheckbox.addEventListener('change', function () {
  tbodyCheckboxes.forEach((checkbox) => {
    checkbox.checked = this.checked;
  });
});

// 체크박스가 선택되었는지 확인하는 함수
function isAnyCheckboxSelected() {
  return Array.from(tbodyCheckboxes).some((checkbox) => checkbox.checked);
}

document.addEventListener('DOMContentLoaded', () => {
  excelSaveButton.addEventListener('click', openModalExcelSave);

  excelModalConfirmButton.addEventListener('click', closeModalExcelSave);

  excelModalCloseButton.addEventListener('click', closeModalExcelSave);

  deleteSelectedButton.addEventListener('click', () => {
    openModalDeleteBlank();
    openModalDeleteConfirm();
  });

  deleteBlankModalCloseButton.addEventListener('click', closeModalDeleteBlank);

  deleteConfirmButton.addEventListener('click', closeModalDeleteConfirm);

  deleteCancelButton.addEventListener('click', closeModalDeleteConfirm);

  updateStatusAllButton.addEventListener('click', () => {
    if (!isAnyCheckboxSelected()) {
      openModalUpdateBlank(); // 체크박스가 선택되지 않은 경우
    } else {
      openModalUpdateAll(); // 체크박스가 선택된 경우
    }
  });

  updateAllModalSubmitButton.addEventListener('click', closeModalUpdateAll);

  updateBlankModalCloseButton.addEventListener('click', closeModalUpdateBlank);

  printOrderFormButton.addEventListener('click', openModalDeleteBlank);

  statusButtons.forEach((statusButton) => {
    statusButton.addEventListener('click', () => {
      changeStatusButtonColor(statusButton);
    });
  });

  periodButtons.forEach((periodButton) => {
    periodButton.addEventListener('click', () => {
      changePeriodButtonColor(periodButton);
    });
  });
});
