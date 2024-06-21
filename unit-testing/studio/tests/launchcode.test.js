// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("should have organization value as nonprofit", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("should have executiveDirector as jeff", () => {
     expect (launchcode.executiveDirector).toBe("Jeff");
  });
  test("checks value of percentageCoolEmployees", () => {
    expect (launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should have 3 programsOffered as Web Development, Data Analysis, Liftoff", () => {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered).toHaveLength(3);

  });
  test("should return 'Launch!' if number is divisible by 2 but not 3 or 5", () => {
    let output = launchcode.launchOutput(4);
    expect(output).toBe("Launch!");
  });
  test("should return 'Code!' if number is only divisible by 3",() => {
    let output = launchcode.launchOutput(9);
    expect(output).toBe("Code!");
  });
  test("should return 'Rocks!' if number is only divisible by 5",() => {
    let output = launchcode.launchOutput(25);
    expect(output).toBe("Rocks!");
  });
  test("should return 'LaunchCode!' if number is divisible by 2 and 3",() => {
    let output = launchcode.launchOutput(6);
    expect(output).toBe("LaunchCode!");
  });
  test("should return 'Code Rocks!' if number is divisible by 3 and 5",() => {
    let output = launchcode.launchOutput(15);
    expect(output).toBe("Code Rocks!");
  });
});