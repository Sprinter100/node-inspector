module.exports = {
  frontend: {
    modules: [
      {
        name: "node-network",
        dependencies: [ "network" ],
        scripts: [ "NetworkPanel.js" ]
      }
    ]
  },
  inspector: {
    agents: [
      {
        name: "Network",
        path: "NetworkAgent.js"
      }
    ]
  },
  protocol: {
    domains: [
      {
        domain: "Network",
        types: [],
        commands: [
            {
                name: "_clearCapturedData",
                description: "Removes all saved requests data"
            },
            {
                name: "_setCapturingEnabled",
                parameters: [
                    { name: "enabled", type: "boolean", description: "True, if capturing enabled" }
                ],
                description: "Disables capturing of http requests"
            }
        ],
        events: []
      }
    ]
  }
};