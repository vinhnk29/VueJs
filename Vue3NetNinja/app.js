const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.codeninjas.com/',
            showBooks: true,
            books: [
                {title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/1.jpg', isFav: true},
                {title: 'The way of king', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false},
                {title: 'Name of the wind', author: 'Patrick rothfuss', img: 'assets/3.png', isFav: true},
            ],
            x: 0,
            y:0
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'Words of Randiance'
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.X = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')