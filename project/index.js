var ch = document.getElementById("check");


function startquiz()
{
    if(ch.checked==false)
    {
        document.getElementById("alert").style.display = "block";   
    }
    else
    {
        window.location="quiz.html";
        document.getElementById("ques").value = questions[0].qname;
    }
}

function alertbtn()
{
    var get = document.getElementById("alert").style.display = "none";
}




