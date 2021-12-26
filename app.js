const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('nav')
const navUl = document.querySelector('.nav-ul')


hamburger.addEventListener('click', () => {
    const url = new URL(hamburger.src);
	console.log(url.pathname)

   if(url.pathname === '/images/icon-hamburger.svg') {
       hamburger.src = '/images/icon-close.svg'
       navUl.classList.add('show-nav');
       
   }
   else {
    hamburger.src = '/images/icon-hamburger.svg'
    navUl.classList.remove('show-nav');
   }
    
})