function clickSkipAdButton() {
    const skipButton = document.querySelector(".ytp-ad-skip-button");
    if (skipButton) {
      skipButton.click();
    }
  }

  const checkInterval = 1000; // every 1000ms, a check will occur
  
  const adSkipChecker = setInterval(() => {
    clickSkipAdButton();
 }, checkInterval);
  