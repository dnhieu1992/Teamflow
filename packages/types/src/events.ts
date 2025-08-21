export type AppEvent =
  | { type: "OPEN_PROFILE"; payload: { userId: string } }
  | { type: "OPEN_CHAT"; payload: { withUserId: string } };

export function emit(event: AppEvent) {
  window.dispatchEvent(new CustomEvent("app:event", { detail: event }));
}
export function onEvent(handler: (e: AppEvent) => void) {
  const fn = (e: Event) => handler((e as CustomEvent).detail);
  window.addEventListener("app:event", fn);
  return () => window.removeEventListener("app:event", fn);
}