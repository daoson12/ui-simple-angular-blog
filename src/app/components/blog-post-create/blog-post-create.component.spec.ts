import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostCreateComponent } from './blog-post-create.component';

describe('BlogPostCreateComponent', () => {
  let component: BlogPostCreateComponent;
  let fixture: ComponentFixture<BlogPostCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostCreateComponent]
    });
    fixture = TestBed.createComponent(BlogPostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
