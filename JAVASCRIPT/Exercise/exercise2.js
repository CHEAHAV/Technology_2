
function plus(){
    var num1=document.getElementById('one').value;
    var num2=document.getElementById('two').value;
    document.getElementById('three').value=parseInt(num1)+parseInt(num2);
    document.getElementById('sign').value=('+');
    document.getElementById('sq').value=('=');
}
function subtract(){
    var num1=document.getElementById('one').value;
    var num2=document.getElementById('two').value;
    document.getElementById('three').value=parseInt(num1)-parseInt(num2);
    document.getElementById('sign').value=('-');
    document.getElementById('sq').value=('=');
}
function multi(){
    var num1=document.getElementById('one').value;
    var num2=document.getElementById('two').value;
    document.getElementById('three').value=parseInt(num1)*parseInt(num2);
    document.getElementById('sign').value=('*');
    document.getElementById('sq').value=('=');
}
function dividing(){
    var num1=document.getElementById('one').value;
    var num2=document.getElementById('two').value;
    document.getElementById('three').value=parseInt(num1)/parseInt(num2);
    document.getElementById('sign').value=('/');
    document.getElementById('sq').value=('=');
}