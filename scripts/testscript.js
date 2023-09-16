function createGDPS() {
  const fs = require("fs");
  fs.mkdir('/'+prompt());
  console.log('created dir for gdps');
}

