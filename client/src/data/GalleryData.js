
const imageCount = 19; // 

const photos = Array.from({ length: imageCount }, (_, i) => 
  `/gallery/${i + 1}.JPG`
);

// Debug: Log all photo paths
console.log('Total photos to load:', imageCount);
console.log('All photo paths:', photos);

export const galleryData = {
  photos: photos
};

export const getGalleryPhotos = () => galleryData.photos;
export const getFeaturedInstagram = () => galleryData.featuredInstagram;