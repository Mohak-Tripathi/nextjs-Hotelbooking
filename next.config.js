/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit-v2",
    DB_URI: "",

    CLOUDINARY_CLOUD_NAME: "dtujqgpzg",
    CLOUDINARY_API_KEY: "128418387286747",
    CLOUDINARY_API_SECRET: "ERr5b9VFBccaIJ0ZPLm79gIBtw4",

    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "KSDFJKLSDJFLKSDFJSLDKF934KJLDJGDLKGFJDF",

    SMTP_HOST: "sandbox.smtp.mailtrap.io",
    SMTP_PORT: 2525,
    SMTP_USER:  "6b56674b1d8c3d",
    SMTP_PASSWORD: "2b66b49d9f2f5d",
    SMTP_FROM_EMAIL: "noreply@bookit.com",
    SMTP_FROM_NAME: "BookIT",

    MAPBOX_ACCESS_TOKEN: "pk.eyJ1IjoibW9oYWt0cmlwYXRoaSIsImEiOiJjbG92MjI1NHYwbmppMmpxd3Q4ZjVwb2N6In0._ncB1PA31p4_7JLjVNGi-w",
    

    GEOCODER_API_KEY: "TTivyACZzeZZZusQysKyC1Khrl1NRFWV",
    GEOCODER_PROVIDER: "mapquest",

  },
    images: {
      domains: ["res.cloudinary.com"],
    },
  };
  
  module.exports = nextConfig;



