window.BENCHMARK_DATA = {
  "lastUpdate": 1708385862553,
  "repoUrl": "https://github.com/RBAMBHROLIYA/microsoft-authentication-library-for-js",
  "entries": {
    "msal-node client-credential Regression Test": [
      {
        "commit": {
          "author": {
            "email": "msaljsbuilds@microsoft.com",
            "name": "MSAL.js Release Automation"
          },
          "committer": {
            "email": "msaljsbuilds@microsoft.com",
            "name": "MSAL.js Release Automation"
          },
          "distinct": true,
          "id": "8c015976765555ebf63b236373058ca0c333e7c7",
          "message": "Bump package versions",
          "timestamp": "2024-02-17T01:49:12Z",
          "tree_id": "535d39f1daa32e032ee0a5d4a431aada09ca6b7c",
          "url": "https://github.com/RBAMBHROLIYA/microsoft-authentication-library-for-js/commit/8c015976765555ebf63b236373058ca0c333e7c7"
        },
        "date": 1708385861021,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 187325,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "219 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 179592,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "221 samples"
          }
        ]
      }
    ]
  }
}