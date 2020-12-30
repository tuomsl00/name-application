
 new Vue({
     el: '#app',
     data () {
       return {
         info: null,
         persons: ''
       }
     },
     created () {
       this.info = data;
       this.byAmount();
     },
     methods: {
         byAlphabet() {
           this.info.names.sort((a, b) => (a.name > b.name) ? 1 : - 1)
         },
         byAmount() {
           this.info.names.sort((a, b) => (a.amount < b.amount) ? 1 : - 1)
         },

         countAll() {
            return this.info.names.reduce(function (sum, amount) { return sum + amount.amount }, 0)
         }
     }
   })
   