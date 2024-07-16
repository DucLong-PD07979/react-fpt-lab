import { useRef } from "react";
import "./App.css";
import useMedia from "./hook/useMedia";

function App() {
    const audioRef = useRef(null);
    const {
        play,
        volume,
        mute,
        handleToglePlay,
        handlePlusVolume,
        handleReducerVolume,
        handleTogleMute,
    } = useMedia({ audioRef });

    return (
        <div>
            <div className="controller-media">
                <button onClick={() => handleToglePlay(audioRef.current)}>
                    {play ? "dừng" : "phát"}
                </button>
                <button onClick={() => handleTogleMute(audioRef.current)}>
                    {mute ? "Bật tiếng" : "Tắt tiếng"}
                </button>
                <button onClick={() => handlePlusVolume(audioRef.current)}>
                    Tăng âm lượng thành {volume}
                </button>
                <button onClick={() => handleReducerVolume(audioRef.current)}>
                    Giam âm lượn thành {volume}
                </button>
            </div>
            <audio controls ref={audioRef}>
                <source
                    src="../public/media/PC-10-Ngan-Nam-Prod-Duckie-Official-Audio-mp3-PC.mp3"
                    type="audio/mpeg"
                ></source>
            </audio>
        </div>
    );
}

export default App;
