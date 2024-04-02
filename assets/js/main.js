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

function setPlaceHolder(input, textValue) {
    input.setAttribute('placeholder', textValue);
}

function changeValue(input, text) {
    input.addEventListener('keyup', (e) => {
        let inputValue = e.target.value;
        text.innerText = inputValue

    })
}


// GET HEADER TEXT DETAIL VARIABLE

let getname = document.querySelector('.name_section').querySelector('h1');
let getsubtitle = document.querySelector('.name_section').querySelector('p');
let getEmail = document.querySelector('.email > a');
let getContact = document.querySelector('.contact > a');
let getAddress = document.querySelector('.Address > a');
let getSocial1 = document.querySelector('.linked_in > a');
let getSocial2 = document.querySelector('.Git_Hub > a');

// GET HEADER INPUT TEXT DETAIL VARIABLE 
let nameInput = document.querySelector('#name');
let subtitle = document.querySelector('#subtitle');
let email = document.querySelector('#email');
let emailAnchore = document.querySelector('#emailAnchore');
let contact = document.querySelector('#contact');
let address = document.querySelector('#address');
let socail1 = document.querySelector('#linkdin');
let socail1Anchore = document.querySelector('#linkdinAnchore');
let socail2 = document.querySelector('#github')
let socail2Anchore = document.querySelector('#githubAnchore')

setPlaceHolder(nameInput, getname.innerText);
setPlaceHolder(subtitle, getsubtitle.innerText);
setPlaceHolder(email, getEmail.innerText);
setPlaceHolder(emailAnchore, getEmail.getAttribute('href'));
setPlaceHolder(contact, getContact.innerText);
setPlaceHolder(address, getAddress.innerText);
setPlaceHolder(socail1, getSocial1.innerText);
setPlaceHolder(socail1Anchore, getSocial1.getAttribute('href'));
setPlaceHolder(socail2, getSocial2.innerText);
setPlaceHolder(socail2Anchore, getSocial2.getAttribute('href'));


emailAnchore.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getEmail.setAttribute('href', nameValue);
})

socail1Anchore.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getSocial1.setAttribute('href', nameValue);
})

socail2Anchore.addEventListener('keyup', (e) => {
    let nameValue = e.target.value;
    getSocial2.setAttribute('href', nameValue);
})

changeValue(nameInput, getname);
changeValue(subtitle, getsubtitle);
changeValue(email, getEmail);
changeValue(contact, getContact);
changeValue(address, getAddress);
changeValue(socail1, getSocial1);
changeValue(socail2, getSocial2);



// BODY SECTION TEXT VARIABLE 

let getSummaryTitle = document.querySelector('.summary > .title > h2');
let getSummaryDes = document.querySelector('.summary > p');
let summaryTitle = document.querySelector('#summaryTitle');
let summaryDescription = document.querySelector('#summaryDescription');

setPlaceHolder(summaryTitle, getSummaryTitle.innerText);
setPlaceHolder(summaryDescription, getSummaryDes.innerText);

changeValue(summaryTitle, getSummaryTitle)
changeValue(summaryDescription, getSummaryDes)


let getInterTitle = document.querySelector('.intern > .title > h2');
let getCompany = document.querySelector('.intern > .subHeading > .company > span');
let getCompanyRole = document.querySelector('.intern > .subHeading > .role > span');
let getinterDes = document.querySelectorAll('.intern > ul');
let getinterdesli = document.querySelectorAll('.intern> ul > li');
let interTitle = document.querySelector('#interTitle');
let companyName = document.querySelector('#companyName');
let CompanyRole = document.querySelector('#role');
let intershipbox = document.querySelector('.intershipbox');

function createInputlistbox(input, className, parent) {
    input.forEach(li => {
        let inputtag = document.createElement('input');
        inputtag.setAttribute('type', 'text');
        inputtag.setAttribute('placeholder', li.innerText);
        inputtag.setAttribute('class', className);
        parent.appendChild(inputtag);

    })
}


createInputlistbox(getinterdesli, 'list_inputTag', intershipbox);






setPlaceHolder(interTitle, getInterTitle.innerHTML)
setPlaceHolder(companyName, getCompany.innerText);
setPlaceHolder(CompanyRole, getCompanyRole.innerText);

changeValue(interTitle, getInterTitle);
changeValue(companyName, getCompany);
changeValue(CompanyRole, getCompanyRole);

