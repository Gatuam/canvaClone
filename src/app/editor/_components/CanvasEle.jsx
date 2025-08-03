'use client'
import { Canvas } from 'fabric';
import React, { useEffect, useRef, useState } from 'react';

const CanvasEle = () => {
  const canvaRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (canvaRef.current) {
      const initCanva = new Canvas(canvaRef.current, {
        width: 500,
        height: 500,
        backgroundColor: '#000',
      });
      initCanva.renderAll();
      setCanvas(initCanva);
      return () => {
        initCanva.dispose();
      };
    }
  }, []);

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <canvas ref={canvaRef} />
    </div>
    
  );
};

export default CanvasEle;
