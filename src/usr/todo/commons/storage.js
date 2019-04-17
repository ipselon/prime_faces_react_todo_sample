import localforage from 'localforage';

export function initStorage() {
  localforage.config({
    name: 'ToDo'
  });
}

let storageInstance;

function getStorageInstance() {
  if (!storageInstance) {
    initStorage();
    storageInstance = localforage.createInstance({
      name: 'toDoStorage',
    });
  }
  return storageInstance;
}

export async function getStorageItem(itemKey) {
  return getStorageInstance().getItem(itemKey);
}

export async function setStorageItem(itemKey, data) {
  return getStorageInstance().setItem(itemKey, data);
}
