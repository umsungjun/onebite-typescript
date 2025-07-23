// any = 모든 or 아무거나를 의미
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any 타입과 다르게 unknown 타입은 타입이 추론되어야 특정 변수에 할당할 수 있다.
// 타입 정제 / 타입 좁히기(type narrowing)
if (typeof unknownVar === "number") {
  num = unknownVar;
}
