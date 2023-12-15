
### References

* https://youtu.be/uE9Ncr6qInQ
* https://youtu.be/oFiw5VvgRFg
* https://youtu.be/pRGOEtGjI-k

    [<img src="https://img.youtube.com/vi/uE9Ncr6qInQ/0.jpg" alt="drawing" width="240"/>](https://youtu.be/uE9Ncr6qInQ)
    [<img src="https://img.youtube.com/vi/oFiw5VvgRFg/0.jpg" alt="drawing" width="240"/>](https://youtu.be/oFiw5VvgRFg)
    [<img src="https://img.youtube.com/vi/pRGOEtGjI-k/0.jpg" alt="drawing" width="240"/>](https://youtu.be/pRGOEtGjI-k)

### Description
#### Backend
* Database, Web Socket
* Modules
  * express - server
  * mongoose - mongodb
  * cors - to help communication with frontend
  * dotenv - to use env variable
  * http -
#### Frontend
* Web Socket

### Install
* install Visual Code extension
  * https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

* backend
  * base
    ```
    sudo apt-get install mongodb  # install mongodb on ubuntu machine
    ```
  * original install
    ```
    mkdir backend
    cd backend
    npm init -y
    npm i express mongoose cors dotenv http
    npm i socket.io
    npm i nodemon -D
    ```
  * reinstall from source
    ```
    npm install
    ```
  * run
    ```
    npm run dev
    ```
* client
  * original install
    ```
    cd client
    npx create-react-app .
    ```
  * reinstall from source
  * run
    ```
    npm start
    ```
  * open http://localhost:3000 on browser