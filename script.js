let CS = 1;
let CSPos = (CS-1)*700;
let muted = false;
let evo = 0;
let type;

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

    $(" #CSVargas > img ").css('display', 'flow');
    $(" #CSVargas > img ").css('filter', 'grayscale(0) brightness(0.9)');
    $(" #CSVargas > img ").css('scale', '1');
    $(" #CSVargas2 > img ").css('display', 'flow');
    $(" #CSVargas2 > img ").css('filter', 'grayscale(0) brightness(0.9)');
    $(" #CSVargas2 > img ").css('scale', '1');

    $(" #vargas7Display ").css('display', 'flow');
    $(" #vargas7Display ").animate({
        opacity: 0.1,
    },100);

    $('audio#titleMusic')[0].loop=true;
    $('audio#titleMusic')[0].volume = 0.5;
    let musicVolume = $('audio#titleMusic')[0].volume;

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
    
        if($('audio#titleMusic')[0].volume > 0.5){
            $('#mute>img').attr('src',"img/sound-loud.svg");
        }
        
    }else{

        muted = true;
        $('audio#titleMusic')[0].pause();
        console.log("not playing");
        $('#mute>img').attr('src',"img/sound-off.svg");

    };
}

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

    switch(CS){
        case 2:
            $(" #CSSelena > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSSelena > img ").css('scale', '1');
            $(" #selena7Display ").css('opacity', '0.1');
    
            $(" #CSVargas > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSVargas > img ").css('scale', '0.8');
            $(" #vargas7Display ").css('opacity', '0');
    
            $(" #CSVargas2 > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSVargas2 > img ").css('scale', '0.8');

            $("#backdrop").css('background-color', 'var(--blue)');
            break;
        case 3:
            $(" #CSLance > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSLance > img ").css('scale', '1');
            $(" #lance7Display ").css('opacity', '0.1');
    
            $(" #CSSelena > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSSelena > img ").css('scale', '0.8');
            $(" #selena7Display ").css('opacity', '0');

            $("#backdrop").css('background-color', 'var(--green)');
            break;
        case 4:
            $(" #CSEze > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSEze > img ").css('scale', '1');
            $(" #eze7Display ").css('opacity', '0.1');
    
            $(" #CSLance > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSLance > img ").css('scale', '0.8');
            $(" #lance7Display ").css('opacity', '0');

            $("#backdrop").css('background-color', 'var(--yellow)');
            break;
        case 5:
            $(" #CSAtro > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSAtro > img ").css('scale', '1');
            $(" #atro7Display ").css('opacity', '0.1');
    
            $(" #CSEze > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSEze > img ").css('scale', '0.8');
            $(" #eze7Display ").css('opacity', '0');

            $("#backdrop").css('background-color', 'var(--beige)');
            break;
        case 6:
            $(" #CSMagress > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSMagress > img ").css('scale', '0.8');
            $(" #magress7Display ").css('opacity', '0.1');
    
            $(" #CSAtro > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSAtro > img ").css('scale', '0.8');
            $(" #atro7Display ").css('opacity', '0');

            $("#backdrop").css('background-color', 'var(--purple)');
            break;
        case 7:
            $(" #CSVargas2 > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSVargas2 > img ").css('scale', '1');
            $(" #vargas7Display ").css('opacity', '0.1');
    
            $(" #CSVargas > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSVargas > img ").css('scale', '1');
    
            $(" #CSMagress > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSMagress > img ").css('scale', '0.6');
            $(" #magress7Display ").css('opacity', '0');

            $("#backdrop").css('background-color', 'var(--red)');
            break;
        default:
            $(" #CSVargas2 > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSVargas2 > img ").css('scale', '1');
            $(" #vargas7Display ").css('opacity', '0.1');
    
            $(" #CSVargas > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSVargas > img ").css('scale', '1');
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

    switch(CS){
        case 1:
            $(" #CSVargas > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSVargas > img ").css('scale', '1');
            $(" #vargas7Display ").css('opacity', '0.1');
    
            $(" #CSVargas2 > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSVargas2 > img ").css('scale', '1');
    
            $(" #CSSelena > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSSelena > img ").css('scale', '0.8');
            $(" #selena7Display ").css('opacity', '0');

            $("#backdrop").css('background-color', 'var(--red)');
            break;
        case 2:
            $(" #CSSelena > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSSelena > img ").css('scale', '1');
            $(" #selena7Display ").css('opacity', '0.1');
    
            $(" #CSLance > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSLance > img ").css('scale', '0.8');
            $(" #lance7Display ").css('opacity', '0');

            $("#backdrop").css('background-color', 'var(--blue)');
            break;
        case 3:
            $(" #CSLance > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSLance > img ").css('scale', '1');
            $(" #lance7Display ").css('opacity', '0.1');
    
            $(" #CSEze > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSEze > img ").css('scale', '0.8');
            $(" #eze7Display ").css('opacity', '0');

            $("#backdrop").css('background-color', 'var(--green)');
            break;
        case 4:
            $(" #CSEze > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSEze > img ").css('scale', '1');
            $(" #eze7Display ").css('opacity', '0.1');
    
            $(" #CSAtro > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSAtro > img ").css('scale', '0.8');
            $(" #atro7Display ").css('opacity', '0');

            $("#backdrop").css('background-color', 'var(--yellow)');
            break;
        case 5:
            $(" #CSAtro > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSAtro > img ").css('scale', '1');
            $(" #atro7Display ").css('opacity', '0.1');
    
            $(" #CSMagress > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSMagress > img ").css('scale', '0.6');
            $(" #magress7Display ").css('opacity', '0');

            $("#backdrop").css('background-color', 'var(--beige)');
            break;
        case 6:
            $(" #CSMagress > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSMagress > img ").css('scale', '0.8');
            $(" #magress7Display ").css('opacity', '0.1');
    
            $(" #CSVargas2 > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSVargas2 > img ").css('scale', '0.8');
            $(" #vargas7Display ").css('opacity', '0');

            $("#backdrop").css('background-color', 'var(--purple)');
            break;
        case 7:
            $(" #CSVargas2 > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSVargas2 > img ").css('scale', '1');
            $(" #vargas7Display ").css('opacity', '0.1');
    
            $(" #CSVargas > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSVargas > img ").css('scale', '1');
    
            $(" #CSMagress > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSMagress > img ").css('scale', '0.6');

            $("#backdrop").css('background-color', 'var(--red)');
            break;
        default:
            $(" #CSVargas > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSVargas > img ").css('scale', '1');
            $(" #vargas7Display ").css('opacity', '0.1');
    
            $(" #CSVargas2 > img ").css('filter', 'grayscale(0) brightness(0.9)');
            $(" #CSVargas2 > img ").css('scale', '1');
    
            $(" #CSSelena > img ").css('filter', 'grayscale(0.5) brightness(0.8) opacity(0.3)');
            $(" #CSSelena > img ").css('scale', '0.8');
            $(" #selena7Display ").css('opacity', '0');
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

    $(" #omniDisplay img ").css('display', 'flow');
    $(" #chars img ").css('display', 'flow');

}

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
    mute()
});

$("#volSlider").on('input', function(){

    $('audio#titleMusic')[0].volume = ($("#volSlider").val()/100);

    console.log($('audio#titleMusic')[0].volume);

    if(!muted){
        if($('audio#titleMusic')[0].volume < 0.5 && $('audio#titleMusic')[0].volume > 0){
            $('#mute>img').attr('src',"img/sound-silent.svg");
        }
    
        if($('audio#titleMusic')[0].volume > 0.5){
            $('#mute>img').attr('src',"img/sound-loud.svg");
        }

        if($('audio#titleMusic')[0].volume == 0){
            $('#mute>img').attr('src',"img/sound-0.svg");
        }
    }

})