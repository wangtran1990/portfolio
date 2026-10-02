

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C1q7IDK_.js","_app/immutable/chunks/C3dbedsm.js","_app/immutable/chunks/bp6fn0eB.js"];
export const stylesheets = [];
export const fonts = [];
