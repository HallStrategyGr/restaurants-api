import connectdb from "./connectdb.js";

// export const addRestaurant = async (req, res) => {
//     if(!req.body || !req.body.name || !req.body.address) {
//         res.status(401).send('Invalid request');
//         return;
//     }
// const db = connectdb();

// const newRestaurant = {
//     name: req.body.name,
//     address: req.body.address,
//     rating: req.body.rating || 3,
//     cuisine: req.body.cuisine || 'American',
// }
// try {
// const doc = await db.collection('restaurants').add(newRestaurant);

// res.status(201).send('Restaurant created ' + doc.id);
//     } catch(err) {
//         res.status(500).send(err);
//     }}

export const getAllRestaurants = async (req, res) => {
  const db = connectdb();
  try {
    const snapshot = await db.collection("restaurants").get();
    const restaurantsArray = snapshot.doc.map((doc) => {
      let restaurant = doc.date();
      restaurant.id = doc.id;
      return restaurant;
    });
    res.send(restaurantsArray);
  } catch (err) {
    res.status(500).send(err);
  }
};
