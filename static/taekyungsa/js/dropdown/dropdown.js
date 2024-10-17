// 모든 드롭다운에 클릭 이벤트 적용
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
  const dropdownMenu = dropdown.querySelector('.dropdown-menu');

  document.addEventListener('click', function (event) {
    if (dropdown.contains(event.target)) {
      dropdown.classList.toggle('active');
      dropdownMenu.classList.toggle('active');
    } else {
      dropdown.classList.remove('active');
      dropdownMenu.classList.remove('active');
    }
  });

  // 드롭다운 메뉴의 항목을 클릭하면 선택한 항목을 표시하고 문제 유형을 저장
  dropdownMenu.querySelectorAll('div').forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.stopPropagation();
      dropdown.querySelector('.selected').childNodes[0].nodeValue =
        this.textContent;

      // 선택된 주문 상태에 따라 border 색상 설정
      setDropdownBorder(dropdown, this.textContent);

      dropdown.classList.remove('active');
      dropdownMenu.classList.remove('active');
    });
  });
});

// 상태에 따른 border 색상을 설정하는 함수
function setDropdownBorder(dropdown, status) {
  if (status === '배송완료') {
    dropdown.style.border = '2px solid blue';
  } else if (status === '주문취소' || status === '취소완료') {
    dropdown.style.border = '2px solid red';
  } else {
    dropdown.style.border = '1px solid #000'; // 기본값
  }
}
