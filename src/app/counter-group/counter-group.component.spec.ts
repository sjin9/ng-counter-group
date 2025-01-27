import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent } from '../counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let counterComponent: CounterComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sum increase when increase counter', () => {
    const initialSum = component.sum
    const incrementValue=3
    component.counters[0].num += incrementValue

    expect(component.sum).toEqual(initialSum+incrementValue)
  })

  it('should add a counter when call onAdd', () => {
    let initialCounterCount = component.counters.length
    component.onAdd()

    expect(component.counters.length).toEqual(initialCounterCount + 1)
  })

  it('should remove a counter when call removeCounter', () => {
    let initialCounterCount = component.counters.length
    component.removeCounter(0)

    expect(component.counters.length).toEqual(initialCounterCount - 1)
  })

  it('should reset numbers in counters to 0 when call resetSum', () => {
    component.reset()
    const resetSum = component.sum
    expect(resetSum).toBe(0)

    component.counters.forEach(counter => {
      expect(counter.num).toBe(0)
    })
  })
});
