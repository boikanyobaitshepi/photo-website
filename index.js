// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Disable dragging images
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});
