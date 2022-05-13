$(function(){
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