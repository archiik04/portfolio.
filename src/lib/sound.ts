/**
 * A short switch click, synthesised rather than shipped as a file: two layers,
 * a filtered noise transient for the attack and a quick pitched body under it.
 * Going dark drops the pitch, going light lifts it, so the two directions are
 * distinguishable without being a different sound.
 */

let ctx: AudioContext | null = null;
let noise: AudioBuffer | null = null;

const context = () => {
  if (!ctx) {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  // Browsers start the context suspended until a gesture; a click is one
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
};

const noiseBuffer = (audio: AudioContext) => {
  if (noise) return noise;
  const length = Math.floor(audio.sampleRate * 0.02);
  noise = audio.createBuffer(1, length, audio.sampleRate);
  const channel = noise.getChannelData(0);
  for (let i = 0; i < length; i += 1) {
    // fades across the buffer so the burst already has a shape
    channel[i] = (Math.random() * 2 - 1) * (1 - i / length);
  }
  return noise;
};

export const playSwitch = (goingDark: boolean) => {
  const audio = context();
  if (!audio) return;

  const now = audio.currentTime;
  const pitch = goingDark ? 420 : 660;

  const out = audio.createGain();
  out.gain.value = 0.5;
  out.connect(audio.destination);

  // 1. the tick
  const burst = audio.createBufferSource();
  burst.buffer = noiseBuffer(audio);

  const burstFilter = audio.createBiquadFilter();
  burstFilter.type = 'bandpass';
  burstFilter.frequency.value = 2600;
  burstFilter.Q.value = 0.8;

  const burstGain = audio.createGain();
  burstGain.gain.setValueAtTime(0.09, now);
  burstGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

  burst.connect(burstFilter).connect(burstGain).connect(out);
  burst.start(now);
  burst.stop(now + 0.04);

  // 2. the body it lands on
  const tone = audio.createOscillator();
  tone.type = 'triangle';
  tone.frequency.setValueAtTime(pitch, now);
  tone.frequency.exponentialRampToValueAtTime(pitch * 0.72, now + 0.09);

  const toneFilter = audio.createBiquadFilter();
  toneFilter.type = 'lowpass';
  toneFilter.frequency.value = 2000;

  const toneGain = audio.createGain();
  toneGain.gain.setValueAtTime(0.0001, now);
  toneGain.gain.exponentialRampToValueAtTime(0.07, now + 0.008);
  toneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);

  tone.connect(toneFilter).connect(toneGain).connect(out);
  tone.start(now);
  tone.stop(now + 0.12);
};
