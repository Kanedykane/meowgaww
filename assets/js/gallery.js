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
  const strayData = retrieveStrayData();
  const galleryContainer = document.querySelector('.galleryWrapper');

  strayData.forEach(stray => {
    var parsedImg = stray.imgData.toString('base64');

    // Create gallery item
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('col-xl-3', 'col-lg-4', 'col-md-6', 'mb-4');

    // Create gallery item content
    const galleryContent = `
      <div class="bg-white rounded shadow-sm stray-card">
        <img src="data:image/png; base64,${parsedImg}" alt="${stray.name}" class="gallery-img img-fluid card-img-top">
        <div class="p-4">
          <h5><a href="#" class="text-dark stray-detail-link" data-stray='${JSON.stringify(stray)}'>${stray.name}</a></h5>
          <p class="small text-muted mb-0">${stray.gender}</p>
          <p class="small text-muted mb-0">STATUS: ${stray.status}</p>
          <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
            <p class="small mb-0"><i class="fa fa-picture-o mr-2"></i><span class="font-weight-bold">${stray.breed.toUpperCase()}</span></p>
            <div class="badge badge-${getBadgeColor(stray.animal)} px-3 rounded-pill font-weight-normal">${getBadgeText(stray.animal)}</div>
          </div>
        </div>
      </div>
    `;

    // Set gallery item content
    galleryItem.innerHTML = galleryContent;

    // Append gallery item to the container
    galleryContainer.appendChild(galleryItem);
  });

  // Event listener for stray detail links
  const strayDetailLinks = document.querySelectorAll('.stray-detail-link');
  strayDetailLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      console.log("Link clicked!"); // Check if this message is logged
      const strayData = JSON.parse(this.getAttribute('data-stray'));
      displayStrayDetails(strayData);
    });
  });
}

// Call the function to display stray images
displayStrayImages();
