document.addEventListener('mousemove', function(event) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
  });
  
  document.addEventListener('mousedown', function() {
    const cursor = document.querySelector('.cursor');
    cursor.classList.add('active');
  });
  
  document.addEventListener('mouseup', function() {
    const cursor = document.querySelector('.cursor');
    cursor.classList.remove('active');
  });
  