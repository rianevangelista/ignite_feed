import { Header } from './components/Header';
import { Post } from './Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
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
        </main>
      </div>
    </div>  
  )
}

