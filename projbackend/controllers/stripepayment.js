const stripe = require("stripe")("sk_test_51JdzDQSIxMbyoAONvckMdLTmsIBYUbTi98vVgSIqGCWKHSOhwx3nUy6qttVKWZN3DEPi1YarNIsiZBgxHxGzF7ln00dFWcSuSX");
const uuid = require("uuid/v4");

exports.makepayment = (req,res) =>{
    const {products,token} = req.body
    console.log("PRODUCTS",products)
     
    let amount = 0;
    products.map(p =>{
        amount = amount + p.price;
    });
    const  idempotencyKey = uuid(); // If any network issue user will not be charged again and again
    return stripe.customers.create({
        email : token.email,
        source : token.id
    }).then(customer =>{
        stripe.charges.create({
            amount : amount,
            currency : 'USD',
            customer: customer.id,
            receipt_email : token.email,

            shipping:{
                name : token.card.name
            }
        },{idempotencyKey})
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err))
    })
};