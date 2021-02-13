//DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  let timeline = new TimelineMax();

  timeline.fromTo(
    '.initial-loading',
    1.5,
    { width: '100%', height: '125%' },
    { width: '0%', delay: 4.5, ease: Expo.easeInOut }
  );

  timeline.fromTo(
    '.background-video',
    2,
    { width: '0%', opacity: 0 },
    { width: '100%', height: '125%', opacity: 1, ease: Power3.easeInOut },
    '-=1'
  );

  timeline.fromTo(
    '.logo-spider',
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
    '-=0.5'
  );

  timeline.fromTo(
    '.nav-list',
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
    '-=0.5'
  );

  timeline.fromTo(
    '.nav-social',
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
    '-=0.5'
  );

  timeline.fromTo(
    '.burger-menu',
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
    '-=0.5'
  );

  timeline.fromTo(
    '.item-1',
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
    '-=0.5'
  );

  timeline.fromTo(
    '.item-2',
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
    '-=0.5'
  );

  timeline.fromTo(
    '.item-3',
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
    '-=0.5'
  );

  timeline.fromTo(
    '.item-4',
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
    '-=0.5'
  );

  timeline.fromTo(
    '.item-5',
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
    '-=0.5'
  );

  timeline.fromTo(
    '.background-lines',
    7,
    { width: '0%', opacity: 0 },
    { width: '100%', opacity: 1, ease: Power3.easeInOut },
    '-=5'
  );
});
