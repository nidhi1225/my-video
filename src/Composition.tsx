import React from 'react';
import { Img, useCurrentFrame, Audio } from 'remotion';

const imageUrls = [
  'http://localhost:5000/image.jpg',
  'http://localhost:5000/image2.jpg',
  'http://localhost:5000/image3.jpg',
  'http://localhost:5000/image4.jpg',
  'http://localhost:5000/image5.jpg',
  'http://localhost:5000/image6.jpg',
  'http://localhost:5000/image7.jpg',
  'http://localhost:5000/image8.jpg',
  // Add more image URLs as needed
];

const framesPerSecond = 30;
const totalImages = imageUrls.length;
const totalDurationInSeconds = 240;
const durationPerImageInSeconds = totalDurationInSeconds / totalImages;

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();

  const currentImageIndex = Math.floor(frame / (framesPerSecond * durationPerImageInSeconds));

  if (currentImageIndex < 0 || currentImageIndex >= totalImages) {
    console.warn(`Frame number (${frame}) is outside the valid range.`);
    return null;
  }

  const currentImageUrl = imageUrls[currentImageIndex];

  return (
    <>
      <Img src={currentImageUrl} width={1920} height={1080} />
      <Audio src="http://localhost:5000/story.mp3" />
    </>
  );
};
