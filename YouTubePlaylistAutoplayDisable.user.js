// ==UserScript==
// @name        Playlist Autoplay needs to stay OFF!
// @author      Claudius Steinhauser
// @version     0.06
// @description Why won't it stay OFF?!? This will turn playlist autoplay off from time to time
// @include     http://*.youtube.com/watch?*
// @include     https://*.youtube.com/watch?*
// @run-at      document-end
// @copyright   2014, Claudius Steinhauser
// @namespace   clst
// ==/UserScript==

//does not seem to be needed with Tampermonkey, uncomment if you want it:
/*
if(typeof onYouTubePlayerReady === 'function'){
    //causes a hang/recursion when YoutubeCenter was loaded first
    if(!(typeof ytcenter === 'object'))
        ap_old_onYouTubePlayerReady = onYouTubePlayerReady;
}
*/

window.onYouTubePlayerReady = onYouTubePlayerReady = function(ytplayerobj){
    if(console) console.log('YT AutoPlay Off loads...');
    ytplayerobj.addEventListener('onStateChange', ytaptogglefunc = function(){
        if((apbut = document.querySelectorAll('.playlist-nav-controls .yt-uix-button-player-controls.toggle-autoplay')) && (apbut = apbut[0]) && apbut.classList.contains('yt-uix-button-toggled')){
            if(console) console.log('YT AutoPlay Off toggles Autoplay off in 1 second...');
            window.setTimeout(function(){apbut.click()},1000);
        }
    }, false);
    ytaptogglefunc();
    if(typeof ap_old_onYouTubePlayerReady === 'function'){
        return ap_old_onYouTubePlayerReady(ytplayerobj);
    }
};
