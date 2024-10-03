import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Rian Evangelista" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus esse at facilis! Debitis pariatur fugit sapiente, enim maxime deserunt porro dolor saepe, vel laudantium doloremque? Aut voluptate expedita rerum inventore." 
      />
      <Post
        author="Matheus Bazzo"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus esse at facilis! Debitis pariatur fugit sapiente, enim maxime deserunt porro dolor saepe, vel laudantium doloremque? Aut voluptate expedita rerum inventore."  
      />
      <Post/>
      <Post/>
      <Post/>
    </div>  
  )
}

