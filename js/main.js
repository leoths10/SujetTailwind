// La Table d'Amélie — comportement partagé (menu mobile + dialog réservation)
// Volontairement minimal : le site est statique, pas d'app JS.

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav__toggle')
  const nav = document.querySelector('.nav')

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav--open')
      navToggle.setAttribute('aria-expanded', String(isOpen))
    })
  }

  const reservationDialog = document.getElementById('reservation-dialog')
  const openButtons = document.querySelectorAll('[data-open-reservation]')
  const closeButton = document.querySelector('.reservation-dialog__close')

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => reservationDialog?.showModal())
  })

  closeButton?.addEventListener('click', () => reservationDialog?.close())
})
