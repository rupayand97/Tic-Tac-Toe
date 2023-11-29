let cp="X"
let points=["","","","","","","","",""]
function play()
{
    let tag = event.target;
    if(tag.innerText != "")
    {
        alert("pleasse click another box");
        return;
    }
    tag.innerText = cp;
    assignPoint();
    cp = cp == "X"?"O":"X" ;
}

function assignPoint()
{
    let tag = event.target;
    points[tag.getAttribute("ind")]=cp;
    // console.log(points);
    let x = points.filter((v)=>{return v ==""})
    if(x.length<=4)
    {
        checkWinner();
    }
}

function checkWinner()
{
    let h1 = document.getElementById("result");
    console.log(points);
    if(points[0]==points[1] && points[1]==points[2] && points[0]!="")
    {
        h1.innerText=`player ${cp} won the game`;
    }
    else if(points[3]==points[4] && points[4]==points[5] && points[3]!="")
    {
        h1.innerText=`player ${cp} won the game`;
    }
    else if(points[6]==points[7] && points[7]==points[8] && points[6]!="")
    {
        h1.innerText=`player ${cp} won the game`;
    }
    else if(points[0]==points[3] && points[3]==points[6] && points[0]!="")
    {
        h1.innerText=`player ${cp} won the game`;
    }
    else if(points[1]==points[4] && points[4]==points[7] && points[1]!="")
    {
        h1.innerText=`player ${cp} won the game`;
    }
    else if(points[2]==points[5] && points[5]==points[8] && points[2]!="")
    {
        h1.innerText=`player ${cp} won the game`;
    }
    else if(points[0]==points[4] && points[4]==points[8] && points[0]!="") 
    {
        h1.innerText=`player ${cp} won the game`;
    }
    else if(points[2]==points[4] && points[4]==points[6] && points[2]!="")
    {
        h1.innerText=`player ${cp} won the game`;
    }

    console.log(h1);
}