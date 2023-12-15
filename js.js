function deleteDigit()
    {
    var inputElement = document.getElementById("text-box");
    var currentNumber = inputElement.value;
    if (currentNumber.length > 0)
    {
    var newNumber = currentNumber.slice(0, -1);
    inputElement.value = newNumber;
    }
    }

    function add()
    {
        var act=0, b=0;
        act=document.getElementById("text-box").value;
        b=act.charAt(act.length-1);
        if(b=='+' || b=='-' || b=='*' || b=='/')
        {
            document.getElementById("text-box").value=act.substring(0, act.length-1);
            document.getElementById("text-box").value+="+";
        }
        else{
            document.getElementById("text-box").value+='+';
        }  
    }
    function sub()
    {
        var act=0, b=0;
        act=document.getElementById("text-box").value;
        b=act.charAt(act.length-1);
        if(b=='+' || b=='-' || b=='*' || b=='/')
        {
            document.getElementById("text-box").value=act.substring(0, act.length-1);
            document.getElementById("text-box").value+="-";
        }
        else{
            document.getElementById("text-box").value+='-';
        } 
    }
    function mul()
    {
        var act=0, b=0;
        act=document.getElementById("text-box").value;
        b=act.charAt(act.length-1);
        if(b=='+' || b=='-' || b=='*' || b=='/')
        {
            document.getElementById("text-box").value=act.substring(0, act.length-1);
            document.getElementById("text-box").value+="*";
        }
        else{
            document.getElementById("text-box").value+='*';
        }
    }
    function di()
    {
        var act=0, b=0;
        act=document.getElementById("text-box").value;
        b=act.charAt(act.length-1);
        if(b=='+' || b=='-' || b=='*' || b=='/')
        {
            document.getElementById("text-box").value=act.substring(0, act.length-1);
            document.getElementById("text-box").value+="/";
        }
        else{
            document.getElementById("text-box").value+='/';
        }
    }
    function mod()
    {
        var act=0, b=0;
        act=document.getElementById("text-box").value;
        b=act.charAt(act.length-1);
        if(b=='+' || b=='-' || b=='*' || b=='/')
        {
            document.getElementById("text-box").value=act.substring(0, act.length-1);
            document.getElementById("text-box").value+="%";
        }
        else{
            document.getElementById("text-box").value+='%';
        }
    }