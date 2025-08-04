'use client'
import { Canvas } from 'fabric';
import React, { useEffect, useRef, useState } from 'react';

const CanvasEle = () => {
  const canvaRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (canvaRef.current) {
      const initCanva = new Canvas(canvaRef.current, {
        width: 1200/2,
        height: 720/2,
        backgroundColor: '#000',
      });
      const scalefactor = window.devicePixelRatio || 1;
      initCanva.set({
        width: 1200* scalefactor,
        height: 720* scalefactor,
        zoom : 1* scalefactor
      })
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
