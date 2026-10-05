'use strict';
const viewer=document.getElementById('image-viewer');
const image=document.getElementById('viewer-image');
const title=document.getElementById('viewer-title');
let opener=null;
for(const button of document.querySelectorAll('[data-image]')){
 button.addEventListener('click',()=>{
  opener=button;image.src=button.dataset.image;image.alt=button.querySelector('img').alt;title.textContent=button.dataset.title;
  viewer.showModal();document.body.classList.add('locked');
 });
}
document.getElementById('close-viewer').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
viewer.addEventListener('close',()=>{document.body.classList.remove('locked');image.removeAttribute('src');opener?.focus();});
