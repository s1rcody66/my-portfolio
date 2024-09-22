const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'

 document.addEventListener('DOMContentLoaded', () => {
    const projects = document.getElementById('projects');
 }

 projects.addEventListener('mouseover', () => {
        .style.backgroundColor = 'lightcoral';  
     }
 projects.addEventListener('mouseout', () => {
    .style.backgroundColor = 'lightblue';
    }
            
            