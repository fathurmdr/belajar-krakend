module.exports = {
  apps: [
    {
      name: "krakend-web",
      script: "krakend",
      args: "run -c manifests/krakend.json",
      env: {
        KRAKEND_PORT: 4040,
        FC_ENABLE: 1,
        FC_SETTINGS: "/configs",
        FC_PARTIALS: "/partials",
        FC_TEMPLATES: "/templates",
      },
    },
  ],
};
