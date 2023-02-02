import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first, of } from 'rxjs';

import { AppComponent } from './app.component';
import { TasklistService } from './core/services/tasklist.service';



describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let taskListService: TasklistService;
    let compTaskListService : TasklistService;

    const taskListStub = [
        {
            text: "Study Angular Test",
            day: "Feb 5th at 2:30pm",
            isDone: true,
            id: 4
        }
    ];

    beforeEach(async () => {
        
        const taskListService = jasmine.createSpyObj('TaskListService', ['getTaskList']);
        const getTaskList = taskListService.getTaskList.and.returnValue(of(taskListStub));

        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [ { provide: TasklistService, useValue: taskListService } ],
        })
        .compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        // taskListService = fixture.debugElement.injector.get(TasklistService);
        // compTaskListService= taskListService

        // taskListService = TestBed.inject(TasklistService)

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

    it('should display task from TaskList', () => {
        fixture.detectChanges();

        expect(component.taskList)
        .withContext('"component taskList is equal TaskList form Service"')
        .toEqual(taskListStub);
       
    });


});
