
  var miVideo = document.getElementById("miVideo");

  
  miVideo.addEventListener('ended', function() {
    console.log('El video ha terminado');
    window.location.href = 'inicio.html';
});
