import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  private cache: { [key: string]: any } = {};
  private keys: string[] = []

  set(key: string, value: any): void {
    this.cache[key] = value;
    this.keys.push(key)
  }

  get(key: string): any {
    return this.cache[key];
  }
  hasKey(key: string): boolean {
    let res = this.keys.indexOf(key)
    if (res == -1) return false
    return true
  }

  clear(): void {
    this.cache = {};
  }
}
