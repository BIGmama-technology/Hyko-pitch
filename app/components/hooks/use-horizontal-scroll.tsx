"use client"
import * as React from 'react'

export function useHorizontalScroll() {
  const ref = React.useRef<HTMLDivElement>(null)
  ref.current?.addEventListener('touchstart', (event) => {
    event.stopPropagation()
    let initialX = event.touches[0].clientX;
    ref.current?.addEventListener('touchmove', function (e) {
      let currentX = e.touches[0].clientX;
      let diffX = currentX - initialX;

      // Only stop propagation if the user is scrolling horizontally
      if (Math.abs(diffX) > 0) {
        e.stopPropagation();
      }
    });
  }
  )

  return [ref]
}
