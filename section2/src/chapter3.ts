let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// readonly 속성을 사용하면 객체의 값을 변경할 수 없다.
// config.apiKey = "hacked";
