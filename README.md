# generator-koapp-service

![Koa-logo](https://s3-eu-west-1.amazonaws.com/images.kingofapp.com/logo/logo%2Bking%403x.png)
> Scaffold out a King of App service

### Installation

First, install [Yeoman](http://yeoman.io) and generator-koapp-service using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g gulp
npm install -g generator-koapp-service
```

Generate your new service:

```bash
yo koapp-service serviceName
```

Optionally, you can include the following flags:

* `-u authorName`
* `-w authorHomepage`
* `-s spanishDescription`
* `-e englishDescription`
* `-p price`
* `-l license`
* `-c categories` separated by comma

Then start your new service:

```bash
cd {Project-name} && gulp
```

### Automated Tasks (Gulp)

**Main Tasks**

- `gulp` It runs `watch-config`, `watch-bower`, `watch-documentation`
- `gulp distribution` It runs `dist-zip`

**All Tasks**

- `gulp jsdoc` It creates JsDoc documentation.
- `gulp watch-documentation` It is monitoring for changes in documentation, also it will update config.json

### Contribution

Please open an issue with your suggestion/question.

If you want to improve the code, please follow these steps and submit a pull request.

- Download
```bash
git clone https://github.com/KingofApp/generator-koapp-service.git && cd generator-koapp-service
```

- Install all dependencies
```bash
npm install
```

- Added to local NPM
```bash
npm link
```

- Execute it
```bash
yo
```

- Test your changes ;-)
```bash
npm test
```

### License

MIT © [King of App](https://github.com/KingofApp)
