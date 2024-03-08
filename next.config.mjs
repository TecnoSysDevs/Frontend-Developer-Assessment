/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      
        domains: ['images.unsplash.com','aceternity.com','unsplash.com','picsum.photos'],
       
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
};

export default nextConfig;