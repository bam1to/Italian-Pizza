window.addEventListener("DOMContentLoaded", () => {
  let block = document.querySelectorAll(".footer-container__block");

  for (let i = 0; i < block.length; i++) {
    block[i].addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        let blockChild = block[i].children[1];
        blockChild.classList.toggle("dBlock");
        window.setTimeout(function () {
          for (let j = 0; j <= 1; j += 0.05) {
            blockChild.style.transform = `scale(${j})`;
          }
        }, 300);
        if(blockChild.className !== 'dBlock') {
            blockChild.style.transform = `scale(0)`;
        }
      }
    });
  }
});
