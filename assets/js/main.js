(function(){
  var menu=document.getElementById('menu');
  document.getElementById('burger').onclick=function(){menu.classList.toggle('open')};
  menu.addEventListener('click',function(e){if(e.target.tagName==='A')menu.classList.remove('open')});
  var up=document.getElementById('up');
  window.addEventListener('scroll',function(){up.classList.toggle('show',window.scrollY>500)});
  up.onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};
  document.querySelectorAll('.faq details').forEach(function(d){d.addEventListener('toggle',function(){
    if(d.open)document.querySelectorAll('.faq details').forEach(function(o){if(o!==d)o.open=false})})});
  var els=document.querySelectorAll('.card,.week,.chips span,.section h2');
  els.forEach(function(e){e.classList.add('reveal')});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.1});
    els.forEach(function(e){io.observe(e)});
  }else els.forEach(function(e){e.classList.add('in')});
  document.getElementById('lead').addEventListener('submit',function(e){
    e.preventDefault();
    var f=e.target,t='Hi, I am '+f.name.value+' ('+f.phone.value+'). I want a free counselling for AI + Data Science combo.';
    document.getElementById('msg').textContent='Thanks '+f.name.value+'! Opening WhatsApp…';
    window.open('https://wa.me/919381243885?text='+encodeURIComponent(t),'_blank');
    f.reset();
  });
})();
