import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostViewComponent } from './blog-post-view.component';

describe('BlogPostViewComponent', () => {
  let component: BlogPostViewComponent;
  let fixture: ComponentFixture<BlogPostViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostViewComponent]
    });
    fixture = TestBed.createComponent(BlogPostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
