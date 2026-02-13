"use client";

import { useState, useRef, useCallback, useEffect, forwardRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./VideoPlayer.module.css";

export interface VideoPlayerProps {
    src: string;
    thumbnailUrl?: string;
    size?: "sm" | "md" | "lg";
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    className?: string;
}

export const VideoPlayer = forwardRef<HTMLDivElement, VideoPlayerProps>(
    (
        {
            src,
            thumbnailUrl,
            size = "md",
            autoPlay = false,
            muted = false,
            loop = false,
            className,
        },
        ref,
    ) => {
        const videoRef = useRef<HTMLVideoElement>(null);
        const [playing, setPlaying] = useState(autoPlay);
        const [progress, setProgress] = useState(0);
        const [duration, setDuration] = useState(0);
        const [currentTime, setCurrentTime] = useState(0);
        const [showControls, setShowControls] = useState(true);
        const [started, setStarted] = useState(autoPlay);
        const [volume, setVolume] = useState(muted ? 0 : 1);
        const [isFullscreen, setIsFullscreen] = useState(false);
        const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

        const togglePlay = useCallback(() => {
            const v = videoRef.current;
            if (!v) return;
            if (!started) setStarted(true);
            if (v.paused) {
                v.play();
                setPlaying(true);
            } else {
                v.pause();
                setPlaying(false);
            }
        }, [started]);

        const handleTimeUpdate = useCallback(() => {
            const v = videoRef.current;
            if (!v || !v.duration) return;
            setCurrentTime(v.currentTime);
            setProgress((v.currentTime / v.duration) * 100);
        }, []);

        const handleLoadedMetadata = useCallback(() => {
            const v = videoRef.current;
            if (v) setDuration(v.duration);
        }, []);

        const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
            const v = videoRef.current;
            if (!v) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const ratio = (e.clientX - rect.left) / rect.width;
            v.currentTime = ratio * v.duration;
        }, []);

        const toggleMute = useCallback(() => {
            const v = videoRef.current;
            if (!v) return;
            if (v.volume > 0) {
                v.volume = 0;
                setVolume(0);
            } else {
                v.volume = 1;
                setVolume(1);
            }
        }, []);

        const toggleFullscreen = useCallback(() => {
            const el = videoRef.current?.parentElement;
            if (!el) return;
            if (!document.fullscreenElement) {
                el.requestFullscreen?.();
                setIsFullscreen(true);
            } else {
                document.exitFullscreen?.();
                setIsFullscreen(false);
            }
        }, []);

        const handleMouseMove = useCallback(() => {
            setShowControls(true);
            clearTimeout(hideTimer.current);
            if (playing) {
                hideTimer.current = setTimeout(() => setShowControls(false), 2500);
            }
        }, [playing]);

        useEffect(() => {
            return () => clearTimeout(hideTimer.current);
        }, []);

        const fmt = (s: number) => {
            const m = Math.floor(s / 60);
            const sec = Math.floor(s % 60);
            return `${m}:${sec.toString().padStart(2, "0")}`;
        };

        return (
            <div
                ref={ref}
                className={cn(styles.player, styles[`player_${size}`], className)}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => playing && setShowControls(false)}
            >
                {/* Thumbnail overlay */}
                {!started && thumbnailUrl && (
                    <div className={styles.thumbnail} onClick={togglePlay}>
                        <img src={thumbnailUrl} alt="Video thumbnail" className={styles.thumbnailImg} />
                        <button className={styles.playBtnLarge} aria-label="Play video">
                            <PlayIcon />
                        </button>
                    </div>
                )}

                <video
                    ref={videoRef}
                    src={src}
                    className={styles.video}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setPlaying(false)}
                    autoPlay={autoPlay}
                    muted={muted}
                    loop={loop}
                    playsInline
                    onClick={togglePlay}
                />

                {/* Controls bar */}
                {started && (
                    <div className={cn(styles.controls, showControls && styles.controlsVisible)}>
                        <button className={styles.controlBtn} onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
                            {playing ? <PauseIcon /> : <PlaySmallIcon />}
                        </button>

                        <span className={styles.time}>{fmt(currentTime)}</span>

                        <div className={styles.progressTrack} onClick={handleSeek}>
                            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                        </div>

                        <span className={styles.time}>{fmt(duration)}</span>

                        <button className={styles.controlBtn} onClick={toggleMute} aria-label={volume === 0 ? "Unmute" : "Mute"}>
                            {volume === 0 ? <MuteIcon /> : <VolumeIcon />}
                        </button>

                        <button className={styles.controlBtn} onClick={toggleFullscreen} aria-label="Fullscreen">
                            <FullscreenIcon />
                        </button>
                    </div>
                )}
            </div>
        );
    },
);

VideoPlayer.displayName = "VideoPlayer";

/* ── Inline SVG Icons ── */
function PlayIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)" />
            <path d="M19 15L33 24L19 33V15Z" fill="white" />
        </svg>
    );
}

function PlaySmallIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 2L14 8L4 14V2Z" fill="currentColor" />
        </svg>
    );
}

function PauseIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="3" y="2" width="4" height="12" rx="1" fill="currentColor" />
            <rect x="9" y="2" width="4" height="12" rx="1" fill="currentColor" />
        </svg>
    );
}

function VolumeIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 6H5L9 2V14L5 10H2V6Z" fill="currentColor" />
            <path d="M11 5.5C11.8 6.3 12.3 7.5 12.3 8S11.8 9.7 11 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function MuteIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 6H5L9 2V14L5 10H2V6Z" fill="currentColor" />
            <path d="M12 6L14 8M14 6L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function FullscreenIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 6V3C2 2.4 2.4 2 3 2H6M10 2H13C13.6 2 14 2.4 14 3V6M14 10V13C14 13.6 13.6 14 13 14H10M6 14H3C2.4 14 2 13.6 2 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
