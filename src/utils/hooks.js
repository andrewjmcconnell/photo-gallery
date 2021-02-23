import { useEffect } from "react";

// preload images when mounted
export function usePreloadedImages(imgs) {
  useEffect(() => {
    if (imgs.length > 0) {
      imgs.forEach(img => {
        const image = new Image();
        image.src = img.url;
      });
    }
  });
}

// on mobile, handle swipe functions
// if the user swipes a finger left-to-right, run swipeLeftFn
// right-to-left, run swipeRightFn
export function useSwipe(swipeLeftFn, swipeRightFn) {
  useEffect(() => {
    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
      return (
        evt.touches || evt.originalEvent.touches // browser API
      ); // jQuery
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
      console.log("handletouchmove");
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      console.log({ xDiff, yDiff });
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          swipeRightFn();
        } else {
          swipeLeftFn();
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }

    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  });
}
