
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

// DARK MODE TOGGLE
const themeToggle = document.querySelector("#themeToggle");

// Load the saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "Light Mode";
}

// Switch themes when the button is clicked
if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "Dark Mode";
        }
    });
}