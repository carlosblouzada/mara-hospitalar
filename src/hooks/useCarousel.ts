import { useCallback, useEffect, useRef, useState } from 'react';

function getVisibleCards() {
  if (window.innerWidth < 700) return 1;
  if (window.innerWidth < 1000) return 2;
  return 3;
}

export function useCarousel(itemCount: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [dotCount, setDotCount] = useState(1);

  const updateLayout = useCallback(() => {
    const visible = getVisibleCards();
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap) return;

    setVisibleCards(visible);
    const maxIdx = Math.max(itemCount - visible, 0);
    const safeIndex = Math.min(index, maxIdx);
    if (safeIndex !== index) setIndex(safeIndex);

    setDotCount(Math.max(itemCount - visible + 1, 1));

    const gap = 20;
    const cardW = wrap.offsetWidth;
    const singleW = (cardW - gap * (visible - 1)) / visible;
    const offset = safeIndex * (singleW + gap);

    track.style.transform = `translateX(-${offset}px)`;
    track.querySelectorAll<HTMLElement>('.depo-card').forEach(card => {
      card.style.flex = `0 0 ${singleW}px`;
    });
  }, [index, itemCount]);

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [updateLayout]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex(current => {
        const maxIdx = Math.max(itemCount - getVisibleCards(), 0);
        return current >= maxIdx ? 0 : current + 1;
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, [itemCount]);

  const goNext = () => {
    const maxIdx = Math.max(itemCount - getVisibleCards(), 0);
    setIndex(current => Math.min(current + 1, maxIdx));
  };

  const goPrev = () => setIndex(current => Math.max(current - 1, 0));

  return {
    trackRef,
    wrapRef,
    index,
    visibleCards,
    dotCount,
    goNext,
    goPrev,
    goTo: setIndex,
  };
}
