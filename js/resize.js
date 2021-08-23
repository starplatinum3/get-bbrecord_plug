
function changeAddEventBtn(){ 
  console.log("$('.container').width()");
  console.log($('.container').width());
//   $('.container').width()
// resize.js:4 
// 276
  if($('.container').width() >= 300){ 
   $('.input-group-text ').css('font-size', '40px'); 
  }else{ 
   $('.input-group-text ').css('font-size', '4px'); 
  } 
} 
function changeAddEventBtnByClick(){ 
  if($('#left_menu_for_resize').width() >= 300){ 
   $('#add_event_btn').css('font-size', '30px'); 
  }else{ 
   $('#add_event_btn').css('font-size', '13px'); 
  } 
} 


$(document).ready(function(){ 
  changeAddEventBtn(); 
  window.onresize = function(event) { 
   changeAddEventBtn(); 
  }; 
  // $('#minimize-sidebar').click(function(){ 
  //  changeAddEventBtnByClick(); 
  // })  
}); 
