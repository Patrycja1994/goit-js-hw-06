const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
 
const gallery = document.querySelector('.gallery');
const addToGallery1= document.createElement("li");
const addToGallery2 = document.createElement("li");
const addToGallery3 = document.createElement("li");

const image1 = document.createElement("img");
image1.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
image1.alt = "White and Black Long Fur Cat";

const image2 = document.createElement("img");
image2.src = "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
image2.alt = "Orange and White Koi Fish Near Yellow Koi Fish";

const image3 = document.createElement("img");
image3.src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
image3.alt = "Group of Horses Running";

gallery.append(addToGallery1);
gallery.append(addToGallery2);
gallery.append(addToGallery3);
addToGallery1.append(image1);
addToGallery2.append(image2);
addToGallery3.append(image3);