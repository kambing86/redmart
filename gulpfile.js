const gulp = require("gulp");
const gutil = require("gulp-util");
const exec = require("child_process").exec;
const execSync = require("child_process").execSync;
const notifier = require("node-notifier");
const packageJson = require("./package.json");

gulp.task("upgrade", (callback) => {
  exec("npm outdated --json", (err, stdout) => {
    if (err) {
      console.error(err);
      return;
    }
    const packages = JSON.parse(stdout);
    for (const p in packages) {
      const info = packages[p];
      if (info.current !== info.wanted) {
        const c = `yarn upgrade ${p}`;
        const msg = `upgrading ${p}`;
        gutil.log(msg);
        notifier.notify({
          title: packageJson.name,
          message: msg,
        });
        execSync(c);
      }
    }
    callback();
  });
});
