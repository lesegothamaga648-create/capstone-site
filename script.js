
// PROJECTS ARRAY
const projects = [
    {
        title: "Bio Page",
        description: "My personal website built with HTML and CSS."
    },
    {
        title: "Responsive Navigation",
        description: "A navigation bar that adapts to different screens."
    },
    {
        title: "Grid Gallery",
        description: "Project cards arranged using CSS Grid."
    },
    {
        title: "Contact Form",
        description: "A contact form with HTML validation."
    }
];

// DISPLAY PROJECT CARDS
const projectsGrid = document.querySelector("#projectsGrid");

if (projectsGrid) {
    projects.forEach(function(project) {
        const card = document.createElement("div");

        card.classList.add("project-card");

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        projectsGrid.appendChild(card);
    });
}

// CONTACT FORM
const form = document.querySelector("#contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("#name").value;
        const formMessage = document.querySelector("#formMessage");

        formMessage.textContent =
            "Thank you, " + name + "! Your message has been received.";

        form.reset();
    });
}
