import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  // mobileQuery: MediaQueryList;

  // // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  // fillerNav = [
  //   {name: "home", route:"",icon:""},
  //   {name: "Perfil", route:"",icon:""},
  //   {name: "Empleados", route:"",icon:""}
  // ];
  // fillerContent = Array.from({length: 50}, () =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  // private _mobileQueryListener: () => void;

  // constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  //   this.mobileQuery = media.matchMedia('(max-width: 600px)');
  //   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  //   this.mobileQuery.addListener(this._mobileQueryListener);
  // }

  // ngOnDestroy(): void {
  //   this.mobileQuery.removeListener(this._mobileQueryListener);
  // }

  // shouldRun = true;

  ngOnInit(): void {
  }

}