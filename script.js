let CS = 1;
let CSPos = (CS-1)*700;
let muted = false;
let evo = 0;
let type;

let musicVolume = $('audio#titleMusic')[0].volume;

let hp = [];
let atk = [];
let def = [];
let rec = [];

let typeHp = 1.96;
let typeAtk = 1.35;
let typeDef = 1.31;
let typeRec = 1.3;

let vargasEvo = [];
let selenaEvo = [];
let lanceEvo = [];
let ezeEvo = [];
let atroEvo = [];
let magressEvo = [];

let currentEvo = [];

$(document).ready(function(){

    $("#CSRight").on('click', function(){
        scrollR();
    });
    
    $("#CSLeft").on('click', function(){
        scrollL();
    });
    
    $("#CSLeft").on('mouseenter',function(){
        loadCS();
    });
    
    $("#CSRight").on('mouseenter',function(){
        loadCS();
    });
    
    $("#okButton").on('click', function(){
        ok();
    })
    
    $("#mute").on('click', function(){
        mute();
    });
    
    $("#intro").on('click', function(){

        loadCS();
        $("#intro").css('opacity','0');
        setTimeout(()=>{
            $("#intro").css('display','none');
        },1000);

        $(" #CSVargas > img ").css('display', 'flow');
        $(" #CSVargas > img ").css('filter', 'grayscale(0) brightness(0.9)');
        $(" #CSVargas > img ").css('scale', '1');
        
        $(" #CSVargas2 > img ").css('display', 'flow');
        $(" #CSVargas2 > img ").css('filter', 'grayscale(0) brightness(0.9)');
        $(" #CSVargas2 > img ").css('scale', '1');
    
        $(`#CSDots img:nth-child(${CS})`).css('filter','saturate(1)');
        $(`#CSDots img:nth-child(${CS})`).css('opacity','1');
        $(`#CSDots img:nth-child(${CS})`).css('scale','1');
    
        $(" #vargas7Display ").css('display', 'flow');
        $(" #vargas7Display ").animate({
            opacity: 0.1,
        },100);
    
        $('audio#titleMusic')[0].loop=true;
        $('audio#titleMusic')[0].volume = 0.5;
        $('audio#titleMusic')[0].play();

    });

})

function mute(){
    
    if(muted){

        muted = false;
        $('audio#titleMusic')[0].play();
        console.log("playing");

        if($('audio#titleMusic')[0].volume < 0.5 && $('audio#titleMusic')[0].volume > 0){
            $('#mute>img').attr('src',"img/sound-silent.svg");
        }

        if($('audio#titleMusic')[0].volume < 0.1){
            $('#mute>img').attr('src',"img/sound-0.svg");
        }

        if($('audio#titleMusic')[0].volume >= 0.5){
            $('#mute>img').attr('src',"img/sound-loud.svg");
        }

    }else{

        muted = true;
        $('audio#titleMusic')[0].pause();
        console.log("not playing");
        $('#mute>img').attr('src',"img/sound-off.svg");

    };

}

$("#volSlider").on('input', function(){

    $('audio#titleMusic')[0].volume = ($("#volSlider").val()/100);

    console.log($('audio#titleMusic')[0].volume);

    if($('audio#titleMusic')[0].volume < 0.5 && $('audio#titleMusic')[0].volume > 0){
        $('#mute>img').attr('src',"img/sound-silent.svg");
    }

    if($('audio#titleMusic')[0].volume < 0.1){
        $('#mute>img').attr('src',"img/sound-0.svg");
    }

    if($('audio#titleMusic')[0].volume >= 0.5){
        $('#mute>img').attr('src',"img/sound-loud.svg");
    }

})

function scrollR(){

    CS++;
    CSPos = (CS-1)*700;
    if(CS<=7){
        $("#chars").animate({
            right: "+=700",
        },500)
        console.log(CS);
    }else{
        $("#chars").animate({
            right: 0,
        },0)
        CS=2;
        $("#chars").animate({
            right: "+=700",
        },500, "swing")
        console.log(CS);
    }
    
    $(`#CSDots img:nth-child(${CS-1})`).css('filter','saturate(0)');
    $(`#CSDots img:nth-child(${CS-1})`).css('opacity','0.5');
    $(`#CSDots img:nth-child(${CS-1})`).css('scale','0.9');

    $(`#chars div:nth-child(${CS}) img` ).css('filter', 'grayscale(0) brightness(0.9)');
    $(`#chars div:nth-child(${CS}) img` ).css('scale', '1');

    $(`#chars div:nth-child(${CS-1}) img` ).css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
    $(`#chars div:nth-child(${CS-1}) img` ).css('scale', '0.8');
    $(`#omniDisplay img:nth-child(${CS-1})` ).css('opacity', '0');

    switch(CS){

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            $(`#omniDisplay img:nth-child(${CS})` ).css('opacity', '0.1');

            $(`#CSDots img:nth-child(${CS})`).css('opacity','1');
            $(`#CSDots img:nth-child(${CS})`).css('scale','1');
            $(`#CSDots img:nth-child(${CS})`).css('filter','saturate(1)');
            break;
        case 7:
            $(`#chars div:nth-child(${1}) img` ).css('filter', 'grayscale(0) brightness(0.9)');
            $(`#chars div:nth-child(${1}) img` ).css('scale', '1');
            $(`#omniDisplay img:nth-child(${1})` ).css('opacity', '0.1');
        
            $(`#CSDots img:nth-child(${1})`).css('opacity','1');
            $(`#CSDots img:nth-child(${1})`).css('scale','1');
            $(`#CSDots img:nth-child(${1})`).css('filter','saturate(1)');
            break;
    }

    switch(CS){
        case 2:
            $("#backdrop").css('background-color', 'var(--blue)');
            break;
        case 3:
            $("#backdrop").css('background-color', 'var(--green)');
            break;
        case 4:
            $("#backdrop").css('background-color', 'var(--yellow)');
            break;
        case 5:
            $("#backdrop").css('background-color', 'var(--beige)');
            break;
        case 6:
            $("#backdrop").css('background-color', 'var(--purple)');
            break;
        case 7:
            $("#backdrop").css('background-color', 'var(--red)');
            break;
    }

}

