import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'

export async function getProducts() {
  const col = collection(db, 'products')
  const snapshot = await getDocs(col)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}
