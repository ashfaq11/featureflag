const fs = require('fs');
const dotenv = require('dotenv');
const envConfig = dotenv.config().parsed;

// Read environment.ts template
let environmentFileContent = `
export const environment = {
  production: true,
  sdkKey: '${envConfig.SDK_KEY}',
  envName: 'production'
};
`;

//console.log("envConfig: ", envConfig);
// Write to the environment.ts file
/*fs.writeFile('./src/environments/environment.production.ts', environmentFileContent, (err) => {
  if (err) {
    console.error("Error writing environment file", err);
  } else {
    console.log("Environment file generated successfully");
  }
});
*/