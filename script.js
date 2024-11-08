//Javascript for Accordion
// document.querySelectorAll('.accordion').forEach(button =>{
//     button.addEventListener('click', () =>{
//         button.classList.toggle('active');
//         const panel = button.nextElementSibling;
//         if (getComputedStyle(panel).display === "block"){
//             panel.style.display = "none";
//         }else{
//             panel.style.display = "block";
//         }
//     });
// });

// JavaScript for Smooth Accordion with Toggle Animation
document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const panel = button.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null; // Collapse panel
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"; // Expand panel
        }
    });
});

// JavaScript for Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// JavaScript for Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
