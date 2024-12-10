document.getElementById('upload-image').addEventListener('change', function() {
    const label = document.querySelector('.upload-label p');
    const fileName = this.files[0]?.name || 'Upload a file or drag and drop';
    label.textContent = fileName;
});

document.querySelector('.btn-add-item').addEventListener('click', function() {
    console.log('Add Item button clicked');
    // Add any further actions here (e.g., form submission)
});
