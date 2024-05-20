<h1 align="center">API, Local Storage and Modules</h1>

## 🌐 API

#### Fudamentals from API in [`storage-modules.js`](./storage-modules.js)

#### 📄 XML (Extensible Markup Language)

XML is a markup format that defines a set of rules for encoding documents in a format that is readable by both humans and machines. Although heavier than JSON, XML is still used in certain contexts, especially when it is necessary to define complex schemas. Syntax example:

```xml
<person>
  <name>Juan</name>
  <age>30</age>
  <city>Quito</city>
</person>
```

#### 🗒️ JSON (JavaScript Object Notation)


JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is widely used in web applications to send and receive data. Syntax example:

```json
{
  "name": "Juan",
  "age": 30,
  "city": "Quito"
}
```

## 🗄️ Local Storage

Local Storage is synchronous and blocking, so it’s not recommended for large amounts of data. It’s also not secure, so don’t use it for sensitive information.

#### Set Fetch Data in Local Storage

This method is used to add a key-value pair to local storage.

![1](https://github.com/JohnMata0427/Laboratorio-06/assets/150484680/82752625-c43e-4d83-b55e-76a91b649ea0)

#### Get Local Storage Data

This method is used to retrieve the value of a specified key from local storage.

![2](https://github.com/JohnMata0427/Laboratorio-06/assets/150484680/689a10cd-1e86-4bc3-9443-9efaf3e2b21b)

#### Delete Local Storage Data

This method is used to remove a specified key-value pair from local storage.

![3](https://github.com/JohnMata0427/Laboratorio-06/assets/150484680/2b93e85d-550c-4b72-a221-f17ef49a647b)

## 📂 Modules

#### Node Package Manager (NPM)

NPM stands for Node Package Manager, it is the default JavaScript tool for the task of sharing and installing packages.
Running npm init will guide you through a process of setting up your project and creating a package.json file in your project directory.
This script is executed to initialize a JavaScript project. When you execute it, the command line will ask you some questions to create the package:

![image](https://github.com/JohnMata0427/Laboratorio-06/assets/150484680/539efe10-4454-4120-9acc-b15a44998914)

#### package.json

package.json configured by default, and you can start developing your application with Node.js, managing the necessary dependencies and configurations.
Initial metadata:

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "My description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "test"
  ],
  "author": "Diego",
  "license": "MIT"
}
```

#### CommonJS and ECMAScript Modules in [`storage-modules.js`](./storage-modules.js)
