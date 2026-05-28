// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'mahlangu-dev',
      script: '/usr/bin/doppler',
      args: 'run -- node_modules/.bin/next start -p 3000',
      cwd: '/home/mahlangu-dev-admin/mahlangu-dev',
      env: {
        NODE_ENV: 'production',
        DOPPLER_TOKEN: process.env.DOPPLER_TOKEN_MAHLANGU_DEV,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
    },
  ],
};
