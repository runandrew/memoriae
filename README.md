![Memoriae Logo](http://imgur.com/T5V4sE5.png "Memoriae Logo")
---
![Codeship Badge](https://app.codeship.com/projects/8c05d5a0-e5af-0134-650f-5ef96e7aab82/status?branch=master)

Memoriae is an open-source notebook for programmers. The application is currently under development, but here are the future features of the application:
* Notes will be written in either Markdown or code cells
* Database will be stored in a flat file for easy storage and versioning
* Cross-platform compatibility

## Installation
First, clone the repository through git and change to the new directory:
```
git clone https://github.com/runandrew/memoriae.git
cd memoriae
```
Then install the required dependencies:
```
yarn install
```

## Usage
### Starting
Run these two commands simultaneously in different console tabs:
```
npm run hot-server
npm run start-hot
```
Or run two servers with one command:
```
npm run dev
```

### Testing
To test the codebase:
```
npm test
```

### Packaging
To package the application for distribution:
```
npm run package
```

## License
MIT © Andrew Garcia
