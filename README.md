# Uber-CAD foxx API service

To see API go [Uber-cad API](https://uber-cad.ml/_db/cad/api/docs/index.html)

## Use local server.
Clone this repository and .zip them.

To use a local server, you need to install Arangodb.
Look at the official [documentation](https://www.arangodb.com/download-major/).

After installation, go to (http://localhost:8529). 
Authorize.
Default userName: `root`,
Password: `your password when installing Arangodb`
  
In the db _system, create a database named `cad`.
In db `cad` go to SERVICES -> UPLOAD -> UPLOAD FILE select the zip file and INSTAL. 
  Mountpoint: api

You must be authorized to use it foxx api cervice. Install also the  service [Uber-CAD foxx authorization service](https://github.com/uberCad/backend-auth)

## License

This code is distributed under the [Apache License](http://www.apache.org/licenses/LICENSE-2.0).
