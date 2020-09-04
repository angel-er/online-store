import React from 'react';
import {Carousel} from 'antd';

const contentStyle = {
  height: '350px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Content = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3
          style={{
            ...contentStyle,
            backgroundImage: 'url("../../images/hombre.jpg")',
          }}
        >
          1
        </h3>
      </div>

      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default Content;
