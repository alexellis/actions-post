const core = require('@actions/core');
const github = require('@actions/github');

try {
 console.log(`Cleaned up the action`)

  await core.summary
  .addHeading('Cleanup')
  .addRaw("This cleanup has completed in the post action step.")
  .write()

} catch (error) {
  core.setFailed(error.message);
}

