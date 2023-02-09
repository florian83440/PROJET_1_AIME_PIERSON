//Open the selected game in an iframe
function showGame(name){
    let IFrame = document.querySelector('#gameIFrame');
    IFrame.src = 'controller/'+name+'.html';
    IFrame.style.display = 'block';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
}

function logged(username){
    localStorage.setItem('username', username);
    window.location.href = '../index.html';
}

function logout(){
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}