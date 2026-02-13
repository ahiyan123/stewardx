let audioContext: AudioContext | null = null;
let oscillator: OscillatorNode | null = null;
let gainNode: GainNode | null = null;
let isPlaying = false;

export const initAudio = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
};

export const playAlarm = () => {
  if (isPlaying || !audioContext) return;

  oscillator = audioContext.createOscillator();
  gainNode = audioContext.createGain();

  oscillator.frequency.value = 440;
  oscillator.type = 'sine';

  gainNode.gain.value = 0.3;

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  isPlaying = true;

  setTimeout(() => {
    stopAlarm();
    setTimeout(() => playAlarm(), 500);
  }, 1000);
};

export const stopAlarm = () => {
  if (oscillator && isPlaying) {
    oscillator.stop();
    oscillator.disconnect();
    oscillator = null;
    isPlaying = false;
  }
};

export const stopAlarmPermanently = () => {
  stopAlarm();
  if (gainNode) {
    gainNode.disconnect();
    gainNode = null;
  }
};
