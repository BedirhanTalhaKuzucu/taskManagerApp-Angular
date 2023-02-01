import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#buttonClick() should toggle #buttonBackgroun', () => {
    expect(component.buttonBackgroun)
      .withContext('open at first')
      .toBe("red");
    component.buttonClick(component.openClose);
    expect(component.buttonBackgroun) 
      .withContext('on after click')
      .toBe("purple");
  });

  it('should raise boolen event when clicked (triggerEventHandler)', () => {
    let expectedCondition! : boolean;
    component.buttonValue.pipe(first()).subscribe((condition: boolean) => expectedCondition = condition);

    const button =  fixture.debugElement.query(By.css('.open-close-bar'));
    button.triggerEventHandler('click');
    expect(expectedCondition).toBe(false);

  });

  it('should be changed backgroundColor of button Element )', () => {

    const buttonDebug =  fixture.debugElement.query(By.css('.open-close-bar'));
    const buttonNative =buttonDebug.nativeElement

    expect(buttonNative.style.backgroundColor).toBe("red");
    
    buttonDebug.triggerEventHandler('click');
    fixture.detectChanges();

    expect(buttonNative.style.backgroundColor).toBe("purple");

  });
  
});
