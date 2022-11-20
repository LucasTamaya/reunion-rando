import * as Yup from "yup";

export const connexionSchema = Yup.object({
  email: Yup.string().email("Addresse e-mail incorrecte").required("Requis"),
  password: Yup.string()
    .min(5, "Le mot de passe doit contenir au moins 5 caractères")
    .required("Requis"),
}).required();
