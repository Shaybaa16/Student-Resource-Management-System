// // // dashboard.js

// // document.addEventListener("DOMContentLoaded", function () {
// //     const sections = document.querySelectorAll(".dashboard-section");
// //     const links = document.querySelectorAll(".sidebar a");

// //     links.forEach((link, index) => {
// //         link.addEventListener("click", function (event) {
// //             event.preventDefault();
// //             sections.forEach((section) => (section.style.display = "none"));
// //             sections[index].style.display = "block";
// //         });// dashboard.js

// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".dashboard-section");
//     const links = document.querySelectorAll(".sidebar a");
//     const resourceForm = document.getElementById("resource-form");
//     const resourceList = document.getElementById("resource-list");

//     links.forEach((link, index) => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             sections.forEach((section) => (section.style.display = "none"));
//             sections[index].style.display = "block";
//         });
//     });

//     resourceForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         const resourceName = document.getElementById("resource-name").value;
//         if (resourceName) {
//             const listItem = document.createElement("li");
//             listItem.textContent = resourceName;
//             resourceList.appendChild(listItem);
//             document.getElementById("resource-name").value = "";
//         }
//     });

//     // Show the Resources section by default
//     document.getElementById("resources-link").click();
// });

// //     });

// //     // Show the Home section by default
// //     document.getElementById("home-section").style.display = "block";
// // });
// // dashboard.js

// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".dashboard-section");
//     const links = document.querySelectorAll(".sidebar a");
//     const resourceForm = document.getElementById("resource-form");
//     const resourceList = document.getElementById("resource-list");

//     links.forEach((link, index) => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             sections.forEach((section) => (section.style.display = "none"));
//             sections[index].style.display = "block";
//         });
//     });

//     resourceForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         const resourceName = document.getElementById("resource-name").value;
//         if (resourceName) {
//             const listItem = document.createElement("li");
//             listItem.textContent = resourceName;
//             resourceList.appendChild(listItem);
//             document.getElementById("resource-name").value = "";
//         }
//     });

//     // Show the Resources section by default
//     document.getElementById("resources-link").click();
// });
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".dashboard-section");
    const links = document.querySelectorAll(".sidebar a");
    const resourceForm = document.getElementById("resource-form");
    const resourceList = document.getElementById("resource-list");

    links.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            sections.forEach((section) => (section.style.display = "none"));
            sections[index].style.display = "block";
        });
    });

    resourceForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const resourceName = document.getElementById("resource-name").value;
        if (resourceName) {
            const listItem = document.createElement("li");
            listItem.textContent = resourceName;
            resourceList.appendChild(listItem);
            document.getElementById("resource-name").value = "";
        }
    });

    // Show the Resources section by default
    document.getElementById("resources-link").click();
});
