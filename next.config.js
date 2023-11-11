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
  },
    images: {
      domains: ["res.cloudinary.com"],
    },
  };
  
  module.exports = nextConfig;



