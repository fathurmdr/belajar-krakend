module.exports = {
  apps: [
    {
      name: "krakend-api",
      script: "krakend",
      args: "run -c manifests/krakend.json",
      env: {
        KRAKEND_PORT: 4041,
        FC_ENABLE: 1,
        FC_SETTINGS: "/configs",
        FC_PARTIALS: "/partials",
        FC_TEMPLATES: "/templates",
      },
    },
  ],
};
