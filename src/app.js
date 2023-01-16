import home, { homeScript } from "./pages/home.js";
import view, { viewScript } from "./pages/view.js";

const routes = {
    "/": { title: "Home", render: home, script: homeScript },
    "/view": { title: "View", render: view, script: viewScript },
    // "/write": { title: "Home", render: home, script: homeScript },
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
