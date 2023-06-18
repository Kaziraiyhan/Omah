const menu_bar = document.querySelector('.menu_bar');
const menu_close = document.querySelector('.menu_close')
const menu = document.querySelector('.menu')

menu_bar.addEventListener("click", function() {
    // Add a class to the button
    menu_bar.classList.add("hidden");
    menu_close.classList.remove("hidden");
    menu.classList.add('flex')
    menu.classList.remove('hidden')

  });
  menu_close.addEventListener("click", function() {
    // Add a class to the button
    
    menu_close.classList.remove("inline-block");
    menu_close.classList.add("hidden");
    menu_bar.classList.remove("hidden");
    menu_bar.classList.add("inline-block");
    menu.classList.add('hidden')



    
  });