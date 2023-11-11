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
  },
    images: {
      domains: ["res.cloudinary.com"],
    },
  };
  
  module.exports = nextConfig;