function scrollL(){

    CS--;
    CSPos = (CS-1)*700;
    if(CS>0){
        $("#chars").animate({
            right: "-=700",
        },500, "swing")
        console.log(CS);
    }else{
        $("#chars").animate({
            right: "4200px",
        },0)
        CS=6;
        $("#chars").animate({
            right: "-=700",
        },500, "swing")
        console.log("awooga");
        console.log(CS);
    }

    $(`#CSDots img:nth-child(${CS})`).css('filter','saturate(1)');
    $(`#CSDots img:nth-child(${CS})`).css('opacity','1');
    $(`#CSDots img:nth-child(${CS})`).css('scale','1');

    $(`#chars div:nth-child(${CS}) img` ).css('filter', 'grayscale(0) brightness(0.9)');
    $(`#chars div:nth-child(${CS}) img` ).css('scale', '1');
    $(`#omniDisplay img:nth-child(${CS})` ).css('opacity', '0.1');

    $(`#chars div:nth-child(${CS+1}) img` ).css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
    $(`#chars div:nth-child(${CS+1}) img` ).css('scale', '0.8');


    switch(CS){
        case 1:
            $(`#chars div:nth-child(${7}) img` ).css('filter', 'grayscale(0) brightness(0.9)');
            $(`#chars div:nth-child(${7}) img` ).css('scale', '1');
            $(`#omniDisplay img:nth-child(${7})` ).css('opacity', '0.1');        
        case 2:
        case 3:
        case 4:
        case 5:
            $(`#omniDisplay img:nth-child(${CS+1})` ).css('opacity', '0');
            $(`#CSDots img:nth-child(${CS+1})`).css('opacity','0.5');
            $(`#CSDots img:nth-child(${CS+1})`).css('scale','0.9');
            $(`#CSDots img:nth-child(${CS+1})`).css('filter','saturate(0)');
            break;
        
        case 6:
            $(`#omniDisplay img:nth-child(${1})` ).css('opacity', '0');
            $(`#CSDots img:nth-child(${1})`).css('opacity','0.5');
            $(`#CSDots img:nth-child(${1})`).css('scale','0.9');
            $(`#CSDots img:nth-child(${1})`).css('filter','saturate(0)');
            break;
    }

    switch(CS){
        case 1:
            $("#backdrop").css('background-color', 'var(--red)');
            break;
        case 2:
            $("#backdrop").css('background-color', 'var(--blue)');
            break;
        case 3:
            $("#backdrop").css('background-color', 'var(--green)');
            break;
        case 4:
            $("#backdrop").css('background-color', 'var(--yellow)');
            break;
        case 5:
            $("#backdrop").css('background-color', 'var(--beige)');
            break;
        case 6:
            $("#backdrop").css('background-color', 'var(--purple)');
            break;
    }

}

function ok(){

    evo = Math.trunc(Math.random()*7);
    type = Math.trunc(Math.random()*12);

    switch(type){
        case 1,2:
            break;
        case 3,4:
            typeHp = 2.04;
            break;
        case 5,6:
            typeAtk = 1.4;
            break;
        case 7,8:
            typeDef = 1.375;
            typeRec = 1.26;
            break;
        case 9,10:
            typeDef = 1.28;
            typeRec = 1.37;
            break;
        case 11:
            typeHp = 2.1;
            typeAtk = 1.4;
            typeDef = 1.36;
            typeRec = 1.37;
            break;
        default:
            break;

    }

    console.log(evo + " " + type);
    $("#omniDisplay").css('display', 'none');
    $("#CSContainer").css('display', 'none');
    $("#sillycard").css('display', 'grid'); 
    $("#titleMusic").attr('src','sound/bf005_worldmap.mp3');
    $('audio#titleMusic')[0].play();

    switch(CS){
        case 1:
            $('#pixelGif').css('background-image', 'url(img/map/cave.jpg)')
            break;
        case 2:
            $('#pixelGif').css('background-image', 'url(img/map/beach.jpg)')
            break;
        case 3:
            $('#pixelGif').css('background-image', 'url(img/map/plains.jpg)')
            break;
        case 4:
            $('#pixelGif').css('background-image', 'url(img/map/fields.jpg)')
            break;
        case 5:
            $('#pixelGif').css('background-image', 'url(img/map/shrine.jpg)')
            break;
        case 6:
            $('#pixelGif').css('background-image', 'url(img/map/halls.jpg)')
            break;
        case 7:
            $('#pixelGif').css('background-image', 'url(img/map/cave.jpg)')
            break;
        default:
            $('#pixelGif').css('background-image', 'url(img/map/plains.jpg)')
            break;
    }
}

function loadCS(){

    $(" #CSContainer").css('display', 'flex');
    $(" #omniDisplay").css('display', 'flow');
    $(" #omniDisplay img ").css('display', 'flow');
    $(" #chars img ").css('display', 'flow');

}

console.log(":3");