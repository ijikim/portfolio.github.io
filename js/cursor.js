$(function() {
    // 마우스 위치에 따라 커서 움직이기
    $(document).on('mousemove', function(e) {
        $('.cursor').css({
            top: e.clientY + 'px', // 커서 중앙이 마우스 위치에 오게 수정
            left: e.clientX + 'px' // 커서 중앙이 마우스 위치에 오게 수정
        });
    });

    // 마우스 클릭 시 커서 확장
    $(document).on('mousedown', function() {
        $('.cursor').addClass('expand'); // 클릭 시 커서 크기 확장 및 투명도 1로 변경
    });

    // 마우스 버튼을 놓으면 커서 크기 복원
    $(document).on('mouseup', function() {
        $('.cursor').removeClass('expand'); // 클릭을 놓으면 크기 복원 및 투명도 다시 0.5
    });
});
