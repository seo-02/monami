$(function(){

    const nav = $('header > .header-con > nav > .gnb > li > a');
    const aniText = 'navText 1.5s alternate forwards';

    //nav 이벤트
    nav.on('mouseover',function(evt){
        evt.preventDefault();
        if($(this).parent().hasClass('red')){
            $(this).parent().css({
                animation: 'navRed 1.5s alternate forwards'
            });
            $(this).css({
                animation:aniText
            });
        }else if($(this).parent().hasClass('orange')){
            $(this).parent().css({
                animation: 'navOrg 1.5s alternate forwards'
            });
            $(this).css({
                animation:aniText
            });
        }else if($(this).parent().hasClass('yellow')){
            $(this).parent().css({
                animation: 'navYel 1.5s alternate forwards'
            });
            $(this).css({
                animation:aniText
            });
        }else if($(this).parent().hasClass('green')){
            $(this).parent().css({
                animation: 'navGrn 1.5s alternate forwards'
            });
            $(this).css({
                animation:aniText
            });
        }
    });

    //aside 이벤트
    const aside = $('aside > ul > li > a');
    const asideLine = $('aside > .aside-line > span');
    let arrSection = [];
    let arrSLine = [];
    for(let i=0;i<aside.length;i++){
        arrSection[i] = $('section').eq(i).offset().top;
    }
    aside.on('click',function(evt){
        Idx = aside.index(this);
        $('html,body').stop().animate({
            scrollTop:arrSection[Idx]
        });
        $(this).parent().addClass('on').siblings().removeClass('on');
        asideLine.eq(Idx).addClass('on').siblings().removeClass('on');
        
    });
    $(window).on('scroll',function(){
        let scroll = $(this).scrollTop();
        for(let i=0;i<aside.length;i++){
            if(scroll>=arrSection[i]){
                aside.eq(i).parent().addClass('on').siblings().removeClass('on');
                asideLine.eq(i).addClass('on').siblings().removeClass('on');
            }else if(scroll<arrSection[0]){
                aside.parent().removeClass('on');
                asideLine.removeClass('on');
            }
        }
    });

    //perspective 이벤트
    const persCon = $('section.perspective > .pers-con > .pers-img');
    const persBtn =$('section.perspective > .persBtn');
    persBtn.on('click',function(evt){
        evt.preventDefault();
        let persScl = $('.pers-con').scrollLeft();
        if(persScl<1350){
            $('.pers-con').scrollLeft(1350);
        }else if(persScl<2750){
            $('.pers-con').scrollLeft(2750);
        }
    });
    $(persCon).parent().on('scroll',function(){
        let persScl = $('.pers-con').scrollLeft();
        if(persScl>=2750){
            persBtn.css({
                display:'none'
            });
        }else {
            persBtn.css({
                display:'block'
            });
        }
    });

    //plan 이벤트
    const plan = $('section.plan > .plan-con');
    $(window).on('scroll',function(){
        let scroll = $(this).scrollTop();
        if(scroll>1400){
            plan.find('.third').css({
                animation: 'Planthird 2s alternate forwards'
            });
            plan.find('.first').css({
                animation: 'Planfirst 2s alternate forwards'
            });
            plan.find('p').delay(2000).fadeIn();
        }else if(scroll<1400){
            plan.find('p').hide();
            plan.find('.third').css({
                animation: 'PlanthirdRV 1s alternate forwards'
            });
            plan.find('.first').css({
                animation: 'PlanfirstRV 1s alternate forwards'
            });
        }
    });
});