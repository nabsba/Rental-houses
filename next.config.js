/** @type {import('next').NextConfig} */

const withWorkbox = require("next-with-workbox");
 
module.exports = withWorkbox({
	 images: {
    domains: ['lid.zoocdn.com', 'lc.zoocdn.com', 'res.cloudinary.com'],
  },
  workbox: {
    dest: "public",
    swDest: "sw.js",
    swSrc: "worker.js",
    force: true,
		exclude: [/middleware-manifest.json$/]
  },
	reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
});



