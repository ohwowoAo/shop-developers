export type appData = {
  id: number;
  name: string;
  version: string;
  type?: "Web" | "Android" | "IOS";
  status: "제작중" | "심사중" | "심사반려" | "판매중" | "판매종료";
};

export const appDummyData: appData[] = [
  { id: 1, name: "test", version: "API Ver", status: "제작중" },
  { id: 2, name: "demo", version: "API Ver", status: "심사중" },
  { id: 3, name: "myApp", version: "API Ver", status: "판매중" },
];
