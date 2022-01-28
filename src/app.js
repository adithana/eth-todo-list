App = {
    loading: false,
    contracts: {},
    load: async () => {
        // Load app...
        console.log("app loading...")
        await App.loadWeb3()
        await App.loadContract()
        await App.render()
    },

    loadWeb3: async () => {
        // Metamask
        if (window.ethereum) {
            App.web3Provider = window.ethereum
            try {
                // Request account access if needed
                await App.loadAccount()
                window.web3 = new Web3(window.ethereum)
            } catch (error) {
                if (error.code === 4001) {
                    // User rejected request
                    window.alert("User denied account access.")
                  }
                  window.alert("Error occured.")
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            App.web3Provider = web3.currentProvider
            window.web3 = new Web3(web3.currentProvider)
            // Acccounts always exposed
            web3.eth.sendTransaction({ })
        }
        // Non-dapp browsers...
        else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    },

    loadAccount: async () => {
        // Set the current blockchain account

        //App.account = web3.eth.accounts[0]; //Deprecated
        App.accounts = await ethereum.request({ method: 'eth_accounts' });
        App.account = App.accounts[0]
        console.log(App.account)
    },

    loadContract: async () => {
        // Create a JavaScript version of the smart contract
        const todoList = await $.getJSON('TodoList.json')
        App.contracts.TodoList = TruffleContract(todoList)
        App.contracts.TodoList.setProvider(App.web3Provider)
    
        // Hydrate the smart contract with values from the blockchain
        App.todoList = await App.contracts.TodoList.deployed()
    },

    render: async () => {
        // Prevent double render
        if (App.loading) {
            return
        }
        
        // Update app loading state 
        App.setLoading(true)
       
        // Render Account
        $('#account').html(App.account)

        // Render Tasks
        await App.renderTasks()
        
        // Update app loading state 
        App.setLoading(false)
    },

    renderTasks: async () => {
        // Load the total task count from the blockchain
        const taskCount = await App.todoList.taskCount()
        const $taskTemplate = $('.taskTemplate')

        // Remove new task input first
        const $newTaskInput = $('#newTaskInput')
        $newTaskInput.remove();

    
        // Render out each task with a new task template
        for (var i = 1; i <= taskCount; i++) {
            const task = await App.todoList.tasks(i)
            const taskId = task[0].toNumber()
            const taskContent = task[1]
            const taskCompleted = task[2] 
            
            // Prevent to render deleted task
            if(taskId == 0) continue

            // Create the html for the task
            const $newTaskTemplate = $taskTemplate.clone()
            $newTaskTemplate.find('.content').html(taskContent)
            $newTaskTemplate.find('input')
                            .prop('name', taskId)
                            .prop('checked', taskCompleted)
                            .on('click', App.toggleCompleted)
            $newTaskTemplate.find('button')
                            .prop('name', taskId)
                            .on('click', App.deleteTask)
            
            // Put the task in the list
            $('#taskList').append($newTaskTemplate)

            // Show the task
            $newTaskTemplate.removeClass('d-none')
        }
        
        // Put new task input on the last of the list
        $('#taskList').append($newTaskInput)
    },

    createTask: async () => {
        App.setLoading(true)
        const content = $('#newTask').val()
        await App.todoList.createTask(content, {from: App.account})
        window.location.reload()
    },

    deleteTask: async (e) => {
        App.setLoading(true)
        const taskId = e.target.name
        await App.todoList.deleteTask(taskId, {from: App.account})
        window.location.reload()
    },

    toggleCompleted: async (e) => {
        App.setLoading(true)
        const taskId = e.target.name
        await App.todoList.toggleCompleted(taskId, {from: App.account})
        window.location.reload()
    },

    setLoading: (boolean) => {
        App.loading = boolean
        const loader = $('#loader')
        const taskList = $('#taskList')
        if (boolean) {
          loader.show()
          taskList.addClass('d-none')
        } else {
          loader.hide()
          taskList.removeClass('d-none')
        }
      }
}

$(() => {
    $(window).load(() => {
        App.load()
    })
})