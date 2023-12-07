const scriptURL = 'https://script.google.com/macros/s/AKfycbyWPmCWFxt0_MlipuDvXqDwZSaVYBrS7_a4LfiMkrMxlXPnL2tLOB60DPEoxZPLXyGEZQ/exec'

const form = document.forms['regist-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you for your messages!"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error', error.message))
})