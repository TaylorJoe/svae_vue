

var inp = document.getElementById("input");
var main = document.getElementById("login");
inp.onfocus = function(){
    if(inp.value == ""){
        main.className += "focus";
    }
}
inp.onblur = function(){
    if(inp.value == ""){
        main.className = " ";
    }
}
var inp1 = document.getElementById("input1");
var main1 = document.getElementById("login1");
inp1.onfocus = function(){
    if(inp1.value == ""){
        main1.className += "focus";
    }
}
inp1.onblur = function(){
    if(inp1.value == ""){
        main1.className = " ";
    }
}
