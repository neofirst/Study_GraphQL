module.exports = {
  apps : [
    {
      name: 'graphql-test',
      script: './index.js',
      exec_mode: 'cluster',
      instances: 4,
      autorestart: true,
      watch: false,
      args: [
        '--max_old_space_size=5120'
      ],
      max_memory_restart: '5G',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
