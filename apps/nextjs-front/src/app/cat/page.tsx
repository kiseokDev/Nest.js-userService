import apiClient from '@/lib/axiosClient';
import { CatType } from '@root/common/dto/catDto';

async function getData() {
  const res = apiClient.get('/cat');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  //   if (!res) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error('Failed to fetch data');
  //   }

  return res;
}

async function testEnv() {
  return apiClient.getBackendEnv();
}

export default async function Cat() {
  const cats = await getData();
  const env = await testEnv();
  return cats.map((cat: CatType) => (
    <>
      <ul key={cat.name}>
        <li>{cat.id}</li>
        <li>{cat.name}</li>
        <li>{cat.age}</li>
        <li>{cat.breed}</li>
      </ul>
      <div style={{ color: 'red' }}>{env}</div>
    </>
  ));
}
