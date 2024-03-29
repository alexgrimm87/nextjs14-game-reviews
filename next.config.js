/** @type {import('next').NextConfig} */
module.exports = {
  // output: 'export',
  images: {
    //unoptimized: true,
    //loader: 'custom',
    //loaderFile: 'my-loader.js',
    remotePatterns: [
      // {
      //  protocol: 'http',
      //  hostname: 'localhost',
      //  port: '1337',
      //  pathname: '/uploads/**',
      // },
      toRemotePattern(process.env.CMS_IMAGE_PATTERN),
    ],
  },
};

function toRemotePattern(urlString) {
  const url = new URL(urlString);

  return {
    protocol: url.protocol.replace(':', ''),
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname,
  };
}
