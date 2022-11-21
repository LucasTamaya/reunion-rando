import * as Yup from "yup";

export const connexionSchema = Yup.object({
  email: Yup.string().email("E-mail invalide").required("Requis"),
  password: Yup.string()
    .min(5, "Le mot de passe doit contenir au moins 5 caractères")
    .required("Requis"),
}).required();

export const inscriptionSchema = Yup.object({
  lastname: Yup.string().required("Requis"),
  firstname: Yup.string().required("Requis"),
  email: Yup.string().email("E-mail invalide").required("Requis"),
  password: Yup.string()
    .min(5, "Le mot de passe doit contenir au moins 5 caractères")
    .required("Requis"),
  role: Yup.string()
    .oneOf(["particulier", "prestataire"], "Option invalide")
    .required("Requis"),
}).required();
