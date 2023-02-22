const mobileMenu=()=>{
    let menu=document.querySelector('.header ul');
    let btn=document.querySelector('.header button');

    if(btn.innerText ==='MENU'){
        menu.style.display='block';
        btn.innerText='CLOSE';
    }else{
        menu.style.display='none';
        btn.innerText='MENU';
    }
}

let rightBtn=document.querySelector('#right-btn');
let leftBtn=document.querySelector('#left-btn');
let pictures=document.querySelectorAll('.slider-images img');

let imgNum=0;
const moveLeft=()=>{
    displayNone();
    imgNum--;
    if(imgNum<0){
        imgNum=pictures.length-1;
    }
    pictures[imgNum].style.display='block';
}
const moveRight=()=>{
    displayNone();
    imgNum++;
    if(imgNum===pictures.length){
    imgNum=0;
    }
    pictures[imgNum].style.display='block';
}
leftBtn.addEventListener('click',moveLeft);
rightBtn.addEventListener('click',moveRight);

const displayNone=()=>{
pictures.forEach((img) => {
    img.style.display='none';
})
}
const portfolioSort =(button)=>{
    let category=button.getAttribute('data-category');
    let portfolioItems=document.querySelectorAll('.portfolio-single-item');

    portfolioItems.forEach((item)=>{
    item.style.display='none';
    });
    if(category==='sve'){
        portfolioItems.forEach((item)=>{
        item.style.display='block';
        });
    }
    portfolioItems.forEach((item)=>{
        if(item.getAttribute('data-category').includes(category)){
            item.style.display='block';
        }
});
}
const openModal =()=>{
    let modalWindow=document.querySelector('.popup-modal');
    let overlay=document.querySelector('.overlay');

    overlay.style.display='block';
    modalWindow.style.display='block';
}
const closeModal=()=>{
    let modalWindow=document.querySelector('.popup-modal');
    let overlay=document.querySelector('.overlay');
    
    overlay.style.display='none';
    modalWindow.style.display='none';
}