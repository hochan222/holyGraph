var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var position_LT_x = -50, position_LT_y = -50,
    position_x = 0, position_y = 0,
    location_x = 0, location_y = 0;

var BOARD_WIDTH = 550, BOARD_HEIGHT = 550,
    RECT_WIDTH = 50, RECT_HEIGHT = 50,
    MIDDLE_X = Math.floor(BOARD_WIDTH/(RECT_WIDTH*2)),
    MIDDLE_Y = Math.floor(BOARD_HEIGHT/(RECT_HEIGHT*2));


var data = {}

function save(x,y,state) {
    data[x+','+y] = state;
}
function find(x,y) {
    return data[x+','+y];
}
// visual_tile : 9*9, full_tile : 11*11
var draw = function () {
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
    for (var i = 0; i<BOARD_WIDTH/RECT_WIDTH; i++){
        for (var n = 0; n<BOARD_HEIGHT/RECT_HEIGHT; n++){
            save(i-MIDDLE_X,n-MIDDLE_Y,1); 
            ctx.beginPath();
            ctx.rect(n*50+position_x-(50*(MIDDLE_X-4)) , i*50+position_y-(50*(MIDDLE_Y-4)) , 50, 50);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.font = "12px Verdana";
            ctx.textAlign = "center";
            ctx.fillStyle = "blue";
            ctx.fillText('('+(n-MIDDLE_X+location_x)+','+(i-MIDDLE_Y+location_y)+')', n*50+position_x-25-(50*(MIDDLE_X-5)), i*50+position_y-25-(50*(MIDDLE_Y-5)));
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'black';
            ctx.stroke(); 
            ctx.closePath();
        }
    }
}

/*var draw2 = function() {
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
    for (var i = 0; i<11; i++){
        for (var n = 0; n<11; n++){
            ctx.beginPath();
            ctx.rext(50,50)
        }
    }
}*/

window.onload = function() {
    draw();
    window.addEventListener("keydown",keyDownHandler,false);
}

function keyDownHandler(event) {
    var keyCode = event.which || event.keyCode;
 
    if(keyCode === 68) {
    //right
        position_x -= 10;
        position_LT_x -= 10;
        console_location();
        draw();
    } else if (keyCode === 65) {
    //left
        position_x += 10;
        position_LT_x += 10;
        console_location();
        draw();
    } else if (keyCode === 87) {
    // up
        position_y += 10;
        position_LT_y += 10;
        console_location();
        draw();
    } else if (keyCode === 83) {
    //down
        position_y -= 10;
        position_LT_y -= 10;
        console_location();
        draw();
    } 
};
function load() {
    if(position_LT_x === -100) {
        position_LT_x = -50;
        if(find(location_x+6,location_y) === undefined){
            for(var i=location_y-5; i<location_y+6;i++) {
                    save(location_x+6,i,1);
            }
            location_x++;
        } else if (find(location_x+6,location_y) !== undefined){
            location_x++;
        }
        position_x = 0;
    } else if(position_LT_x === 0){
        position_LT_x = -50;
        console.log(location_x+' '+location_y);
        if(find(location_x-6,location_y) === undefined) {
            console.log('no');
            for(var i=location_y-5; i<location_y+6;i++) {
                save(location_x-6,i,1);
            }
            location_x--;
        } else if(find(location_x-6,location_y) !== undefined) {
            console.log('yes');
            location_x--;
        }
        position_x = 0;
    } else if(position_LT_y === -100){
        position_LT_y = -50;
        if(find(location_x,location_y+6) === undefined){
            for(var i=location_x-5; i<location_x+6; i++) {
                save(i,location_y+6,1);
            }
            location_y++;
        } else if(find(location_x,location_y+6) !== undefined){
            location_y++;
        }
        position_y = 0;
    } else if(position_LT_y === 0){
        position_LT_y = -50;
        if(find(location_x,location_y-6) === undefined){
            for(var i=location_x-5; i<location_x+6; i++) {
                save(i,location_y-6,1);
            }
            location_y--;
        } else if(find(location_x,location_y-6) !== undefined){
            location_y--;
        }
        position_y = 0;
    }
}
function console_location() {
    if(position_LT_x % 50 === 0 || position_LT_y % 50 === 0) {
        //console.log(position_x+':'+position_y +' '+location_x+':'+location_y);
        console.log(position_LT_x+' '+position_LT_y);
    }
    load();
}