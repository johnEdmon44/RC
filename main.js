(function() {
  const missionContent = document.querySelector('#mission-content');
  const vissionContent = document.querySelector('#vission-content');
  const missionBtn = document.querySelector('#mission-btn');
  const vissionBtn = document.querySelector('#vission-btn');

  vissionBtn.addEventListener('click', function() {
    vissionBtn.classList.add('active-button');
    missionBtn.classList.remove('active-button');
    missionContent.classList.remove('active-content');
    vissionContent.classList.add('active-content');
  });


  missionBtn.addEventListener('click', function() {
    vissionBtn.classList.remove('active-button');
    missionBtn.classList.add('active-button');
    missionContent.classList.add('active-content');
    vissionContent.classList.remove('active-content');
  });
})();