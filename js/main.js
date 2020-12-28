$(".heartsdesire").hover(function(){
    $(".hover-on-1").addClass("active");
}, function(){
    $(".hover-on-1").removeClass("active");
})

let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);