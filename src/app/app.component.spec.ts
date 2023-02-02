import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created header component', () => {
    const { debugElement } = fixture;
    const header = debugElement.query(By.css('app-header'));
    expect(header).toBeTruthy();
  });

  it('listens for OpenClose Value changes', () => {
    const { debugElement } = fixture;
    const header = debugElement.query(By.css('app-header'));

    header.triggerEventHandler('buttonValue', false);

    expect(component.openClose)
    .withContext('on after click button')
    .toBe(false);


  });


  it('should be not created taskForm element on after click openCloseButton', () => {
    const { debugElement } = fixture;
    const header = debugElement.query(By.css('app-header'));

    header.triggerEventHandler('buttonValue', false);
    fixture.detectChanges();

    const taskForm = debugElement.query(By.css('app-task-form'));
    expect(taskForm)
    .withContext('on after click button')
    .toBeNull();

  });

//   it('should raise boolen event when clicked (triggerEventHandler)', () => {
//     let expectedCondition! : boolean;
//     component.buttonValue.pipe(first()).subscribe((condition: boolean) => expectedCondition = condition);

//     const button =  fixture.debugElement.query(By.css('.open-close-bar'));
//     button.triggerEventHandler('click');
//     expect(expectedCondition).toBe(false);

//   });

//   it('should be changed backgroundColor of button Element )', () => {

//     const buttonDebug =  fixture.debugElement.query(By.css('.open-close-bar'));
//     const buttonNative =buttonDebug.nativeElement

//     expect(buttonNative.style.backgroundColor).toBe("red");
    
//     buttonDebug.triggerEventHandler('click');
//     fixture.detectChanges();

//     expect(buttonNative.style.backgroundColor).toBe("purple");

//   });
  
});
