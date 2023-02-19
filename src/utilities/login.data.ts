export interface LoginInterface {
  id: string;
  name: string;
  type: string;
}

export const loginFields: LoginInterface[] = [
  { id: "1", name: "email", type: "text" },
  { id: "2", name: "password", type: "password" },
];
