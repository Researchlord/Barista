const hamburger = document.getElementById('hamburger');
const toggleNavUl = (menu)=>{
    menu.classList.toggle('open')
}
hamburger.addEventListener('click',()=>{
  toggleNavUl(hamburger).exec()
})
