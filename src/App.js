import Profile from './profile/profile.js'
import './profile/profile.css'

function App() {
  const alertName = (myname) => {
    alert(`Hello I am ${myname}`);
  };
  let profile = {
    Name: 'Sawsen Sassi',
    img:'https://jabailsapayanihome.files.wordpress.com/2018/09/welcome-to-my-blog1.gif?w=370',
    bio: `My name is Sawsen Sassi and I am a full-stack Web
     Application Developer and Software Developer, currently living in Tunisia. 
     I have a Bachelor degree in Computer Science from the higher institute of 
     economical and commercial science of tunis.
     My primary focus and inspiration for my studies is Web Development`,
    profession: 'Full-Stack web developer',
  }

  let desc='If You like this content send me E-mail : sawsensassi97@gmail.com'
  return (
    <>
      <Profile profile={profile} alertName={alertName} desc={desc} >
        <p className='copyright'> Copyright by Sawsen Sassi © 2021</p>
      </Profile>
    </>
  );
}

export default App;