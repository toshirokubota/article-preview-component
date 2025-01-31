const share_links = document.querySelectorAll('.image-wrapper');
const share = document.getElementById('share');
console.log(share_links);
for(let elm of share_links) {
    elm.addEventListener('click', ()=>{
        share.classList.toggle('hidden');
    });
}