import { Control, FieldValues, Path } from "react-hook-form";

export interface CustomInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  isPassword?: boolean;
}
