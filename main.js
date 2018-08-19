
const closeAds = document.getElementById('closeAds');
window.addEventListener('load', init);


function init() {
    setTimeout(timeout, 5000);
};

function timeout() {
    document.getElementById('dropship').style.display = 'block'; 
    clearTimeout();

};

closeAds.addEventListener('click', close);

function close() {
    document.getElementById('dropship').style.display = 'none'; 
}

