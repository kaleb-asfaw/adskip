function clickSkipAdButton() {
    const skipButton = document.querySelector(".ytp-ad-skip-button, .ytp-ad-overlay-close-button, .ytp-ad-skip-button-slot"); // patch for the Chrome 120 Beta update
    if (skipButton) {
      skipButton.click();
    }
  }

  const checkInterval = 1000; // every 1000ms, a check will occur
  
  const adSkipChecker = setInterval(() => {
    clickSkipAdButton();
 }, checkInterval);
