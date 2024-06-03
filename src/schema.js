import * as yup from "yup";

//metin icerisinde en az
// 1 buyuk harf
// 1 kucuk harf
// 1 sayi
// 1 ozel karakter
// olma durumunu kontrol eder.
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

// validasyon semasi
//inputlardaki degerlerin gecerli olabilmesi icin gerekli olan kosullar
export const schema = yup.object().shape({
  //bir alan ismi ve o alanin gecerli olmasi icin gerekli olan kosullar taanimlanmali
  email: yup
    .string()
    .email("Email gecerli bir formatta degil.")
    .required("Email zorunlu bir alan!"),

  //yas alaninin gecerli olmasi icin gerekli kosullae

  age: yup
    .number()
    .min(18, "Yas 18'den kucuk olamaz.")
    .max(100, "Yas 100'den buyuk olamaz.")
    .integer("Lutfen tam sayi degerini giriniz.")
    .required("Yas zorunlu bir alan!"),

  //sifre alani icin kosullari belirleme
  password: yup
    .string()
    .min(5, "Sifreniz en az 8 karakter icermelidir.")
    .matches(regex, "Sifreniz yeterince guclu degil.")
    .required("Sifre zorunlu bir alan!"),

  //Password Onaylama alani
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Onay sifreniz eslesmiyor")
    .required("Lutfen sifrenizi dogrulayin.."), //kontol ettigimiz inputtaki verinin verdigimiz degerlerden biriyle esit olmasini bekler.
});

//Not: butun yup kontrol methodlari parametre olarak hata mesajini alir

//email: yup.string().email("Email gecerli bir formatta degil").required(),
