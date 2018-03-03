import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHashtagsComponent } from './search-hashtags.component';

describe('SearchHashtagsComponent', () => {
  let component: SearchHashtagsComponent;
  let fixture: ComponentFixture<SearchHashtagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHashtagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHashtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
