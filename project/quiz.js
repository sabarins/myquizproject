var questions = [
    {
        qname : "Who invented BALLPOINT PEN?",
        a : "Biro Brothers",
        b : "Bicc Brothers",
        ans : "a"
    },
    {
        qname : "In which season do we need more fat?",
        a : "Rainy season",
        b : "Winter",
        ans : "b"
    },
    {
        qname : "Which place is the thuuga nagaram?",
        ans : "b",
        a : "Trichy",
        b : "Madurai",
    }
]
var c = 0;


function loadfirstquest()
{
    var displayquest = document.getElementById("ques").innerHTML = questions[c].qname;
    var value1 = document.getElementById("opt1").innerHTML = questions[c].a;
    var value2 = document.getElementById("opt2").innerHTML = questions[c].b;   
}
loadfirstquest();    

var score = 0;
function disans()
{
    
    //it will disabled the unchecked value if one checked in radio button

    var getans;
    var type = document.querySelectorAll('.optio');
    type.forEach(ans=> {
        if(ans.checked)
        {
            getans = ans.id;
        }
        else
        {
            getunchecked = ans.id;
            document.getElementById(getunchecked).disabled = true;
        }

    })

   
    if(getans===questions[c].ans)
        {
        var answer;
        if(getans=="a")
        {
            answer = questions[c].a;
        }
        else 
        {
            answer = questions[c].b;
        }
    }
    
    


        // console.log(answer);
        if(answer!=undefined && c>=0)
        {
            console.log("ss")
            document.getElementById("ansdis").style.display = "block";
           document.getElementById("answerdisplay").innerHTML = "Correct Answer : "+ answer;
        }

}
var answer;

function next()
{
     // it will enable the previous button after 0th element.
     console.log(answer);

     if(c>=0)
    {
        var ch = document.getElementById("prev").disabled = false;
        console.log(ch);
        console.log(c);
        document.getElementById("prev").style.backgroundColor = "rgb(37, 177, 37)";
    }
    document.getElementById("ansdis").style.display = "none";
    // get id from all the input radio buttons for to check whether ans is correct.  
    var getans, getunchecked;
    var type = document.querySelectorAll('.optio');
    type.forEach(ans=> {
        if(ans.checked)
        {
            getans = ans.id;
        }
        else
        {
            getunchecked = ans.id;
        }
       
    })

 

    // when next question appear it will release the previous unchecked value.
    document.getElementById(getunchecked).disabled = false;
    var wrong = 0;
    // if correct answer is correct it will add score 
    if(getans===questions[c].ans)
    {
        score++;    
    }
    else 
    {
        wrong++;
    }
    console.log(score);
   var totalquest = questions.length;
   var avg = score*100/totalquest;
   var median = score + totalquest ;
   console.log(median);
    // answer.forEach(ans);
    // function ans(item,index)
    // {
    //     console.log(index+item);
    // }

    c++;
   
    var g = document.getElementById("text").value;
    if(c==2)
    {
        var r = document.getElementById("next").innerHTML = "Finish Quiz";
        document.getElementById("next").style.backgroundColor = "red";
    } 
    if(c==3)
    {
        var sc = document.getElementById("score").innerText = "Your Result is : "+avg.toFixed(2) +" %";
        localStorage.setItem("text",sc);
        var medscore = document.getElementById("medscore").innerText = "Median Score is : "+median / 2 + " %";
        localStorage.setItem("medscor",medscore);
        var totalquest = questions.length;
        localStorage.setItem("no",totalquest);
        var wrongans = wrong;
        localStorage.setItem("wrongcount",wrongans);
        var correctans = score;
        localStorage.setItem("correctcount",correctans);
        var getv = g;
        localStorage.setItem("getname",getv);
        window.location = "score.html";
    }     
    var displayquest = document.getElementById("ques").innerHTML = questions[c].qname;
    var value1 = document.getElementById("opt1").innerHTML = questions[c].a;
    var value2 = document.getElementById("opt2").innerHTML = questions[c].b;    
  
    // it can be unchecked the value from previous checked value.

    document.getElementById("a").checked = false;
    document.getElementById("b").checked = false;
    console.log(c);

}





function prev()
{ 
    document.getElementById("ansdis").style.display = "none";
    if(c<=2)
    {
        var r = document.getElementById("next").innerHTML = "Next";
        document.getElementById("next").style.backgroundColor = "rgb(37, 177, 37)";
    }    
    c--;
    console.log(c);
    // document.getElementById("a").checked = false;
    // document.getElementById("b").checked = false;
    if(c==0)
    {
        var e = document.getElementById("prev").disabled = true;
        console.log(e);
        document.getElementById("prev").style.backgroundColor = "rgb(137, 228, 137)";
    }

    document.getElementById("ques").innerHTML = questions[c].qname;
    document.getElementById("opt1").innerHTML = questions[c].a;
    document.getElementById("opt2").innerHTML = questions[c].b;
}


