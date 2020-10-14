import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UserdetailsService } from "../services/userdetails.service";
import { UsersListComponent } from "./users-list.component";

describe("UsersListComponent", () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let demoFetchUsersData: any;
  let demoUsersList: any;
  let mockService: any = jasmine.createSpyObj("UserdetailsService", [
    "getAllUsers",
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: UserdetailsService, useValue: mockService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockService = TestBed.get(UserdetailsService);
  });

  it("loadAllUsers(), should return all users", () => {
    expect(component.loadAllUser()).toBe();
    component.loadAllUser();
    // expect(component.allUser).toBe(UserdetailsService);
  });

  fit("loadAllUsers() using spyOn", () => {
    // const load = component.loadAllUser();
    // let mockSpy = spyOn(mockService, "getAllUsers");
    // component.ngOnInit();
    // expect(mockSpy).toHaveBeenCalled();
    mockService.getAllUsers.and.returnValue([1]);
    component.loadAllUser();
    expect(component.allUser).toBe([1]);
  });
});
