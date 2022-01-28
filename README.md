## About The Project

<img src="images/screenshot1.png" width=100% >

This is my first project to learn ethereum blockchain app.
It is a simple todo list app deployed on a local Ethereum blockchain [Ganache](https://trufflesuite.com/ganache/)

The app is connected to [Metamask](https://metamask.io/) wallet as the gateway to 
interact with Ethereum blockchain. 

<img src="images/screenshot2.png" width=30% >

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With


* [Truffle](https://trufflesuite.com/)
* [Bootstrap](https://getbootstrap.com)
* [Lite-server](https://github.com/johnpapa/lite-server)
* [Web3.js](https://github.com/ChainSafe/web3.js)


<p align="right">(<a href="#top">back to top</a>)</p>


## Getting Started


### Prerequisites

* [Node.js](https://nodejs.org/en/)
* [Ganache](https://trufflesuite.com/ganache/) install and run it. we need Ganache as our local Ethereum blockchain for testing the app.
* [Truffle@5.4.30](https://www.npmjs.com/package/truffle/v/5.4.30)
    ```sh
   npm i -g truffle@5.4.30
   ```
* [Metamask](https://metamask.io/) installed on your browser.
    



### Installation

1. To interact with our local Blockchain, we need to import a new local account into metamask
    
    in Ganache 
    1. Copy the first wallet private key
    
    in Metamask
    1. Import new account
    2. Insert the private key from Ganache

2. Add new Network to Metamask
    * Network name : Ganache
    * New RPC URL (default) : HTTP://127.0.0.1:7545
    * Chain ID (default) : 1337

3. Clone the repo
   ```sh
   git clone https://github.com/adithana/eth-todo-list
   ```

4. Install NPM packages
   ```sh
   npm install
   ```

5. Migrate the smart contracts to the Ethereum blockchain
   ```sh
   truffle migrate --reset
   ```

6. Run the app
   ```sh
   npm run dev
   ```
6. Connect your metamask account to the web

To open Truffle console for debugging
1. ```sh
   truffle console
   ```
2. ```sh
   todoList = await TodoList.deployed()
   ```
* To see the smart contract content
    ```sh
   todoList
   ```
* To see the smart contract address
    ```sh
   todoList.address
   ```
* To print a variable content
    1.  ```sh
        task = await todoList.tasks(1)
        ```
    2.  ```sh
        task
        ```


<p align="right">(<a href="#top">back to top</a>)</p>






<!-- CONTRIBUTING -->
## Contributing

Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


## Contact

Kevin Adithana - [linkedin](https://www.linkedin.com/in/kevin-adithana-985698144/) - kevin_adithana@yahoo.com

Project Link: [https://github.com/adithana/eth-todo-list](https://github.com/adithana/eth-todo-list)

<p align="right">(<a href="#top">back to top</a>)</p>


## Acknowledgments

Helpful resources

* [How to Build Blockchain App](https://www.dappuniversity.com/articles/blockchain-app-tutorial)
* [Build your Ethereum DApp on Windows with Truffle, Ganache and Metamask (Beginners Guide)](https://medium.com/@filzatariq92/build-your-ethereum-dapp-on-windows-with-truffle-ganache-and-metamask-beginners-guide-8c62b55ef556)
* [Metamask Guide](https://docs.metamask.io/guide/getting-started.html#basic-considerations)
* [Metamask Provider Migration Guide](https://docs.metamask.io/guide/provider-migration.html#table-of-contents)
* [Bootstrap Example](https://getbootstrap.com/docs/5.1/examples/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[screenshot1]: images/screenshot1.png
[screenshot2]: images/screenshot2.png