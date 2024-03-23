import { SchemaTypes } from '@root/types/type';
async function getData() {
  const res = await fetch('http:localhost:4000/cat');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Cat() {
  const cats = await getData();
  return cats.map((cat: SchemaTypes<'Cat'>) => (
    <ul key={cat.name}>
      <li>{cat.id}</li>
      <li>{cat.name}</li>
      <li>{cat.age}</li>
      <li>{cat.breed}</li>
    </ul>
  ));
}
