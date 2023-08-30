const core = require('@actions/core');
const github = require('@actions/github');

try {
 console.log(`Cleaned up the action`)
} catch (error) {
  core.setFailed(error.message);
}

