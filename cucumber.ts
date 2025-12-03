export default [
  '--require-module ts-node/register',
  '--require ./tests/steps/**/*.ts',
  '--require ./tests/support/**/*.ts',
  '--format @cucumber/pretty-formatter',
  '--format allure-cucumberjs',
  '--publish-quiet',
  "--format allure-cucumberjs",
  '--timeout 300000'
].join(' ');
 