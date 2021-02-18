import React from 'react';
import Image from 'next/image';

export function ImageHome() {
  return (
    <Image style={{ display: 'block', margin: 'auto' }}
    src="/images/home.png" width={1179}  height={967}/>
  )
}