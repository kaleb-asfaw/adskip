function isAdUnskippable(){
  return !!document.querySelector(".ytp-ad-preview, .ytp-ad-preview-slot")
}
function clickSkipAdButton() {
  //For already 'skippable' ads (on these sides, everything is skippable hehe)
  const skipButton = document.querySelector(".ytp-ad-skip-button, .ytp-ad-overlay-close-button, .ytp-ad-skip-button-slot");
    if (skipButton) {
      skipButton.click();
    }
  }
  function accelerate(){
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.playbackRate = 15;
      videoElement.muted = true;
    }
  }
  function restoreNormal(){
    const videoElement = document.querySelector('video');
    if (videoElement){
      videoElement.playbackRate = 1;
      videoElement.muted = false;
    }
  }
  const checkInterval = 1000; // every 1000ms, a check will occur
  function isAdPlaying() {
    return !!document.querySelector('.ytp-ad-preview, .ytp-ad-preview-slot');
  }

  const adSkipChecker = setInterval(() => {
    const skipButton = document.querySelector(".ytp-ad-skip-button, .ytp-ad-overlay-close-button, .ytp-ad-skip-button-slot");
    const adCurrentlyPlaying = isAdPlaying();

    if (skipButton){
      clickSkipAdButton();
      wasAdPlaying = true;
    } else if (adCurrenlyPlaying || isAdUnskippable()){
      accelerate();
      wasAdPlaying = true;
    } else if (wasAdPlaying && !adCurrenlyPlaying) { 
      restoreNormal();
      wasAdPlaying = false;
    }
    
  }, checkInterval);
