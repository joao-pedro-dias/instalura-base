import React from 'react';
import Image from 'next/image';

export function ImageHome() {
  return (
    <Image
      style={{ display: 'block', margin: 'auto' }}
      src="/images/home.svg"
      width={1179}
      height={967}
    />
  );
}
