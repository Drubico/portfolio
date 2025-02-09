function setSidebar(data) {
    // sidebar data
    document.querySelector('[data-contact-title="email"]').textContent = data.sidebar.contacts.email.title;
    const emailLink = document.querySelector('[data-contact-link="email"]');
    emailLink.textContent = data.sidebar.contacts.email.linkText;
    emailLink.href = data.sidebar.contacts.email.linkHref;
    document.querySelector('[data-contact-title="phone"]').textContent = data.sidebar.contacts.phone.title;
    const phoneLink = document.querySelector('[data-contact-link="phone"]');
    phoneLink.textContent = data.sidebar.contacts.phone.linkText;
    phoneLink.href = data.sidebar.contacts.phone.linkHref;
    document.querySelector('[data-contact-title="birthday"]').textContent = data.sidebar.contacts.birthday.title;
    document.querySelector("[data-birthday-date]").textContent =
        calculateAge(new Date(data.sidebar.contacts.birthday.datetime)) + " " + data.sidebar.contacts.birthday.unit;
    document.querySelector("[data-birthday-date]").setAttribute("datetime", data.sidebar.contacts.birthday.datetime);
    document.querySelector('[data-contact-title="location"]').textContent = data.sidebar.contacts.location.title;
    document.querySelector("[data-location-address]").textContent = data.sidebar.contacts.location.address;
    document.querySelector('[data-contact-title="linkedin"]').textContent = data.sidebar.contacts.linkedin.title;
    const linkedinLink = document.querySelector('[data-contact-link="linkedin"]');
    linkedinLink.textContent = data.sidebar.contacts.linkedin.linkText;
    linkedinLink.href = data.sidebar.contacts.linkedin.linkHref;
    // sidebar toggle functionality for mobile
    document.querySelector(".name").textContent = data.sidebar.name;
    document.querySelector(".title").textContent = data.sidebar.title;
    document.querySelector("[data-show-contacts]").textContent = data.sidebar.showContactsBtn;
}

function calculateAge(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}

function setSidebarClick() {
    // sidebar variables
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");
    const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
    sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

export { setSidebar, setSidebarClick };