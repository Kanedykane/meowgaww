// Sample stray data
const strayData = [
  { imgSrc: 'assets/img/gallery/gallery-1.jpg', name: 'Alejandro', type: 'cat', gender: 'female', color: 'brown', story: "Insert short story or description." },
  { imgSrc: 'assets/img/gallery/gallery-2.jpg', name: 'Pedro', type: 'cat', gender: 'female', color: 'brown', story: "Insert short story or description." },
  { imgSrc: 'assets/img/gallery/gallery-3.jpg', name: 'Ingrid', type: 'cat', gender: 'female', color: 'brown', story: "Insert short story or description." },
  { imgSrc: 'assets/img/gallery/gallery-4.jpg', name: 'Alejandro', type: 'cat', gender: 'female', color: 'brown', story: "Insert short story or description." },
  // add more stray data here with color property
];

// Function to display stray data images
function displayStrayImages() {
  const galleryContainer = document.querySelector('.row'); // Assuming this is the container where you want to add images

  strayData.forEach(stray => {
    // Create gallery item
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('col-xl-3', 'col-lg-4', 'col-md-6', 'mb-4');

    // Create gallery item content
    const galleryContent = `
      <div class="bg-white rounded shadow-sm">
        <img src="${stray.imgSrc}" alt="" class="gallery-img img-fluid card-img-top">
        <div class="p-4">
          <h5><a href="#" class="text-dark">${stray.name}</a></h5>
          <p class="small text-muted mb-0">${stray.story}</p>
          <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
            <p class="small mb-0"><i class="fa fa-picture-o mr-2"></i><span class="font-weight-bold">${stray.type.toUpperCase()}</span></p>
            <div class="badge badge-${getBadgeColor(stray.type)} px-3 rounded-pill font-weight-normal">${getBadgeText(stray.type)}</div>
          </div>
        </div>
      </div>
    `;

    // Set gallery item content
    galleryItem.innerHTML = galleryContent;

    // Append gallery item to the container
    galleryContainer.appendChild(galleryItem);
  });
}

// Helper function to get badge color based on type
function getBadgeColor(type) {
  switch (type.toLowerCase()) {
    case 'dog':
      return 'danger';
    case 'cat':
      return 'success';
    // Add more cases for other types if needed
    default:
      return 'primary';
  }
}

// Helper function to get badge text based on type
function getBadgeText(type) {
  switch (type.toLowerCase()) {
    case 'dog':
      return 'New';
    case 'cat':
      return 'Hot';
    // Add more cases for other types if needed
    default:
      return 'Trend';
  }
}

// Call the function to display stray images
displayStrayImages();
