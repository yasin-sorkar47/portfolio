const path = require("path");

module.exports = {
  // output: "export",
  // exportTrailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com", "media.dev.to", "i.ibb.co.com"],
  },
};
