function toggleHeartColor() {
    var heartIcon = document.getElementById('heart').querySelector('i');
    heartIcon.classList.toggle('fa-heart-o');
    heartIcon.classList.toggle('fa-heart');
    heartIcon.classList.toggle('heart-red');
  }