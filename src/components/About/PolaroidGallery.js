import React from "react";
import "./PolaroidGallery.css";

const PolaroidGallery = () => {
  // Photos array with local or remote paths
  const photos = [
    { src: "https://media.istockphoto.com/id/1221154640/photo/the-sun-shining-through-the-trees-of-a-park.jpg?b=1&s=612x612&w=0&k=20&c=A_S7j8yIq-rSG7lYFE1IcmF20lt5puLqr3igDw2bp4A=", caption: "Red Dirt '20" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGALWv0Vr69tBkjGWvA_PcegmiuUeDyQ13A&s", caption: "Marfa Prada '20" },
    { src: "https://i.pinimg.com/736x/17/d5/09/17d509a37c8db4bbc3a41c76279470bf.jpg", caption: "Mother's Day Cake '20" },
    { src: "https://cdn.expertphotography.com/wp-content/uploads/2024/04/Creative-Landscape-Ideas-Ken-Cheung.jpg", caption: "Chingona Race" },
  ];

  return (
    <div className="motion-container">
      <div className="polaroid-gallery">
        {photos.map((photo, index) => (
          <div className="polaroid" key={index}>
            <img
              src={photo.src}
              alt={photo.caption}
              className="polaroid-image"
            />
            <p className="polaroid-caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolaroidGallery;
