$(function(){
    //nav 이벤트
    const nav = $('.header > .header-con > nav > .gnb > li > a');
    const aniText = 'navText 1.5s alternate';
    nav.on('mouseover',function(evt){
        evt.preventDefault();
        if($(this).parent().hasClass('red')){
            $(this).parent().css({
                animation: 'navRed 1.5s alternate'
            });
            $(this).css({
                animation:aniText
            });
        }else if($(this).parent().hasClass('orange')){
            $(this).parent().css({
                animation: 'navOrg 1.5s alternate forwards'
            });
            $(this).css({
                animation:'navText 1.5s alternate forwards'
            });
        }else if($(this).parent().hasClass('yellow')){
            $(this).parent().css({
                animation: 'navYel 1.5s alternate'
            });
            $(this).css({
                animation:aniText
            });
        }else if($(this).parent().hasClass('green')){
            $(this).parent().css({
                animation: 'navGrn 1.5s alternate'
            });
            $(this).css({
                animation:aniText
            });
        }
    });

    let windowW = $(window).width();
    let windowH = $(window).height();
    const section = $('section > .section-con > ul > li');

    let $html = $("html");
    let page = 1;
    let lastPage = section.length;
    
    $html.animate({scrollTop:0},10);
    $(window).on("mousewheel", function(evt){
 
        if($html.is(":animated")) return;
     
        if(evt.originalEvent.deltaY > 0){
            if(page== lastPage) return;
            page++;
        }else if(evt.originalEvent.deltaY < 0){
            if(page == 1) return;
            page--;
        }
        let posTop = (page-1) * 720;
        $html.animate({scrollTop : posTop});

    });

    $('aside>button').on('click',function(){
        $('html,body').stop().animate({
            scrollTop:0
        },600)
    })
});