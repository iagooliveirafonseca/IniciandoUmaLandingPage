function openMenu(){
   let imageIconOpen = document.getElementsByClassName('iconOpen')[0]
   let imageIconClose = document.getElementsByClassName('iconClose')[0]
   let menuOpen = document.getElementsByClassName('mobileMenu')[0]
    imageIconOpen.classList.toggle('iconOpenDontShow')
    imageIconClose.classList.toggle('iconCloseShow')
    menuOpen.classList.toggle('mobileMenuOpen')

}


function closeMenu(){
    let imageIconOpen = document.getElementsByClassName('iconOpen')[0]
    let imageIconClose = document.getElementsByClassName('iconClose')[0]
    let menuOpen = document.getElementsByClassName('mobileMenu')[0]
    imageIconOpen.classList.toggle('iconOpenDontShow')
    imageIconClose.classList.toggle('iconCloseShow')
    menuOpen.classList.toggle('mobileMenuOpen')
}