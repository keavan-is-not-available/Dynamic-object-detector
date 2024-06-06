status1 = ""
objects = []

function preload(){

}
function setup(){
  c = createCanvas(340,340)
  c.center()
   vid = createCapture(VIDEO)
   vid.hide()

   model1 = ml5.objectDetector("cocossd",modelLoaded)
}
function modelLoaded(){
    console.log(modelLoaded)
    status1 = true
    model1.detect(vid,gotResults)
}
function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        objects = results
    }
}
function draw(){
    image(vid,0,0,340,340)

    if (status1 != " ") {
        for (var i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "status:objects detected"
            document.getElementById("objects1").innerHTML = "number of objects detected are: "+objects.length
        stroke("red")
        var p= objects[i].label+" "+floor(objects[i].confidence*100)+"%"
        text(p, objects[i].x, objects[i].y)
        noFill("white")
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}