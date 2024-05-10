// Select the heart button and add event listener
const likeBtn = document.querySelector('.like-btn');
likeBtn.addEventListener('click', function() {
    // Toggle the 'liked' class to change the heart color
    this.classList.toggle('liked');
    
    // Get the count of likes
    let count = parseInt(this.textContent);
    
    // If the post is liked, increment the count, else decrement
    if (this.classList.contains('liked')) {
        count++;
        // Show alert message when post is added to favorites
        alert('Post added to favorites!');
    } else {
        count--;
    }
    
    // Update the like count
    this.textContent = count;
});