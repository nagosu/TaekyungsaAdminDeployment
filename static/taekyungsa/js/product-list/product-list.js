const excelSaveButton = document.getElementById('excelSaveButton');
const modalProductDownload = document.querySelector('.modal-product-download');
const modalProductDownloadConfirmButton =
  modalProductDownload.querySelector('.confirm-button');
const modalProductDownloadCloseButton =
  modalProductDownload.querySelector('.close-button');

const excelUploadButton = document.getElementById('excelUploadButton');
const modalProductUpload = document.querySelector('.modal-product-upload');
const modalProductUploadConfirmButton =
  modalProductUpload.querySelector('.confirm-button');
const modalProductUploadCloseButton =
  modalProductUpload.querySelector('.close-button');

const productFileInput = document.getElementById('productFileInput');
const productFileInputName = document.getElementById('productFileInputName');

// 상품정보 다운로드 모달 열기 함수
function openModalProductDownload() {
  modalProductDownload.style.display = 'flex';
}

// 상품정보 다운로드 모달 닫기 함수
function closeModalProductDownload() {
  modalProductDownload.style.display = 'none';
}

// 상품정보 업로드 모달 열기 함수
function openModalProductUpload() {
  modalProductUpload.style.display = 'flex';
}

// 상품정보 업로드 모달 닫기 함수
function closeModalProductUpload() {
  modalProductUpload.style.display = 'none';
}

// 파일 이름 표시 함수
function showFileName() {
  productFileInputName.textContent = productFileInput.files[0].name;
}

document.addEventListener('DOMContentLoaded', () => {
  excelSaveButton.addEventListener('click', openModalProductDownload);

  modalProductDownloadConfirmButton.addEventListener(
    'click',
    closeModalProductDownload
  );

  modalProductDownloadCloseButton.addEventListener(
    'click',
    closeModalProductDownload
  );

  excelUploadButton.addEventListener('click', openModalProductUpload);

  modalProductUploadConfirmButton.addEventListener(
    'click',
    closeModalProductUpload
  );

  modalProductUploadCloseButton.addEventListener(
    'click',
    closeModalProductUpload
  );

  productFileInput.addEventListener('change', showFileName);
});
