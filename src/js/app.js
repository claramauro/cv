// Ouverture fenetre impression/telécharger en PDF
const buttonsUpload = document.querySelectorAll('.btn-upload')
buttonsUpload.forEach(btn => {
    btn.addEventListener('click', (e) => {
        window.print()
    })
})





