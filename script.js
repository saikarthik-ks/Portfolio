const navToggle=document.querySelector('.nav-toggle');
const navLinks=document.querySelector('.nav-links');
if(navToggle&&navLinks){
  navToggle.addEventListener('click',()=>{
    const open=navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded',String(open));
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id&&id.length>1){
      const el=document.querySelector(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth'});
        navLinks&&navLinks.classList.remove('open');
        navToggle&&navToggle.setAttribute('aria-expanded','false');
      }
    }
  });
});

const form=document.getElementById('contact-form');
const statusEl=document.getElementById('form-status');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const name=data.get('name');
    statusEl.textContent='Thanks '+name+'! Your message was noted locally.';
    form.reset();
  });
}

document.getElementById('year').textContent=String(new Date().getFullYear());
