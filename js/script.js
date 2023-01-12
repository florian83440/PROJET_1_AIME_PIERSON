window.addEventListener('load', (event) => {
    console.log('La page est complètement chargée');

    let ctx = document.querySelector('#gameCanvas').getContext('2d');

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 150, 100);

});