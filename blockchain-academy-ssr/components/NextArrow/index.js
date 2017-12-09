import React from 'react';

export default (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-next"
      style={{
        content: 'none', height: '38px', right: '10%', backgroundImage: 'url(/static/right-arrow.svg)',
      }}
      onClick={onClick}
    />
  );
};
