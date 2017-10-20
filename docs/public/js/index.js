$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  $('a').on('click', (e) => {
    console.log('a clc', e);
  })
});