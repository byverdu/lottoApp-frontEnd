export interface WindowStoreInterface {
  windowStorage: WindowLocalStorage;
  setWindowStorage(name: string, item: Object): WindowLocalStorage;
  getWindowStorage(name: string): Array<any>;
  removeItemWindowStorage(name: string, position: number): WindowLocalStorage;
}
