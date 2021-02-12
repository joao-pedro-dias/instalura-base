import React from 'react';
import Image from 'next/image';

export function Logo() {
  return (
    <Image src="/images/logo.png" width={300}  height={100}/>
  )
}