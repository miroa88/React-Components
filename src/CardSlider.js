import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CardSlider.css'; // Import the CSS file

const CardSlider = () => {

const images = [
    {id: 1, url: 'https://asset.gecdesigns.com/img/background-templates/dark-blue-business-background-template-1612192784768-cover.webp'},
    {id: 2, url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/colored-background-design-template-b1c2ed560001b818b35b61d3f3c2ff0e_screen.jpg?ts=1630361751'},
    {id: 3, url: 'https://png.pngtree.com/thumb_back/fh260/background/20210320/pngtree-water-sample-art-texture-blue-gradient-background-image_589400.jpg'},
    // add as many images as you want
    ];
//   const cardsData = [
//     { id: 1, title: 'Card 1', content: 'Content of Card 1' },
//     { id: 2, title: 'Card 2', content: 'Content of Card 2' },
//     { id: 3, title: 'Card 3', content: 'Content of Card 3' },
//     // Add more cards as needed
//   ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="card-slider">
//       <Slider {...settings}>
//         {cardsData.map((card) => (
//           <div key={card.id} className="card">
//             <h3>{card.title}</h3>
//             <p>{card.content}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );

    return (
      <Slider {...settings}>
        {images.map(image => {
          return (
            <div key={image.id}>
              <img src={image.url} alt="" />
            </div>
          );
        })}
      </Slider>
    );

};

export default CardSlider;