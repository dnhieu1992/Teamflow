export async function loadRemoteManifest() {
  const res = await fetch("/remotes.json", { cache: "no-store" });
  return res.json() as Promise<{[k:string]: string}>; // { mfe_feed: "https://cdn/…/remoteEntry.js" }
}