import React from 'react';
import Image from 'next/image';

export function Logo() {
  return (
    <Image src="/images/logo.svg" width={200}  height={100}/>
  )
}