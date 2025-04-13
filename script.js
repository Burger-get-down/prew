const modal = document.querySelectorAll('.modal'),
        cardBtn = document.querySelectorAll('.card_product'),
        modalClose = document.querySelectorAll('.modal_close'),
        modalCard = document.querySelectorAll('.modal_card')

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

cardBtn.forEach((cardBtn, i) => {
    cardBtn.addEventListener('click', () => {
        activeModal(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})


modal.forEach((modal) => {
    modal.addEventListener('click', () => {
        modal.classList.remove('active-modal')
    })
})

modalCard.forEach((modalCard) => {
    modalCard.addEventListener('click', (e) => {
        e.stopPropagation()
    })
})


//темная тема
const btnDarkMode = document.querySelector(".dark-mode-btn");
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn__active");
    document.body.classList.toggle('dark')
}