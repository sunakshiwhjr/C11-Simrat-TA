var marks = [30,40,45,35];
//length 4
//index: 3

var sum = 0;
for(var i=0; i < marks.length; i++)
{
   console.log(marks[i]);
}

function marks_avg()
{

    for(var j=0; j< marks.length; j++)
    {
       sum = sum + marks[j]; 
    }

    console.log("Sum of the marks: " + sum);
    var avg = sum/marks.length;
    console.log("average of the marks: ",avg)
}

marks_avg();

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(150);
}