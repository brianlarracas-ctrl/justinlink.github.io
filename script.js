// Fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Current year in footer
const footer = document.querySelector("footer p");
footer.innerHTML = `© ${new Date().getFullYear()} JustInLink. All Rights Reserved.`;
