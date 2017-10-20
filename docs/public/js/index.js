$(document).ready(function(){
  var _helpers = require('./helpers');  
  console.log('on load', _helpers);
  $('a').on('click', (e) => {
    e.preventDefault();
    console.log('link clk', e);
  });
});