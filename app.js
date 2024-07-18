// je veux lorsque j'appuie sur un des boutons que le texte s'affiche et le reste caché

const tabBtns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const contents = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
  const currentBtn = e.target.dataset.id;
  if (currentBtn) {
    tabBtns.forEach(function (btn) {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });

    contents.forEach(function (content) {
      content.classList.remove('active');
    });
    const currentContent = document.getElementById(currentBtn);
    currentContent.classList.add('active');
  }
});
