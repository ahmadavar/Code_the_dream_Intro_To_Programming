const footerElement = document.createElement('footer');
document.body.appendChild(footerElement);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Ahmad &copy; ${thisYear}`;
footer.appendChild(copyright);

// Add a link to Tableau Public visualization in the skills array
const skills = [
    "My Tableau Public Viz can be accessed at this link: <a href='https://public.tableau.com/views/ChemCorpSpringboard/ChemCorp?:language=en-US&:display_count=n&:origin=viz_share_link' target='_blank'>Tableau Visualization</a>"
];

const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

// Append the Tableau link as an HTML string
skills.forEach((skillText) => {
    const skill = document.createElement('li');
    skill.innerHTML = skillText;  // Use innerHTML to render the HTML link correctly
    skillsList.appendChild(skill);
});

document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.querySelector('form[name="leave_message"]');
    
    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const userName = event.target.usersName.value;
            const userEmail = event.target.usersEmail.value;
            const userMessage = event.target.usersMessage.value;

            console.log("Name:", userName);
            console.log("Email:", userEmail);
            console.log("Message:", userMessage);

            const messageSection = document.querySelector('#messages');
            const messageList = messageSection.querySelector('ul');
            const newMessage = document.createElement('li');

            newMessage.innerHTML = `
                <a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>
                <button type="button">remove</button>
            `;

            const removeButton = newMessage.querySelector('button');
            removeButton.addEventListener('click', function() {
                newMessage.remove();
                if (messageList.children.length === 0) {
                    messageSection.style.display = 'none';
                }
            });

            messageSection.style.display = 'block';
            messageList.appendChild(newMessage);
            messageForm.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const githubUsername = 'ahmadavar'; 
    const projectSection = document.querySelector('#projects');
    const repoList = document.querySelector('#repo-list');

    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }
            return response.json();
        })
        .then(repositories => {
            console.log(repositories); 

            if (repositories.length === 0) {
                const noRepos = document.createElement('p');
                noRepos.innerText = 'No repositories found for this user.';
                projectSection.appendChild(noRepos);
                return;
            }

            repositories.forEach(repo => {
                const repoItem = document.createElement('li');
                const repoLink = document.createElement('a');
                repoLink.href = repo.html_url;  // GitHub repo URL
                repoLink.innerText = repo.name; // Repo name
                repoLink.target = '_blank';     // Open in new tab

                // Add the link to the list item
                repoItem.appendChild(repoLink);
                repoList.appendChild(repoItem);
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub repositories:', error);
            const errorMessage = document.createElement('p');
            errorMessage.innerText = 'Error loading repositories. Please try again later.';
            projectSection.appendChild(errorMessage);
        });
});
