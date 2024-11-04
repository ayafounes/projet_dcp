import Carousel from 'react-bootstrap/Carousel';
import './Slide.css';

function SlideComp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-image"
          src="/11.jpg"
          alt="First slide"
        />
        <div className="caption-container">
         
          <p>Sidi Bou Saïd est un pittoresque village tunisien connu pour ses maisons blanches aux volets bleus, ses ruelles fleuries, et ses vues panoramiques sur la mer Méditerranée, offrant une ambiance unique et artistique.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-image"
          src="/22.jpg"
          alt="Second slide"
        />
        <div className="caption-container">
          
          <p>Ksar El Jem est un amphithéâtre romain majestueux en Tunisie, célèbre pour son impressionnante architecture et son état de conservation exceptionnel, rappelant la grandeur de l'Empire romain.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-image"
          src="/44.jpg"
        />
        <div className="caption-container">
          
          <p>Les plages de Sousse offrent des étendues de sable fin et doré, bordées par des eaux turquoise, idéales pour la détente et les sports nautiques sous le soleil tunisien.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-image"
          src="/55.jpg"
        />
        <div className="caption-container">
          
          <p>La rue Habib Bourguiba, souvent surnommée les "Champs-Élysées de Tunis," est l'artère principale de la capitale tunisienne, bordée de cafés, de boutiques et d'édifices emblématiques.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-image"
          src="/66.jpg"
        />
        <div className="caption-container">
          
          <p>Le port de Sidi Bou Saïd, niché au pied du village pittoresque, offre une vue imprenable sur la Méditerranée et attire les visiteurs avec son charme authentique et ses bateaux colorés.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-image"
          src="/77.jpg"
        />
        <div className="caption-container">
          
          <p>
          La balade à dos de chameau dans la sahara tunisienne offre une expérience inoubliable, mêlant l'immensité des dunes dorées à la magie du désert.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-image"
          src="/88.jpg"
        />
        <div className="caption-container">
          
          <p>Bizerte est une ville portuaire tunisienne, riche en histoire, célèbre pour sa médina, ses plages et son ambiance méditerranéenne..</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideComp;
