module.exports = {
  apps: [
    {
      name: "krakend-api",
      script: "krakend run -c manifests/krakend.json",
      env: {
        KRAKEND_PORT: 4041,
        FC_ENABLE: 1,
        FC_SETTINGS: "/manifests/configs",
        FC_PARTIALS: "/manifests/partials",
        FC_TEMPLATES: "/manifests/templates",
      },
    },
  ],
};
