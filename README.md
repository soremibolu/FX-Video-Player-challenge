# FX Video Player Challenge


## Live demo of completed full challenge
https://fx-video-player-challenge.surge.sh/

## Starter Code
The initial code is basically the solution of what we did in the last video player training session.

We have a working video player with:

- very basic custom controls, just play/pause button
- ability to load/destroy player (simulating a normal playback session)
- multiple subtitles support
- custom subtitle displayer

## Tasks
1. Add the functionality to jump 5s with the ff/rewind buttons. The buttons and the handlers for the click events are already set up for you.

- **resources:**
    - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime
<br>
2. The UI has elements to show the current time and the duration of the video, but they don't get updated and just show 00:00. Fix it!

- **tips:**
    - use `parseTime()` method from `utils.js` to parse the time to the correct `mm:ss` format
- **resources:**
    - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/duration
    - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event
    - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime
<br>
3. Add multiple audio tracks support. Do a very similar thing to what we did with the subtitle tracks, but this time with the audio tracks.

- **tips:**
    - use the method `getAudioLanguages()` from Shaka Player in a very similar fashion to how we use Shaka's `getTextTracks`
    - You'll find some guidance in `shaka.js` on the steps you must follow to pull the audio tracks from Shaka Player and push them to the UI.
- **resources:**
    - https://shaka-player-demo.appspot.com/docs/api/shaka.Player.html


**BONUS**:
The client wants to launch the product to a new device with very low specs called `crapDevice`. We start testing and we find that after a few seconds playing a video, the app becomes unresponsive. The only way to get the app running again is to reboot the device.

Your task is to test if capping the resolution of the video to low resolution (e.g. 180x144 available in the manifest) will fix the issue.

We only want this resolution cap when the url parameter `deviceType=crapDevice`.
- **tips**:
    - use the method `getDeviceType()` from `utils.js` to get the `deviceType` param from the url
    - figure out how to cap the resolution using Shaka configuration
- **resources:**
    - https://shaka-player-demo.appspot.com/docs/api/shaka.extern.html#.Restrictions
    - https://shaka-player-demo.appspot.com/docs/api/lib_abr_simple_abr_manager.js.html#line160
- **how do I know if the resolution is being capped?:** you can check that in the network requests being made. You'll see that the player is requesting low resolution segments:
<img width="744" alt="low_res_segments" src="https://user-images.githubusercontent.com/37695542/190354770-be23fc90-96b4-4e56-93cc-c8f16b359dcb.png">
