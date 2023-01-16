import home, { homeScript } from "./pages/home.js";
import view, { viewScript } from "./pages/view.js";
import write, { writeScript } from "./pages/write.js";

const routes = {
    "/": { title: "Home", render: home, script: homeScript },
    "/view/:id": { title: "View", render: view, script: viewScript },
    "/write": { title: "Write", render: write, script: writeScript },
};

function router() {
    let view = routes[location.pathname];

    const routeRegex = new RegExp(/^\/$/);
    const path = location.pathname + location.param;

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

// const potentialMatches = routes.map(route => {
// return {
//     route: route,
//     // result로 변경하고 정규식과 일치하는 pathname을 담는다
//     result: location.pathname.match(pathToRegex(route.path))
// };
// });

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
