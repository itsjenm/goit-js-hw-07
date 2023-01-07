# 01-gallery.html - Image Gallery

Created a gallery with the ability to click on its items and view full size images in a modal window.

## Technologies

Project used

- basicLightBox

### Steps

- Created and rendered markup from the `galleryItems` data array and provided gallery item template.
- Implemented delegation to `div.gallery` and getting the `url` of a large image.
- Added the script and styles of the modal window library basicLightBox. Used the jsdelivrCDN service to add links to minified. `.min` library files to the project.
- Opened a modal window by clicking on a gallery item.
- Replaced the value of the `src` attribute of the `<img>` element in a modal window before opening.

# 02-lightbox.html - `SimpleLightbox` library

Created the same gallery as in the first task, but using the SimpleLightbox library, which will handle image clicks, modal opening, closing, and image scolling with the keyboard.

### Steps

- Created and rendered markup from the galleryItems data array and provided gallery element template. Used the ready-made code from the first task.
- Added the script and library styles using cdnjs CDN service. You need to add links to two files: `simple-lightbox.min.js` and `simple-lightbox.min.css`.
- Initialized library after gallery items were created and added to `div.gallery`.
- Added image caption display using the `alt` attribute to appear at the bottom of the modal 250 milliseconds after opening the image.
