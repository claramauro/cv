// Ouverture fenetre impression/telécharger en PDF
const buttonsUpload = document.querySelectorAll('.btn-upload')
buttonsUpload.forEach(btn => {
    btn.addEventListener('click', (e) => {
        window.print()
    })
})

// Mise à jour automatique de l'âge

const currentDate = new Date()
const dayCurrentDate = currentDate.getDate()
const monthCurrentDate = currentDate.getMonth()
const yearCurrentDate = currentDate.getFullYear()

const dayBirthday = 27
const monthBirthday = 7 /* Aout = mois n°7 en JS Date */
const yearBirthday = 1995

let age = yearCurrentDate - yearBirthday
if (monthCurrentDate < monthBirthday){
    age--
} else if (monthCurrentDate === monthBirthday  && dayCurrentDate < dayBirthday){
    age--
}

const ageElement = document.querySelector('.js-age')
if (parseInt(ageElement.innerText) !== age){
    ageElement.innerText = age
}






