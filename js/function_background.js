$(function(){

    const text = $('.tobe .cls-1');
    for(let i =0; i<text.length;i++){
        console.log(i+1+'번째 path의 총 길이'+text[i].getTotalLength())
    }

    //nav 이벤트
    const nav = $('header > .header-con > nav > .gnb > li > a');
    const aniText = 'navText 1.5s alternate';
    nav.on('mouseover',function(evt){
        evt.preventDefault();
        if($(this).parent().hasClass('red')){
            $(this).parent().css({
                animation: 'navRed 1.5s alternate forwards'
            });
            $(this).css({
                animation:'navText 1.5s alternate forwards'
            });
        }else if($(this).parent().hasClass('orange')){
            $(this).parent().css({
                animation: 'navOrg 1.5s alternate'
            });
            $(this).css({
                animation:aniText
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


    const asis = $('section > .background-con02 > .asis');
    const tobe = $('section > .background-con02 > .tobe');
    $(window).on('scroll',function(){
        const scrollTop = $(this).scrollTop();
        //svg 애니메이션 as is
        if(scrollTop>600){
            asis.find('path#a').css({
                strokeDasharray: 1540,
                animation: 'asisA 1s linear forwards',
                animationDelay: '0s'
            });
            asis.find('path#s').css({
                strokeDasharray:979,
                animation: 'asisS 0.5s linear forwards',
                animationDelay: '1s'
            });
            asis.find('path#i').css({
                strokeDasharray:407,
                animation: 'asisS 0.3s linear forwards',
                animationDelay:'1.5s'
            });
            asis.find('path#s_1_').css({
                strokeDasharray:979,
                animation: 'asisS 0.5s linear forwards',
                animationDelay: '1.7s'
            });

            tobe.find('path#t').css({
                strokeDasharray: 902,
                animation: 'tobeT 0.5s linear forwards',
                animationDelay: '4s'
            });
            tobe.find('path#o').css({
                strokeDasharray:814,
                animation: 'tobeO 0.5s linear forwards',
                animationDelay: '4.5s'
            });
            tobe.find('path#b').css({
                strokeDasharray:1420,
                animation: 'tobeB 1s linear forwards',
                animationDelay:'5s'
            });
            tobe.find('path#e').css({
                strokeDasharray:935,
                animation: 'tobeE 0.7s linear forwards',
                animationDelay: '5.2s'
            });
        }
        //내용 및 배경
        if(scrollTop>600){
            asis.find('.asis-bg').css({
                animation: 'asisBG03 1s alternate forwards'
            });
            asis.find('span:nth-child(1)').css({
                animation: 'asisBG01 1.5s alternate forwards',
                animationDelay : '1s'
            });
            asis.find('span:nth-child(2)').css({
                animation: 'asisBG02 1.5s alternate forwards' ,
                animationDelay: '2.5s'
            });
            asis.find('p').css({
                animation: 'asisText 1s alternate forwards',
                animationDelay: '3s'
            });

            tobe.find('.tobe-bg').css({
                animation: 'tobeBG03 1s alternate forwards',
                animationDelay : '3.5s'
            });
            tobe.find('span:nth-child(2)').css({
                animation: 'tobeBG02 1.5s alternate forwards' ,
                animationDelay: '4.5s'
            });
            tobe.find('span:nth-child(1)').css({
                animation: 'tobeBG01 1.5s alternate forwards',
                animationDelay : '6s'
            });
            tobe.find('p').css({
                animation: 'tobeText 1.5s alternate forwards',
                animationDelay: '6s'
            });
        }
    });

});