import { RoleTypeEnum } from "@/enums/role-type-enum";

export type RoleType = (typeof RoleTypeEnum)[keyof typeof RoleTypeEnum];

export interface SystemState {
  role: RoleType;
  setRole: (role: RoleType) => void;
}
