objects=[];
status1="";
Video="";
function preload(){
    Video=createVideo('video.mp4');
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    Video.hide();
}

function Start(){
x=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelloaded(){
    console.log("model has been loaded");
    status1=true;
    Video.loop();
    Video.speed(1);
    Video.volume(0);
}


function gotresult(error,result){
    if(error){
        console.log(error);
    }
    console.log(result);

    objects=result;
}
function draw(){
    image(Video,0,0,480,380);
    if(status1 != "")
    {
        x.detect(Video,gotresult);

        r=random(255);
        g=random(255);
        b=random(255);
    
        for(var i=0; i<objects.length;i++)
        {
        document.getElementById("status").innerHTML="Target Found!!"
        document.getElementById("objects").innerHTML="No. of targets found are:"+objects.length;
        fill(r,g,b);
        noFill();
c=floor(objects[i].confidence*100);
text(objects[i].label+" "+c+"%",objects[i].x+10,objects[i].y+10);
stroke(r,g,b);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }

    }
}