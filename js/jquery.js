$(function(){
    $(function () {
        $('#overlay, #waitingModal').remove(); // 로딩 화면 제거
        $('#content').show(); // 콘텐츠 표시
    });

    //toggle bttton click event
    $('.toggle_button').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.toggle_menu').fadeToggle();
    });

    // Header a태그(Nav) 클릭 이벤트
    $("header a").on('click', function(event){
        event.preventDefault(); // 기본 이벤트 제거
        var target = $(this).attr("href"); // 클릭한 a 태그의 href 값 가져오기
        $("html, body").animate({
            scrollTop: $(target).offset().top()
        }, 0); 
    });
    
    // 타이핑 효과
    var options = {
        strings: [
            "Always so easy day :)",
            "Always so iji day :)",
        ],
        typeSpeed: 40, // 타이핑 속도 (밀리초)
        backSpeed: 30, // 삭제 속도 (밀리초)
        loop: true, // 반복
    };
    var typed = new Typed('#typing_text', options);

    // 떠오르는 효과
    var $float = $(".float");

    function handleScroll(){
        $float.each(function(){
            var $float = $(this);
            var rect = $float[0].getBoundingClientRect();
            if (rect.top < $(window).height() * 0.9) {
                $float.addClass("show");
            }
        });
    }

    $(window).on("scroll", handleScroll);
    handleScroll();

    // copy 효과 (전역 함수로 선언)
    window.copyText = function(selector) {
        var text = $(selector).text().trim(); // 선택한 요소의 텍스트 가져오기

        navigator.clipboard.writeText(text).then(() => {
            alert(text+" (이)가 복사 완료되었습니다."); // 복사 성공 시 알림
        }).catch(err => {
            console.error("복사 실패:", err); // 복사 실패 시 콘솔 출력
        });
    };

    // top button
    document.getElementById("topBtn").addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({top: 0});
    });

    // home button
    document.getElementById("home").addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({top: 0});
    });

    // contact button
    document.getElementById("contact").addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo(0, document.body.scrollHeight);  // 페이지 맨 하단으로 이동
    });

});