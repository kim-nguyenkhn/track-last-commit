# track-last-commit

Convenience script to add a comment to the top of a file with a package's name, version, and Git commit hash. This is useful for tagging reusable component libraries to track the version being used, making it somewhat easier to debug.

Sample output in [dist/index.js](dist/index.js):
```javascript
/*track-last-commit_1.0.0_699b7d6_2019.3.13*/
console.log('Hello World');
```

