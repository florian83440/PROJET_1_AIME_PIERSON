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
    let comeFrom = localStorage.getItem('comeFrom');
    if(comeFrom == 'index'){
        window.location.href = '../index.html';
    }else{
        window.location.href = '../controller/'+comeFrom+'.html';
    }
}

function logout(){
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}

function closeGame(){
    let IFrame = parent.document.querySelector('#gameIFrame');
    IFrame.src = '';
    IFrame.style.display = 'none';
    document.body.style.overflow = 'scroll';
}