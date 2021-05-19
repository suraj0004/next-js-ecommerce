import Dexie from 'dexie'

const db = new Dexie('DoonDukan');
db.version(1).stores(
    { cart: "++id,product_id,quantity,product" }
)

export const getCart = () => {
    let data = [];
    db.cart.each(item => data.push(item))
    return data;
}

export const addCart = (item) => {
    return new Promise((resolve, reject) =>{
        db.cart.add(item)
        .then((response) =>{
            resolve(response)
        }).catch((err) =>{
            reject(err)
        })
    })
}

export const updateCart = (id, quantity) => {
    return Promise((resolve, reject) =>{
        db.cart.update(id, {quantity:quantity})
        .then((response) =>{
            resolve(response)
        }).catch((err) =>{
            reject(err)
        })
    })
}

