// Auto-builds a Table of Contents from the doc's <h2> headings + scroll-spy.
(function(){
  var doc = document.querySelector('.doclayout .doc');
  var list = document.getElementById('toc');
  var side = document.querySelector('.toc');
  if(!doc || !list){ return; }
  var heads = [].slice.call(doc.querySelectorAll('h2'));
  if(heads.length < 2){ if(side) side.style.display='none'; return; }

  var links = heads.map(function(h,i){
    if(!h.id){
      h.id = (h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')) || ('sec-'+i);
    }
    var a = document.createElement('a');
    a.href = '#'+h.id;
    a.textContent = h.textContent.trim();
    a.className = 'toc-link';
    list.appendChild(a);
    return a;
  });

  function onScroll(){
    var pos = window.scrollY + 130, idx = 0;
    for(var i=0;i<heads.length;i++){ if(heads[i].offsetTop <= pos) idx = i; }
    for(var j=0;j<links.length;j++){ links[j].classList.toggle('active', j===idx); }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll, {passive:true});
  onScroll();
})();
