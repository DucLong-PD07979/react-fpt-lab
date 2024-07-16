import { useState } from "react";

const useMedia = () => {
    const [play, setPlay] = useState(false);
    const [volume, setVolume] = useState(100);
    const [mute, setMute] = useState(false);

    const handleToglePlay = (elementRef) => {
        if (elementRef && elementRef.paused) {
            elementRef.play();
            setPlay(true);
        } else {
            elementRef.pause();
            setPlay(false);
        }
    };

    const handlePlusVolume = (elementRef) => {
        if (elementRef && elementRef.volume >= 0 && elementRef.volume <= 1) {
            elementRef.volume = elementRef.volume + 0.1;
            setVolume(elementRef.volume);
        }
    };

    const handleReducerVolume = (elementRef) => {
        if (elementRef && elementRef.volume >= 0 && elementRef.volume <= 1) {
            elementRef.volume = elementRef.volume - 0.1;
            setVolume(elementRef.volume);
        }
    };

    const handleTogleMute = (elementRef) => {
        if (elementRef) {
            if (elementRef.muted) {
                setMute(false);
                elementRef.muted = false;
            } else {
                setMute(true);
                elementRef.muted = true;
            }
        }
    };

    return {
        play,
        volume,
        mute,
        handleToglePlay,
        handlePlusVolume,
        handleReducerVolume,
        handleTogleMute,
    };
};

export default useMedia;
