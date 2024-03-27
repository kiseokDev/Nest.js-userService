import apiClient from '@/lib/axiosClient';
import { CatType } from '@root/common/dto/catDto';

async function getData() {
  return apiClient.get('/cat');
}

async function testEnv() {
  return apiClient.getBackendEnv();
}

export default async function Cat() {
  const cats: any = await getData();
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
