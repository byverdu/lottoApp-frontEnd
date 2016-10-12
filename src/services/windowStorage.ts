import { WindowStoreInterface } from '../interfaces/WindowStoreInterface';

export default class WindowStorage implements WindowStoreInterface {
  private localStorageSupported: boolean;
  constructor(public windowStorage ) {
    this.localStorageSupported = typeof window['localStorage'] != 'undefined' && window['localStorage'] != null;
    this.windowStorage = localStorage;
    console.log(this.localStorageSupported)
  }
  public setWindowStorage(name: string, item: Object) {
    if ( this.localStorageSupported ) {
      if ( this.getWindowStorage(name) !== null ) {
        const oldValue = this.getWindowStorage(name);
        oldValue.push(item);

        return this.windowStorage.setItem( name, JSON.stringify( oldValue ));
      }
      return;
    }
  }
  public getWindowStorage(name: string) {
    if ( this.localStorageSupported ) {
      if ( this.windowStorage.getItem(name) === null ) {
        return [];
      }
      return [...JSON.parse( this.windowStorage.getItem( name ))];
    }
  }

  public removeItemWindowStorage(name: string, position: number) {
    const tempStore = this.getWindowStorage(name);
    tempStore.splice(position, 1);
    return this.windowStorage.setItem( name, JSON.stringify(tempStore));
  }
}
