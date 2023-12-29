import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BurgerMenuService {
  private $toggleBurgerMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public toggleBurgerMenu$: Observable<boolean> = this.$toggleBurgerMenu.asObservable()
  public toggleBurgerMenu: boolean = false;
  constructor() { }

  showMenu(){
    this.toggleBurgerMenu = true;
    this.$toggleBurgerMenu.next(true)
  }
  hideMenu(){
    this.toggleBurgerMenu = false;
    this.$toggleBurgerMenu.next(false)
  }

  toggleMenu(){
    this.$toggleBurgerMenu.next(!this.toggleBurgerMenu);
    this.toggleBurgerMenu = !this.toggleBurgerMenu;
  }
}
