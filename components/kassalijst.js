app.component("kassalijst", {
    template: `
        <kassa-form @addnewProduct="insertProduct"></kassa-form>
        <div class="col-12 col-lg-8 offset-lg-2"><!--[conditie ? iets doen : ook iets doen]-->
            <div v-for="product in producten" :class="[product.purchased ? checkedClass : uncheckedClass]">
                <div class="shadow-lg p-3 bg-body rounded d-flex justify-content-between fs-3">
                    <p class="my-0">{{ product.product }}</p>
                    <div class="mx-auto my-">
                         <input  v-model="product.aantal" type="number"  class="my-0 form-control fs-5" min="1">
                    </div>
                    <div class="d-flex">   
                        <p class="my-0 pe-3">&euro; {{ product.price.toFixed(2)}}</p>
                        <p class="my-0 pe-3">&euro; {{(product.aantal * product.price).toFixed(2)}} </p>
                        <input @change="togglePurchased(product)" class="form-check-input border border-danger border-5 rounded-circle m-0 m-auto" type="checkbox" v-model="selectedProducts" :value="product">
                        <p class="my-0 px-3"></p>
                    </div>
                </div>
            </div>
            <div class="text-white shadow-lg p-3 bg-dark rounded bg-opacity-75 border-white border-5 w-100 d-flex justify-content-between ">
                <p class="my-0 fs-3">Total</p>
                <p class="my-0 fs-3">&euro; {{ totalPrice.toFixed(2) }}</p>
            </div>
        </div>
    `,
    data() {

        return {
            producten: [],
            selectedProducts: [],
            checkedClass:"bg-success shadow-lg p-3 mb-5 rounded w-100 bg-opacity-75 border border-white border-5",
            uncheckedClass:"bg-danger shadow-lg p-3 mb-5 rounded w-100 bg-opacity-75 border border-white border-5",
        }
    },
    methods: {
        togglePurchased(product){
            product.purchased = !product.purchased
        },
        insertProduct(newArray){
            this.producten.push(newArray)
            console.log(newArray)
        }
    },
    computed: {//alles van berekeningen is altijd in computed
        totalPrice() {
            let total = 0;
            for (let product of this.selectedProducts) {
                total += (product.price * product.aantal)
            }
            return total;

        },
    },
})