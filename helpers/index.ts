export const isParentLinkOrButton = (node: HTMLElement) => {
  let currentNode = node;
  const maxCount = 20;
  let initCount = 1;
  while (currentNode.parentElement && initCount < maxCount) {
    if (
      currentNode.parentElement.tagName.toLowerCase() === 'a' ||
      currentNode.parentElement.tagName.toLowerCase() === 'button'
    ) {
      return true;
    }
    currentNode = currentNode.parentElement;
    initCount += 1;
  }

  return false;
};

export const fixedNav = () => {
  const main = document.querySelector('#main') as HTMLElement;
  const header = document.querySelector('#header') as HTMLElement;
  const parallaxPage = document.querySelector(
    'body.parallax-page'
  ) as HTMLElement;
  const parallaxSection = document.querySelector(
    '.parallax-section'
  ) as HTMLElement;
  const svgHome = document.querySelector('#lift-img-scroll') as HTMLElement;

  if (parallaxPage && parallaxSection) {
    if (
      parallaxSection.getBoundingClientRect().top <= 70 &&
      parallaxSection.getBoundingClientRect().bottom >= 0
    ) {
      header.classList.remove('with-bg');
    } else {
      header.classList.add('with-bg');
    }
  }

  if (!parallaxPage && main) {
    if (main.getBoundingClientRect().top <= 0) {
      header.classList.add('with-bg');
    } else {
      header.classList.remove('with-bg');
    }
  }

  if (svgHome) {
    const min = -500;
    const mainToTop = main.getBoundingClientRect().top;
    const screenHeight = window.screen.height;
    const offset = (mainToTop / screenHeight) * screenHeight * 2;

    svgHome.style.transform = `translate3d(0, ${Math.max(min, offset)}px, 0)`;
  }
};

export const cursorLink = (e: MouseEvent, cursor: HTMLElement) => {
  const eTarget = e.target as HTMLElement;

  if (
    eTarget.tagName.toLowerCase() === 'a' ||
    eTarget.className === 'swiper-button-prev' ||
    eTarget.className === 'swiper-button-next' ||
    eTarget.tagName.toLowerCase() === 'button' ||
    isParentLinkOrButton(eTarget)
  ) {
    cursor.classList.remove('swipe');
    cursor.classList.add('link');
  } else if (
    eTarget.classList.contains('swiper-slide') ||
    eTarget.classList.contains('swiper-image')
  ) {
    cursor.classList.add('swipe');
    cursor.classList.remove('link');
  } else {
    cursor.classList.remove('link');
    cursor.classList.remove('swipe');
  }
};

export const preLoadImage = (url: string) =>
  new Promise((resolve, reject) => {
    const loadImg = new Image();
    loadImg.src = url;
    loadImg.onload = () => resolve(url);
    loadImg.onerror = (err) => reject(err);
  });

export const scrollToElement = (element: HTMLElement) => {
  if (element) {
    const headerOffset = 0;
    const elementPosition =
      window.pageYOffset + element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const tooSlowFallback = (
  setValue: React.Dispatch<React.SetStateAction<boolean>>,
  time: number
) => {
  setTimeout(() => {
    setValue(true);
  }, time);
};
