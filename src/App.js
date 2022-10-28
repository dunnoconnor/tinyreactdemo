import './App.css';
import Post from './Post';

function App() {
  //to make this dynamic, we need to FETCH data from the backend
  const users= [
    {id:1, username:"Brad", img:"https://media.4-paws.org/1/e/d/6/1ed6da75afe37d82757142dc7c6633a532f53a7d/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.jpg"},
    {id:2, username:"Michael",img:"https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"},
    {id:3, username:"Linda",img:"https://upload.wikimedia.org/wikipedia/commons/e/e6/Kamar_Zard_Buzhan_-_Nishapur_1.jpg"}
  ]
  //then we need to map through this data to create a variable number of posts

  
  return (
    <div className="App">
      {users.map((user) => (
        <Post key={user.id} username={user.username} imageURL={user.img}/>
      ))}
    </div>
  );
}

export default App;
