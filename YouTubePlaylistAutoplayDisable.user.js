// ==UserScript==
// @name        Playlist Autoplay needs to stay OFF!
// @version     0.03
// @description Why won't it stay OFF?!? This will turn playlist autoplay off from time to time
// @include     http://*.youtube.com/watch?*
// @include     https://*.youtube.com/watch?*
// @run-at      document-end
// @copyright   2014, Claudius Steinhauser
// ==/UserScript==

if(typeof onYouTubePlayerReady === 'function'){
    //does not seem to be needed with Tampermonkey, uncomment if you want it:
    return;
    //causes a hang/recursion when YoutubeCenter was loaded first
    if(!(typeof ytcenter === 'object'))
        ap_old_onYouTubePlayerReady = onYouTubePlayerReady;
}

onYouTubePlayerReady = function(ytplayerobj){
    if(console) console.log('YT AutoPlay Off loads...');
    ytplayerobj.addEventListener('onStateChange', function(){
        if((apbut = document.querySelectorAll('.playlist-nav-controls .yt-uix-button-player-controls.toggle-autoplay')) && (apbut = apbut[0]) && apbut.classList.contains('yt-uix-button-toggled')){
            if(console) console.log('YT AutoPlay Off toggles Autoplay off...');
            apbut.click();
        }
    }, false);
    if(typeof ap_old_onYouTubePlayerReady === 'function'){
        return ap_old_onYouTubePlayerReady(ytplayerobj);
    }
};
