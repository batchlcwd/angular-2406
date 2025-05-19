import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() title: string = 'Task Tracker';

  // @ViewChild('titleSpan') titleSpanRef!: ElementRef;

  constructor() {
    console.log('footer component is created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //called right after first value of @input() is set.
    //before ngOnInit
    console.log('title init..');
    console.log(changes);
  }
  ngOnInit(): void {
    // called right the @ngOnChanges Finishes
    // good place to fetch , initalization logic
    // DOM is still not rendered yet
    console.log('API calling in ngOnInit');
  }

  ngDoCheck(): void {}
  ngAfterContentInit(): void {}
  ngAfterContentChecked(): void {}

  ngAfterViewInit(): void {
    // called after component view & child view are initialized
    //this is where dom is fully initalized
    //safe place to change dom
    // console.log('dom is fully inialized');
    // this.titleSpanRef.nativeElement.innerText = 'New Value';
    // this.titleSpanRef.nativeElement.style.color = 'red';
    // this.titleSpanRef.nativeElement.style.fontStyle = 'italic';
  }

  ngAfterViewChecked(): void {
    //called after the view have been checked by  change detector
  }

  ngOnDestroy(): void {
    // just before destroy
    console.log('footer is going to die');
  }

  // lifecyclet methods
}
