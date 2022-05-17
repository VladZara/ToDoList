"use strict"

const inputfield = document.querySelector('.input-text');
const addbtn = document.querySelector('.addBtn');
const taskbox = document.querySelector('.task-box');


addbtn.addEventListener('click', () => {
 let val = inputfield.value;
 if (val.trim().length === 0 ){
     return false;
}
 const message = document.createElement('div');
 const checkEx = document.createElement('input');
 const img = document.createElement('img');
 checkEx.type = 'checkbox';
 img.src = 'trash.png';
 img.classList.add('delete-button');
 message.append(checkEx);
 message.append(val);
 checkEx.classList.add('round');
 message.classList.add('long');
 taskbox.append(message); 
 message.append(img);
 const deleteEl = document.querySelectorAll('.delete-button');
 deleteEl.forEach(item => {
    item.addEventListener('click', () => {
        let parent = item.parentElement;
        parent.style.display = 'none';
    })
})
});

// deleteEl.addEventListener('click', (e) => {
//     deleteEl.parentElement.remove();
//     deleteEl.forEach(item => {
//         e.target.parentElement.remove();
//     })
// })


 
    


