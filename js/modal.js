const modalOverlay = document.getElementById('modalOverlay');
const closeModalButton = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');
const githubButton = document.getElementById('githubButton');
const siteButton = document.getElementById('siteButton');
const planningButton = document.getElementById('planningButton');

// 모든 모달 버튼들
const modalButtons = document.querySelectorAll('.project_img');

// 페이지의 스크롤 비활성화
function disableScroll() {
    document.body.style.overflow = 'hidden';  // body의 스크롤을 숨김
    document.documentElement.style.overflow = 'hidden';  // html의 스크롤도 숨김
}

// 페이지의 스크롤 활성화
function enableScroll() {
    document.body.style.overflow = 'auto';  // body의 스크롤을 다시 활성화
    document.documentElement.style.overflow = 'auto';  // html의 스크롤도 활성화
}

// 각 버튼에 클릭 이벤트 추가
modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalContentUrl = button.getAttribute('data-modal-content');
        const githubLink = button.getAttribute('data-github-link');
        const siteLink = button.getAttribute('data-site-link');
        const planningLink = button.getAttribute('data-planning-link');

        // 모달 내용 로드
        fetch(modalContentUrl)  // 외부 HTML 파일 경로
        .then(response => response.text())
        .then(html => {
            modalContent.innerHTML = html;  // 모달에 HTML 내용 삽입
            modalOverlay.style.display = 'flex';  // 모달 오버레이 표시
            modalContent.scrollTop = 0;
            disableScroll();  // 모달이 열렸을 때 페이지 스크롤 비활성화

            // 각 버튼에 링크 할당 (링크 비활성화 없이 바로 할당)
            githubButton.href = githubLink;
            siteButton.href = siteLink;
            planningButton.href = planningLink;
        })
        .catch(error => {
            console.error('모달 콘텐츠 로드 실패:', error);
        });
    });
});

// 닫기 버튼 클릭 시
function closeModal() {
    modalOverlay.style.display = 'none';  // 모달 오버레이 숨기기
    enableScroll();  // 모달 닫히면 페이지 스크롤 다시 활성화
}

// 닫기 버튼 클릭 시 닫기 이벤트 처리
closeModalButton.addEventListener('click', closeModal);

// 새로 고침 시 모달이 닫히도록 설정
window.onload = function() {
    modalOverlay.style.display = 'none';  // 새로고침 시 모달 자동으로 닫기
    enableScroll();  // 페이지 스크롤 활성화
}