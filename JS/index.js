// Create and append the footer element
const footerElement = document.createElement('footer');
document.body.appendChild(footerElement);

// Below new Date and today variable for date
const today = new Date();
const thisYear = today.getFullYear();

// Select the footer element and create a paragraph for copyright
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Ahmad &copy; ${thisYear}`;

// Append copyright to the footer
footer.appendChild(copyright);

// Creating an array of skills
const skills = ["Tableau", "HTML", "CSS", "JavaScript", "Google Analytics"];

// Select skills section and list
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

// Append each skill as a list item
skills.forEach((skillText) => {
    const skill = document.createElement('li');
    skill.innerText = skillText;
    skillsList.appendChild(skill);
});

// Handle message form submission
document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.querySelector('form[name="leave_message"]');
    
    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission behavior

            // Get values from form fields
            const userName = event.target.usersName.value;
            const userEmail = event.target.usersEmail.value;
            const userMessage = event.target.usersMessage.value;

            // Log form values
            console.log("Name:", userName);
            console.log("Email:", userEmail);
            console.log("Message:", userMessage);

            // Create new message list item
            const messageSection = document.querySelector('#messages');
            const messageList = messageSection.querySelector('ul');
            const newMessage = document.createElement('li');

            // Set inner HTML for new message
            newMessage.innerHTML = `
                <a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>
                <button type="button">remove</button>
            `;

            // Append remove button functionality
            const removeButton = newMessage.querySelector('button');
            removeButton.addEventListener('click', function() {
                newMessage.remove();
                if (messageList.children.length === 0) {
                    messageSection.style.display = 'none'; // Hide the s
