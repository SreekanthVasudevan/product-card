const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const grandients=document.querySelectorAll('.grandient');
const shoeBg = document.querySelector('.shoebackground');
let prevColor="blue";
let animationEnd=true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}
function changeColor(){
   if(!animationEnd)return;

    let primary=this.getAttribute('primary');
    let color=this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
   let grandient= document.querySelector(`.grandient[color="${color}"]`);
   let prevGradient=document.querySelector(`.grandient[color="${prevColor}"]`);
    colors.forEach(c=>c.classList.remove('active'));
    this.classList.add('active');
    document.documentElement.style.setProperty('--primary',primary)
    shoes.forEach(s=>s.classList.remove('show'));
   shoe.classList.add('show');
   grandients.forEach(g=>g.classList.remove('first','second'));
   grandient.classList.add('first');
   prevGradient.classList.add('second');
   prevColor=color;
   animationEnd=false;
   grandient.addEventListener('animationend',()=>{
    animationEnd=true;
   })
}
sizes.forEach(size=>size.addEventListener('click',changeSize));
colors.forEach(c=>c.addEventListener('click',changeColor));
let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);


