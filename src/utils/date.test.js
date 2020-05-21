const { readableDate, printReadbleDateRange } = require("./dates");

describe("readableDate(): no formatting specified", () => {
  it("should return proper string with default output", () => {
    expect(readableDate({ timestamp: "2020-05-01" })).toEqual("May 01, 2020");
  });
});

describe("readableDate(): when provided month year and date", () => {
  it("should return proper output", () => {
    expect(
      readableDate({ timestamp: "2020-05-01", format: "DD MMM YYYY" })
    ).toEqual("May 01, 2020");
  });
});

describe("printReadbleDateRange(): two dates provided", () => {
  it("should return proper output", () => {
    expect(
      printReadbleDateRange({
        startDate: "2020-05-01",
        endDate: "2020-10-01",
      })
    ).toEqual("May 01, 2020 - October 01, 2020");
  });
});

describe("printReadbleDateRange(): isActive is true without providing endDate", () => {
  it("should return proper output", () => {
    expect(
      printReadbleDateRange({
        startDate: "2020-05-01",
        isActive: true,
      })
    ).toEqual("May 01, 2020 - Present");
  });
});

describe("printReadbleDateRange(): isActive is true with endDate provided", () => {
  it("should return proper output", () => {
    expect(
      printReadbleDateRange({
        startDate: "2020-05-01",
        endDate: "2020-10-01",
        isActive: true,
      })
    ).toEqual("May 01, 2020 - Present");
  });
});

describe("printReadbleDateRange(): isActive is true with customized active label", () => {
  it("should return proper output", () => {
    expect(
      printReadbleDateRange({
        startDate: "2020-05-01",
        endDate: "2020-10-01",
        isActive: true,
        isActiveLabel: "Active",
      })
    ).toEqual("May 01, 2020 - Active");
  });
});
