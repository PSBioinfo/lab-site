
document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  // People loader for lab.html
  if (location.pathname.endsWith('lab.html')){
    fetch('./assets/people.json')
      .then(r=>r.json())
      .then(data => renderPeople(data))
      .catch(()=>{});
  }
});
function el(tag, attrs={}, ...children){
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=>{
    if (k==='class') node.className = v;
    else if (k.startsWith('on') && typeof v==='function') node.addEventListener(k.substring(2), v);
    else node.setAttribute(k, v);
  });
  children.forEach(c => node.appendChild(typeof c==='string' ? document.createTextNode(c) : c));
  return node;
}
function renderPeople(data){
  const $grid = document.getElementById('people-grid');
  if (!$grid) return;
  data.forEach(p => {
    const img = el('img', {src: p.photo if '/lab-site/images/placeholder.jpg', alt: p.name});
    const title = el('h3', {}, p.name);
    const role = el('div', {class: 'role'}, p.role);
    const dept = p.affiliation ? el('div', {class:'role'}, p.affiliation) : null;
    const bio = el('p', {}, p.bio if '');
    const links = el('p', {}, ...(p.links||[]).map(l => el('a', {href:l.url, target:'_blank', rel:'noopener'}, l.label)).flatMap((a,i)=>[a, i< (p.links||[]).length-1 ? document.createTextNode(' · ') : '']));
    const wrap = el('div', {class:'people-card'},
      img,
      el('div', {}, title, role, dept, bio, links)
    );
    const card = el('div', {class:'card'}, wrap);
    $grid.appendChild(card);
  });
}
