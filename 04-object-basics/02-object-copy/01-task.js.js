//Глубокое копирование рекурсивным способом( если JSON.parse(JSON.stringify(obj)) не подходит)
// JSON.parse(JSON.stringify(obj) не клонирует undefined, Symbol(), function() {}...

const man = {
  name: "John",
  activity: { specialist: { engineer: "js developer" } },
  sayHello: () => {
    console.log(`Hello! My name is ${this.name}!`);
  },
};
const clone = {};

function clonObj(clone, object) {
  for (let prop in object) {
    if (typeof object[prop] === "object") {
      clone[prop] = {};
      clonObj(clone[prop], object[prop]);
    } else {
      clone[prop] = object[prop];
    }
  }
}

clonObj(clone, man);
console.log(clone);
