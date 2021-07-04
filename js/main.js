const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // Navigation toogle

  const navBtn = document.querySelector('.menu-bar')
  
  navBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const navLinks = document.querySelector('.nav-links')
    console.log("click");
    navLinks.classList.toggle("hide")
  })