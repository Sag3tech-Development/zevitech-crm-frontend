import { z } from "zod";

import { AuthenticationFormSchema } from "@/schemas/authentication-form-schema";

export type AuthenticationFormData = z.infer<typeof AuthenticationFormSchema>;
