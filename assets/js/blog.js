// Get the like button element
var likeBtn = document.getElementById('likeBtn');

// Add a click event listener to the like button
likeBtn.addEventListener('click', function() {
  // Toggle the 'liked' class to change the color
  likeBtn.classList.toggle('liked');
});