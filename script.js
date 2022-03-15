const showContactDetail = document.querySelector('.show-contact-details')
const showContactDetailBtn = document.querySelector('.show-contact-detail-btn')

let show = false
showContactDetailBtn.addEventListener('click', () => {
    if (show) {
        showContactDetail.style.display = 'none'
        show = false
    } else {
        showContactDetail.style.display = 'flex'
        show = true
    }
})