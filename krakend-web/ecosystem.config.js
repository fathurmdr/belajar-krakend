module.exports = {
  apps: [
    {
      name: "krakend-web",
      script: "krakend run -c manifests/krakend.json",
      env: {
        KRAKEND_PORT: 4040,
        FC_ENABLE: 1,
        FC_SETTINGS: "/manifests/configs",
        FC_PARTIALS: "/manifests/partials",
        FC_TEMPLATES: "/manifests/templates",
      },
    },
  ],
};
