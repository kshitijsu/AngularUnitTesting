import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserComponent } from "./user.component";

describe("UserComponent", () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Checking Username", () => {
    expect(component.userName).toBe("Kshitij");
  });

  it("Should return sum of two numbers", () => {
    expect(component.sum(10, 24)).toBe(34);
  });

  it("CHecking HTML Element,  Should Display 'Addition of Two Numbers'", () => {
    const collection = fixture.nativeElement;
    expect(collection.querySelector(".add").textContent).toContain("Addition");
  });
});
