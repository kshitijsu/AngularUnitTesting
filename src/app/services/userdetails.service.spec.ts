import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { getTestBed, TestBed } from "@angular/core/testing";

import { UserdetailsService } from "./userdetails.service";

describe("UserdetailsService", () => {
  let injector: TestBed;
  let userService: UserdetailsService;
  let httpMock: HttpTestingController;
  let mockUserData: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserdetailsService],
    });

    injector = getTestBed();
    userService = injector.get(UserdetailsService);
    httpMock = injector.get(HttpTestingController);

    mockUserData = {
      data: [
        {
          Id: 4512,
          Name: "Rahul",
          City: "Delhi",
        },
        {
          Id: 5656,
          Name: "Mihir",
          City: "Agra",
        },
        {
          Id: 8451,
          Name: "Mohan",
          City: "Meerut",
        },
        {
          Id: 8956,
          Name: "Raju",
          City: "Mumbai",
        },
      ],
    };
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    const service: UserdetailsService = TestBed.get(UserdetailsService);
    expect(service).toBeTruthy();
  });

  xit("should GET a list of user details", () => {
    userService.getAllUsers().subscribe((userData) => {
      expect(userData[0]).toEqual(mockUserData);
    });
    const request = httpMock.expectOne(
      // "http://localhost:57113/api/UserDetails"

      // Mock API
      "https://a548cef0-ab23-42c7-85d8-d6dc299117fd.mock.pstmn.io/userslist"
    );
    request.flush([mockUserData]);
    httpMock.verify();
  });
});

// it("getAllUsers(), should return data", () => {
//   userService.getAllUsers().subscribe((res) => {
//     expect(res).toEqual(dummyUserDetails);
//   });
//   const req = httpMock.expectOne("http://localhost:57113/api/UserDetails");
//   expect(req.request.method).toBe("GET");
//   req.flush(dummyUserDetails);
// });
