
const footerElement = document.createElement('footer');
document.body.appendChild(footerElement);

// Below new Date and today variable for date
const today = new Date();
const thisYear = today.getFullYear();


const footer = document.querySelector('footer');

// Creating a paragraph element
const copyright = document.createElement('p');
copyright.innerHTML = `Ahmad &copy; ${thisYear}`;


footer.appendChild(copyright);

// Creating an array of skills
const skills = ["Tableau", "HTML", "CSS", "JavaScript", "Google Analytics"];


const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');


skills.forEach((skillText) => {
    const skill = document.createElement('li');
    skill.innerText = skillText;
    skillsList.appendChild(skill);
});
