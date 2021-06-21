import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyB8Ib6omvdpTtuTPnzqgc43EDURyYy_D58',
  authDomain: 'evo-falcon-inc.firebaseapp.com',
  projectId: 'evo-falcon-inc',
  storageBucket: 'evo-falcon-inc.appspot.com',
  messagingSenderId: '646935400500',
  appId: '1:646935400500:web:2a74f3f03bfed823b93a61'
}
const googleProvider = new firebase.auth.GoogleAuthProvider()

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
export { googleProvider }
