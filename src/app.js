import home, { homeScript } from "./pages/home.js";
import view, { viewScript } from "./pages/view.js";
import write, { writeScript } from "./pages/write.js";
// import notFound, { notFoundScript } from './pages/notFound.js';

const routes = {
    "/": { title: "Home", render: home, script: homeScript },
    "/view/:id": { title: "View", render: view, script: viewScript },
    "/write": { title: "Write", render: write, script: writeScript },
    // "/notFound": { title: "NotFound", render: notFound, script: notFoundScript },
};

function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
        view.script();
    } else {
        history.replaceState("", "", "/");
        router();
    }
}

// Handle navigation
window.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
