import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./wrapper/Wrapper";
import Image from "./components/Image";
import Cubic from "./components/Cubic";
import Text from "./components/Text";

function App() {
  return (
    <Wrapper className="App">
      <Image link="https://media.istockphoto.com/photos/track-and-mountains-in-valle-del-lago-somiedo-nature-park-asturias-picture-id1370772148?k=20&m=1370772148&s=612x612&w=0&h=UtId6HL27edD9i1PmcEtethm3d7YMaNfATfjdCzYQ6E=" />
      <div className="img-container">
        <Image
          link="https://content3.jdmagicbox.com/comp/sangli/m9/9999px233.x233.121023103024.i8m9/catalogue/natural-photo-studio-pragati-colony-sangli-photo-studios-elm6ffa0qn-250.jpg"
          width="300px"
          height="300px"
        />
        <Image
          link="https://www.reshot.com/static/home-pages/slider/photos_hero_06.png"
          width="300px"
          height="300px"
        />
        <Image
          link="https://image.shutterstock.com/image-photo/picture-beautiful-view-birds-260nw-1836263689.jpg"
          width="300px"
          height="300px"
        />
      </div>
      <div className="cubic-container">
        <Cubic bgColor="red" />
        <Cubic bgColor="green" />
        <Cubic bgColor="yellow" />
        <Cubic bgColor="blue" />
        <Cubic bgColor="brown" />
      </div>
      <Text textContent="Hello X" />
      <Text textContent="Hello Guramiko" />
    </Wrapper>
  );
}

export default App;
