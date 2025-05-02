document.addEventListener('DOMContentLoaded', function() {
    // Function to handle comment submission
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const commentInput = document.getElementById('comment-input');
            const commentList = document.getElementById('comment-list');

            if (commentInput.value.trim() !== '') {
                const newComment = document.createElement('li');
                newComment.textContent = commentInput.value;
                commentList.appendChild(newComment);
                commentInput.value = ''; // Clear the input field
            }
        });
    }

    // Function to handle share button actions
    const shareButtons = document.querySelectorAll('.share-button');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.dataset.platform;
            alert('Shared on ' + platform);
        });
    });
});