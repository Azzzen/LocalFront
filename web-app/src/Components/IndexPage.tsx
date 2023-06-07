import React from 'react';
// import ellipsis from "../assets/ellipsis.png";

export default function IndexPage() {
  const background = {
    backgroundColor: '#D9E0D8',
    height: '600px',
    width: '800px',
    borderRadius: '20px',
  };
  const ellips = {
    height: '642px',
    width: '901px',
    left: '1039px',
    top: '-1260px',
  };
  const ellipsis = '../assets/ellipsis.png';

  return (
    <div style={background}>
      {/* <img src={require( `${ props.imageSource }` )} alt={props.imageAlt} /> */}

      <img src={require(`${ellipsis}`)} style={ellips} alt="darker green ellipsis" />
    </div>
  );
}
