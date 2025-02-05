module.exports = {
  apps: [
    {
      name: "portfolio-server",
      script: "npm start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "62.72.20.238",
      ref: "origin/main",
      repo: "https://github.com/vnko1/portfolio-server.git",
      path: "/var/www/portfolio-server",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm ci && npm run build --if-present && pm2 reload ecosystem.config.js --.env production",
      "pre-setup": "",
    },
  },
};
