/**
 * Page-wide ambient lighting + faint grain, as ONE static fixed layer.
 * Intentionally not animated and not split into several layers: stacked full-screen fixed layers
 * are composited by the GPU on every frame and were a measurable scroll cost on laptop GPUs.
 */
export default function AmbientBackground() {
  return <div aria-hidden="true" className="ambient pointer-events-none fixed inset-0 -z-10" />;
}
