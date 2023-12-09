let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');
const faders=document.querySelectorAll('.fade-in');
window.onscroll=() => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset= sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top>=offset && top<offset +height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        };
    });
};
const appearOptions = {
    threshold:0.3
};
const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);


faders.forEach(fader => {
    appearOnScroll.observe(fader);
});