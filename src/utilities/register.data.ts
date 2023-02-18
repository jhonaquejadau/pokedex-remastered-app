interface RegisterFields {
  id: string;
  name: string;
  type: string;
}

export const registerFields: RegisterFields[] = [
  { id: "1", name: "name", type: "text" },
  { id: "2", name: "nickname", type: "text" },
  { id: "3", name: "email", type: "text" },
  { id: "4", name: "password", type: "password" },
];
