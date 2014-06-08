Package.describe({
  summary: 'A stateful client for Rserve, the TCP/IP server for R framework.'
});

Npm.depends({
    "rserve-client": "0.3.0"
});

Package.on_use(function (api, where) {
  api.add_files('rserve-client.js', 'server');
  if (api.export) {
    api.export("RServeClient", "server");
  }
});
