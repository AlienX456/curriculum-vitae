import './App.css';
import { default as text } from './assets/text/text.json'
import profilePhoto from './assets/image/profilePhoto.jpeg'
import catComputer from './assets/image/catComputer.gif'
import dogComputer from './assets/image/dogComputer.gif'
import ImageTextComposition from './layout/ImageTextComposition/ImageTextComposition';

function App() {
  return (
    <div>
      <ImageTextComposition imageSRC={profilePhoto} title={text.profileTitle} text={text.profileText}/>
      <ImageTextComposition imageSRC={catComputer} title={text.workTitle} text={text.workText}/>
      <ImageTextComposition imageSRC={dogComputer} title={text.otherSkillsTitle} text={text.otherSkillsText}/>
    </div>
  );
}

export default App;
