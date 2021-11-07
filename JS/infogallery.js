const infogallery = document.getElementById('infogalleryid');
const infid = document.getElementById('INFGLLRY');
const header = document.getElementById('headerid');

infogallery.addEventListener('click', () => {
      infogallery.classList.toggle('show');
      infid.classList.toggle('show');
      header.classList.toggle('show');
}); 
