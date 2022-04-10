import { v4 as uuidv4 } from "uuid";

const sizeEnum = ["XS, S, M, L, XL, XLL"];
let carts = [
  {
    id: uuidv4(),
    type: "shirt",
    name: "Nirvana shirt",
    size: "L",
    quantity: 3,
  },
  {
    id: uuidv4(),
    type: "shirt",
    name: "LULW shirt",
    size: "M",
    quantity: 1,
  },
];

export const getCartList = (req, res) => {
  res.send(carts);
};

export const getCart = (req, res) => {
  const { id } = req.params;

  const foundCart = carts.find((cart) => cart.id === id);

  res.send(foundCart);
};

export const createCart = (req, res) => {
  const newCart = req.body;

  if (newCart.size?.length > 4) {
    return res.send("The size characters must be below than 4!");
  }

  if (newCart.quantity > 10) {
    return res.send("You are buying too much");
  }

  if (newCart.quantity < 0) {
    return res.send("The quantity cannot be negative");
  }
  const newCartWithId = { ...newCart, id: uuidv4() };

  carts.push(newCartWithId);

  res.send(
    `Cart with type ${newCart.type} and name ${newCart.name} has been created and added to database`
  );
};

export const deleteCart = (req, res) => {
  const { id } = req.params;

  carts = carts.filter((cart) => cart.id !== id);

  res.send(`Cart with an id of ${id} has been deleted from database`);
};

export const updateCart = (req, res) => {
  const { id } = req.params;
  const { type, name, quantity, size } = req.body;

  const cartToBeUpdated = carts.find((cart) => cart.id === id);

  if (size?.length > 4) {
    return res.send("The size characters must be below than 4!");
  }

  if (quantity > 10) {
    return res.send("You are buying too much");
  }

  if (quantity < 0) {
    return res.send("The quantity cannot be negative");
  }

  if (type) cartToBeUpdated.type = type;
  if (name) cartToBeUpdated.name = name;
  if (quantity) cartToBeUpdated.quantity = quantity;
  if (size) cartToBeUpdated.size = size;

  res.send(`Cart with an id of ${id} has been updated`);
};
