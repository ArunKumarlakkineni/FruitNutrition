import { useState } from "react";
import "./App.css";

const fruits = [
  {
    quantity: true,
    name: "Apple",
    image: "images/apple.jpg",
    benefits: {
      calories: 95,
      carbs: 25,
      fibre: 3,
      fat: 0,
      protein: 1,
    },
  },
  {
    quantity: true,
    name: "Avocado",
    image: "images/avocado.jpg",
    benefits: {
      calories: 240,
      carbs: 13,
      fibre: 10,
      fat: 22,
      protein: 3,
    },
  },
  {
    quantity: false,
    name: "Grapes",
    image: "images/grape.jpg",
    benefits: {
      calories: 67,
      carbs: 17,
      fibre: 0.9,
      fat: 0.4,
      protein: 0.6,
    },
  },
  {
    quantity: true,
    name: "Orange",
    image: "images/orange.jpg",
    benefits: {
      calories: 73,
      carbs: 16.5,
      fibre: 2.8,
      fat: 0.2,
      protein: 1.3,
    },
  },
  {
    quantity: false,
    name: "Pineapple",
    image: "images/pineapple.jpg",
    benefits: {
      calories: 50,
      carbs: 13,
      fibre: 1.4,
      fat: 0.1,
      protein: 0.5,
    },
  },
  {
    quantity: false,
    name: "Strawberry",
    image: "images/strawberry.jpg",
    benefits: {
      calories: 32,
      carbs: 7.7,
      fibre: 2,
      fat: 0.3,
      protein: 0.7,
    },
  },
];
const listItems = [];
export default function App() {
  const [items, setItems] = useState(listItems);

  function calculateFruits(name) {
    return items
      .filter((item) => item.name === name)
      .reduce((sum, i) => sum + Number(i.quantity), 0);
  }

  function handleAddItem(item) {
    console.log(item);
    setItems((items) => [...items, item]);
    console.log(items);
  }
  return (
    <div className="App">
      <h1>💖Fruits Benifits-Nutritional Value</h1>
      <h2>
        "A diet rich in fruits and vegetables plays a role in reducing the risk
        of all the major causes of illness and death "
      </h2>
      <br></br>
      <FruitsList fruits={fruits} onHandleItem={handleAddItem} />
      <hr className="line" />
      <h3 className="heading">Total fruits selected</h3>
      <div className="list-quantity">
        {calculateFruits("Apple") !== 0 ? (
          <p>
            <strong>🍎Apple Quantity: </strong>
            {calculateFruits("Apple")} fruits
          </p>
        ) : (
          ""
        )}
        {calculateFruits("Strawberry") !== 0 ? (
          <p>
            <strong>🍓Strawberry Quantity: </strong>
            {calculateFruits("Strawberry") * 100} gms
          </p>
        ) : (
          ""
        )}
        {calculateFruits("Avocado") !== 0 ? (
          <p>
            <strong>🥑Avocado Quantity: </strong>
            {calculateFruits("Avocado")} fruits
          </p>
        ) : (
          ""
        )}
        {calculateFruits("Pineapple") !== 0 ? (
          <p>
            <strong>🍍Pineapple Quantity: </strong>
            {calculateFruits("Pineapple") * 100} gms
          </p>
        ) : (
          ""
        )}
        {calculateFruits("Orange") !== 0 ? (
          <p>
            <strong>🍊Orange Quantity: </strong>
            {calculateFruits("Orange")} fruits
          </p>
        ) : (
          ""
        )}
        {calculateFruits("Grapes") !== 0 ? (
          <p>
            <strong>🍇Grapes Quantity: </strong>
            {calculateFruits("Grapes") * 100} gms
          </p>
        ) : (
          ""
        )}
      </div>
      <br style={{ border: "2px solid black" }}></br>
      {items.length !== 0 ? <TotalFruit items={items} /> : null}
      <footer>
        <hr />
      </footer>
    </div>
  );
}
function TotalFruit({ items }) {
  const tca = items.reduce(
    (sum, num) =>
      sum + parseFloat(num.fruit.benefits.calories) * parseFloat(num.quantity),
    0
  );
  const tcar = items.reduce(
    (sum, num) =>
      sum + parseFloat(num.fruit.benefits.carbs) * parseFloat(num.quantity),
    0
  );
  const tfi = items.reduce(
    (sum, num) =>
      sum + parseFloat(num.fruit.benefits.fibre) * parseFloat(num.quantity),
    0
  );
  const tfa = items.reduce(
    (sum, num) =>
      sum + parseFloat(num.fruit.benefits.fat) * parseFloat(num.quantity),
    0
  );
  const tp = items.reduce(
    (sum, num) =>
      sum + parseFloat(num.fruit.benefits.protein) * parseFloat(num.quantity),
    0
  );

  return (
    <div className="total">
      <Table tca={tca} tcar={tcar} tfi={tfi} tfa={tfa} tp={tp} />
    </div>
  );
}

function Table({ tca, tcar, tfi, tfa, tp }) {
  return (
    <div className="table">
      <h3 className="heading">Nutritional Value</h3>
      <table>
        <thead>
          <tr>
            <th>Calorie</th>
            <th>Carbs</th>
            <th>Fiber</th>
            <th>Fats</th>
            <th>protein</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Math.round(tca)} kcal</td>
            <td>{tcar.toFixed(2)} gms</td>
            <td>{tfi.toFixed(2)} gms</td>
            <td>{tfa.toFixed(2)} gms</td>
            <td>{tp.toFixed(2)} gms</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function FruitsList({ fruits, onHandleItem }) {
  return (
    <div className="fruits-list">
      {fruits.map((fruit) => (
        <Fruit fruit={fruit} onHandleItem={onHandleItem} />
      ))}
    </div>
  );
}
function Fruit({ fruit, onHandleItem }) {
  return (
    <div className="card">
      <div>
        <img src={fruit.image} alt={fruit.name} />
        <p>{fruit.name}</p>
      </div>
      <BenefitList fruit={fruit} onHandleItem={onHandleItem} />
    </div>
  );
}
function BenefitList({ fruit, onHandleItem }) {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  return (
    <div className="benefits">
      {show && <FixedForm fruit={fruit} onHandleItem={onHandleItem} />}
      <h3>
        <strong>Nutritional Value</strong>
      </h3>
      <ul>
        <li>calories : {fruit.benefits.calories} kcal</li>
        <li>carbs : {fruit.benefits.carbs} gms</li>
        <li>fibre : {fruit.benefits.fibre} gms</li>
        <li>fat : {fruit.benefits.fat} gms</li>
        <li>protein : {fruit.benefits.protein} gms</li>
      </ul>
      <footer>{fruit.quantity ? "*per 1 fruit" : "*per 100 gms"}</footer>
      <button onClick={handleShow}>Add</button>
    </div>
  );
}
function FixedForm({ fruit, onHandleItem }) {
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newItem = {
      id: id,
      name: fruit.name,
      fruit: fruit,
      quantity: quantity,
    };
    console.log(newItem);
    onHandleItem(newItem);
    setShow(!show);
  }
  return (
    <div className="overlay" style={{ display: `${show ? "flex" : "none"}` }}>
      {show && (
        <form onSubmit={handleSubmit} disabled>
          <div>
            <label>Fruit</label>
            <input value={fruit.name} disabled />
          </div>
          <div>
            <label>Quantity</label>
            <input
            type="Number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      <p></p>
    </div>
  );
}
