In order to fix this error:

```
Cannot read file node_modules\@types\node\timers\promises.d.ts due to: EMFILE: too many open files, open 'C:\Users\amori\OneDrive\Documentos\Desarrollo\serverless tutorial\myServerlessProject\node_modules\@types\node\timers\promises.d.ts'
```

install graceful-fs: `npm install graceful-fs`
go to file: `node_modules/serverless/lib/plugins/package/lib/zip-service.js`
replace this line : `const fs = BbPromise.promisifyAll(require('fs'));` by this:

```javascript
var realFs = require("fs");
var gracefulFs = require("graceful-fs");
gracefulFs.gracefulify(realFs);
const fs = BbPromise.promisifyAll(realFs);
```
