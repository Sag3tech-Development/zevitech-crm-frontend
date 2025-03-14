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

export interface SectionalHeading01Props {
  titleClassName?: string;
  titleColor: string;
  title: string;
  subTitle: string;
}

export interface SearchInputProps {
  filteredInput: string;
  setFilteredInput: (value: string) => void;
  placeholderText: string;
  onSearch: (query: string) => void;
}

export interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}
