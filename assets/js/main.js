let setting_box = document.querySelector('.setting_box');
let overlay = document.querySelector('.overlay')
setting_box.addEventListener('click', () => {
    // let main_box = document.querySelector('.main');
    document.body.classList.toggle('show');
    overlay.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay')) {
        overlay.classList.remove('show');
        document.body.classList.remove('show');
    }
})

let getname = document.querySelector('.name_section').querySelector('h1');
let getsubtitle = document.querySelector('.name_section').querySelector('p');
let getEmail = document.querySelector('.email > a');
let getContact = document.querySelector('.contact > a');
let getAddress = document.querySelector('.Address > a');
let getSocial1 = document.querySelector('.linked_in > a');
let getSocial2 = document.querySelector('.Git_Hub > a');


// console.log(getEmail.getAttribute('href'));

let name = document.querySelector('#name');
name.setAttribute('placeholder', getname.innerText);
let subtitle = document.querySelector('#subtitle');
subtitle.setAttribute('placeholder', getsubtitle.innerText);
let email = document.querySelector('#email');
let emailAnchore = document.querySelector('#emailAnchore');
email.setAttribute('placeholder', getEmail.innerText);
emailAnchore.setAttribute('placeholder', getEmail.getAttribute('href'))
let contact = document.querySelector('#contact');
contact.setAttribute('placeholder', getContact.innerText)
let address = document.querySelector('#address');
address.setAttribute('placeholder', getAddress.innerText)
let socail1 = document.querySelector('#linkdin');
let socail1Anchore = document.querySelector('#linkdinAnchore');
socail1.setAttribute('placeholder', getSocial1.innerText);
socail1Anchore.setAttribute('placeholder', getSocial1.getAttribute('href'))
let socail2 = document.querySelector('#github')
let socail2Anchore = document.querySelector('#githubAnchore')
socail2.setAttribute('placeholder', getSocial2.innerText);
socail2Anchore.setAttribute('placeholder', getSocial2.getAttribute('href'))


name.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getname.innerText = nameValue;
})
subtitle.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getsubtitle.innerText = nameValue;
})

email.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getEmail.innerText = nameValue;
})

emailAnchore.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getEmail.setAttribute('href', nameValue);
})

contact.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getContact.innerText = nameValue;
})

address.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getAddress.innerText = nameValue;
})

socail1.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getSocial1.innerText = nameValue;
})
socail1Anchore.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getSocial1.setAttribute('href', nameValue);
})

socail2.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getSocial2.innerText = nameValue;
})
socail2Anchore.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getSocial2.setAttribute('href', nameValue);
})
