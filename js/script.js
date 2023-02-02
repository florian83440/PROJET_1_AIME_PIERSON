
function showGame(name){
    let IFrame = document.querySelector('#gameIFrame');
    IFrame.src = 'controller/'+name+'.html';
    IFrame.style.display = 'block';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
}

