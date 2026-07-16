// theme toggle — remembers choice, falls back to system preference
(function () {
  var saved = localStorage.getItem('theme');
  if (saved) document.documentElement.dataset.theme = saved;
})();
function toggleTheme() {
  var el = document.documentElement;
  var isDark = el.dataset.theme
    ? el.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  el.dataset.theme = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', el.dataset.theme);
}
// pull the cord: play the yank animation, flip the lights mid-pull
function pullBulb(btn) {
  btn.classList.remove('pull');
  void btn.offsetWidth; // restart animation on rapid clicks
  btn.classList.add('pull');
  setTimeout(toggleTheme, 190); // flip right when the cord hits the bottom
  setTimeout(function () { btn.classList.remove('pull'); }, 550);
}
