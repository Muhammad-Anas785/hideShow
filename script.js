let btn = document.getElementById('btn');
let pics=document.getElementById('show');

btn.addEventListener('click', showHide);

function showHide() {
    if (btn.textContent.includes("Hide")) {
           document.getElementById('show').style.display='none'
            btn.textContent="Show Image";
        // pics.classList.toString('show_hide');
    }
    else {
            btn.textContent='Hide Image';
            document.getElementById('show').style.display='block';
    }
}