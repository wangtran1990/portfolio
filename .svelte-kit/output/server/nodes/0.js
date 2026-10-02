

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Bk0M9mEb.js","_app/immutable/chunks/C3dbedsm.js","_app/immutable/chunks/bp6fn0eB.js"];
export const stylesheets = ["_app/immutable/assets/0.MqetK_og.css"];
export const fonts = [];
