import { requireNativeModule } from 'expo-modules-core';
const ArcxpModule = requireNativeModule('ArcXpModule');

export async function initialize() {
  return ArcxpModule.initialize();
}

export async function getStory(id: string) {
  return await ArcxpModule.getStory(id);
}

export async function getCollection(alias: string) {
  return await ArcxpModule.getCollection(alias);
}
