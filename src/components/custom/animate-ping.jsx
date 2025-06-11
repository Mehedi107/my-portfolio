export default function AnimatePing() {
  return (
    <span className="relative flex size-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-color-4 opacity-75"></span>
      <span className="relative inline-flex size-2 rounded-full bg-color-4 "></span>
    </span>
  );
}
