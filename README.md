# react-scaffolding-demo
The purpose of this repository is to help developers to quickly get a hands on
testing another repository: [React Scaffolding](https://github.com/ivandosreisandrade/react-scaffolding)  

After cloning this repository run `$ npm install` to install the dependencies.
If you don't have npm installed, run `$ sudo apt install npm` to install the
latest version of npm and then try again the first command.  

To test the React Scaffolding tool, first check that it have been correctly installed:  
`$ react-scaffolding --help`

If it worked you should see the tool options and how to use it.  

## Example commands
Here are some example commands to test the React Scaffolding tool:  

##### Create containers
```shell script
$ react-scaffolding --name=DemoWrapper --path=src --template=wrapper
$ react-scaffolding --name=DemoContainer --path=src --template=container
$ react-scaffolding --name=DemoContainerRow --path=src --template=row
```
##### Create container with css example
```shell script
$ react-scaffolding --name=DemoClass --path=src --css DemoStyleSheet
```
##### Create a container with a custom template on a custom project folder
```shell script
$ react-scaffolding --name=DemoCustomContainer --path=src --template=customContainer --templatePath scaffold_templates
```

## Using the scripts
In this repository there are 2 script files that helps you to actually
see your changes in action on the browser:  
**[scripts.start.sh](./scripts.start.sh)** - This script starts webpack-dev-server,
which is the tool responsible for compiling the React Application JSX code into
"readable" code that the browser understands.  
**[scripts.build.sh](./scripts.build.sh)** - This script runs the webpack build script
from web, which compiles the files and generate a bundle that is production ready.  
**NOTE:** the build script is intended for **TESTS** only. Please make sure to use your own
deployment tools for any Production Product.

## Further tests and making changes
If you fancy tweaking the react scaffolding node module, please look at the
instructions here [making changes and testing](https://github.com/ivandosreisandrade/react-scaffolding#making-changes-and-testing) 

## License
[MIT](http://opensource.org/licenses/MIT) ©
