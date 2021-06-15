const shoppingListApp = Vue.createApp({
    data() {
        return {
            header: 'Shopping List App',
            editing: false,
            newItem: '',
            // newItemPriority:'low',
            newItemHighPriority: false,
            // items: {
            //     'item-1': {id:1, label:'10 party hats'},
            //     'item-2': {id:2, label:'2 broad games'},
            //     'item-3': {id:3, label:'20 cups'},
            // },

            iceCreamFlavors: [],
            items: [
                {id:1, label:'10 party hats', purchased: true},
                {id:2, label:'2 broad games', purchased: true},
                {id:3, label:'20 cups', purchased: false},
            ]
        }
    },
    computed: {
        characterCount(){
            return this.newItem.length
        },
        // reversedItems(){
        //     return [...this.items].reverse()
        // }
    },
    methods: {
        saveItem() {
            this.items.push({id: this.items.length+1, label: this.newItem})
            this.newItem = ""
        },
        doEdit(editing){
            this.editing = editing
            this.newItem = ""
        },
        togglePurchased(item) {
            item.purchased = !item.purchased
        }
    }
}).mount('#shopping-list')