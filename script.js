"use strict"

const inputfield = document.querySelector('.input-text');
const addbtn = document.querySelector('.addBtn');
const taskbox = document.querySelector('.task-box');

const toggleCheckbox = () => {
   
    taskbox.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('line-over-text');
        }
      }, false);
}
toggleCheckbox();

const deleteEl = document.querySelectorAll('.delete-button');
 deleteEl.forEach(item => {
    item.addEventListener('click', () => {
        let parent = item.parentElement;
        parent.style.display = 'none';
    })
})

addbtn.addEventListener('click', () => {
 let val = inputfield.value;
 if (val.trim().length === 0 ){
     return false;
}
 const message = document.createElement('li');
 const img = document.createElement('img');
 img.src = 'trash.png';
 img.classList.add('delete-button');
 message.append(val);
 message.classList.add('long');
 taskbox.append(message); 
 message.append(img);
 const deleteEl = document.querySelectorAll('.delete-button');
 deleteEl.forEach(item => {
    item.addEventListener('click', () => {
        let parent = item.parentElement;
        parent.style.display = 'none';
        
    });
});
inputfield.value = '';
toggleCheckbox()
});

window.addEventListener('keydown', (e) => {
    let val = inputfield.value;
    if (val.trim().length === 0 ){
        return false;
   }
   if(e.key === 'Enter'){
    const message = document.createElement('li');
    const img = document.createElement('img');
    img.src = 'trash.png';
    img.classList.add('delete-button');
    message.append(val);
    message.classList.add('long');
    taskbox.append(message); 
    message.append(img);
    const deleteEl = document.querySelectorAll('.delete-button');
    deleteEl.forEach(item => {
       item.addEventListener('click', () => {
           let parent = item.parentElement;
           parent.style.display = 'none';
           
       });
   });
} else {
    preventDefault()
}
   inputfield.value = '';
   toggleCheckbox()
   });
   


    


