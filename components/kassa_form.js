app.component("kassa-form",{
    template: `
         <form @submit.prevent="addProducts" class="col-12 col-lg-8 offset-lg-2">
            <div class="d-flex gap-5 text-white shadow-lg p-3 mb-5 bg-info rounded bg-opacity-75 border-white border-5 w-100">
                <input v-model="product" type="text" class="form-control" placeholder="product-naam">
                <input v-model="price" type="number" class="form-control" placeholder="product-prijs">
                <button type="submit" class="btn btn-danger"><i class="bi bi-plus"></i></button>
            </div>
         </form>
        `
    ,
    data(){
        return{
            product:"",
            price: 0,
            teller:0,
        }
    },
    methods:{
        addProducts(){
            this.teller++
            let newArray = {
                product: this.product,
                price: Number(this.price),
                purchased:false,
                aantal:Number(0),
                productId:this.teller,
            }
            this.$emit("addnewProduct",newArray)
            this.product="";
            this.price =0;
        }
    },
    computed:{

    }
})