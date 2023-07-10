function createBlog() {
    // Get the values from the input fields
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var imageFile = document.getElementById('image').files[0];
    var videoFile = document.getElementById('video').files[0];
  
    // Check if all required fields are filled
    if (!title || !content) {
      alert('Please fill in the required fields (title and content).');
      return;
    }
  
    // Create the blog preview HTML
    var blogContainer = document.createElement('div');
    blogContainer.classList.add('blog');
  
    var previewHTML = '<h2>' + title + '</h2>';
    previewHTML += '<p>' + content + '</p>';
  
    if (imageFile) {
      var imageURL = URL.createObjectURL(imageFile);
      previewHTML += '<div class="uploaded-image"><img src="' + imageURL + '" alt="Blog Image"></div>';
    }
  
    if (videoFile) {
      var videoURL = URL.createObjectURL(videoFile);
      previewHTML += '<video width="260" height="200" controls>';
      previewHTML += '<source src="' + videoURL + '" type="video/mp4">';
      previewHTML += '</video>';
    }
  
    blogContainer.innerHTML = previewHTML;
  
    // Append the blog preview to the blogs container
    var blogsContainer = document.getElementById('blogsContainer');
    blogsContainer.appendChild(blogContainer);
  
    // Clear the input fields for the next blog
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
    document.getElementById('video').value = '';
  }
  

  