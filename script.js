var fullImageBox = document.getElementById('fullImageBox');
var fullImage = document.getElementById('fullImage');


document.getElementById('crossIcon').addEventListener('click', function () {
    fullImageBox.style.display = 'none';
})

function openFullImage(src) {
    fullImageBox.style.display = 'flex';
    fullImage.src = src;
}