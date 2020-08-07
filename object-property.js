const student = [
    {id: 21, name: "umor sanny"},
    {id: 33, name: "mannaaaaaa"},
    {id: 34, name: "Riazzzzzzz"},
    {id:44, name: "sabnurrrrrr"},

];
const names = student.map(s => s.name);

const ids = student.map(s=>s.id);
const filter = student.filter(s => s.id > 34);
console.log(filter);