export default function KonamiCode(callback: () => void) {
  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
  ];
  let pressed: string[] = [];

  const handleKeyPress = (e: KeyboardEvent) => {
    const pressedKey = e.key;

    if (pressedKey === konamiSequence[pressed.length]) {
      pressed.push(pressedKey);

      if (pressed.length === konamiSequence.length) {
        pressed = [];
        callback();
      }
    } else {
      pressed = [];
    }
  };

  let startX: number = 0;
  let startY: number = 0;

  const handleSwipeStart = (event: TouchEvent) => {
    startX = event.changedTouches[0].screenX;
    startY = event.changedTouches[0].screenY;
  };

  const handleSwipeEnd = (event: TouchEvent) => {
    const diffX: number = event.changedTouches[0].screenX - startX;
    const diffY: number = event.changedTouches[0].screenY - startY;
    let swipeKey = "";

    if (Math.abs(diffX) > Math.abs(diffY)) {
      swipeKey = diffX > 0 ? "ArrowRight" : "ArrowLeft";
    } else {
      swipeKey = diffY > 0 ? "ArrowDown" : "ArrowUp";
    }

    handleKeyPress({ key: swipeKey } as KeyboardEvent);
  };

  window.addEventListener("keydown", handleKeyPress);
  window.addEventListener("touchstart", handleSwipeStart);
  window.addEventListener("touchend", handleSwipeEnd);
}
