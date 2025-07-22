// 객체 리터럴 타입
type Dog = {
  age: number;
  name: string;
};

let dog: Dog = {
  age: 3,
  name: "멍멍이",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 1,
  UnitedState: 2,
  UnitedKingdom: 3,
};
