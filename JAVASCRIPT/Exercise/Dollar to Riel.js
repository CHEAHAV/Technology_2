// function dollar() is conect to onkeyup="dollar()"
function dollar(){
    // dl = dollar
    var dl=document.getElementById('Dollar').value;
    // rl = riel
    var rl=document.getElementById('Riel');
    // 1$ = 4000៛
    rl.value=parseFloat(dl)*4000;
    document.getElementById('Dollar1').value=dl;
    document.getElementById('Riel1').value=dl*4000;
}
function riel(){
    // rll = riel
    var rll=document.getElementById('Riell').value;
    // dll = dollar
    var dll=document.getElementById('Dollarr');
    dll.value=parseFloat(rll)/4000;
    document.getElementById('Riel2').value=rll;
    document.getElementById('Dollar2').value=rll/4000;
}