document.addEventListener("DOMContentLoaded", function () {
    let scrollContainer = document.querySelector(".slide_conteiner_2");
    let isDragging = false;
    let startX;
    let scrollLeft;
  
    scrollContainer.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });
  
    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
  
    document.addEventListener("mouseleave", () => {
      isDragging = false;
    });
  
    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // Ajuste este valor para personalizar a sensibilidade do scroll
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  
    scrollContainer.addEventListener("scroll", function () {
      // Se estiver arrastando manualmente, não faz nada
      if (isDragging) return;
  
      // Verifica se o usuário está próximo ao final da página horizontal
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 100) {
        // Ajuste o valor "100" conforme necessário para personalizar quando a rolagem ocorre
        scrollContainer.scrollLeft += 10; // Valor arbitrário para a quantidade de rolagem horizontal
      }
    });
  });
  