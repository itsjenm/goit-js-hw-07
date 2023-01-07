# 01-gallery.html - Image Gallery 
Created a gallery with the ability to click on its items and view full size images in a modal window.

## Technologies 
Project used 
* basicLightBox 

### Steps 
* Created and rendered markup from the ```galleryItems``` data array and provided gallery item template. 
* Implemented delegation to ```div.gallery``` and getting the ```url``` of a large image. 
* Added the script and styles of the modal window library basicLightBox. Used the jsdelivrCDN service to add links to minified. ```.min``` library files to the project. 
* Opened a modal window by clicking on a gallery item. 
* Replaced the value of the ```src``` attribute of the ```<img>``` element in a modal window before opening. 