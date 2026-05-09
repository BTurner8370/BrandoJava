// ===============================
// PROJECT OBJECTS
// ===============================

const project1 = {
    title: "DJ Crate Organizer",
    summary: "Organizes DJ music by BPM, key, and energy for smoother mixing transitions.",
    image: "https://via.placeholder.com/300",
    repo: "https://github.com/yourusername/dj-crate-organizer"
};

const project2 = {
    title: "Trip Bill Splitter",
    summary: "Splits group expenses and generates a final trip cost summary using JavaScript storage.",
    image: "https://via.placeholder.com/300",
    repo: "https://github.com/yourusername/trip-bill-splitter"
};

const project3 = {
    title: "User Profile Dashboard",
    summary: "Manages user profiles, roles, and activity logs using object-oriented JavaScript.",
    image: "https://via.placeholder.com/300",
    repo: "https://github.com/yourusername/user-dashboard"
};

// ===============================
// ARRAY OF PROJECTS
// ===============================

let projects = [project1, project2, project3];

// ===============================
// SESSION STORAGE LOGIC
// ===============================

const storedProjects = sessionStorage.getItem("projectsData");

if (!storedProjects) {
    sessionStorage.setItem("projectsData", JSON.stringify(projects));
} else {
    projects = JSON.parse(storedProjects);
}

// ===============================
// RENDER TO DOM
// ===============================

const projectSection = document.querySelector("#projects");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.summary}</p>
        <a href="${project.repo}" target="_blank">View Repo</a>
    `;

    projectSection.appendChild(card);
});
