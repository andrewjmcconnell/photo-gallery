import "./App.css";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import PhotoGallery from "./photo-gallery";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ConfigContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const photos = [
  {
    url:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-4-5a391635d4441__700.jpg",
    caption: "Cats"
  },
  {
    url:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-54-5a3bb0a19c729__700.jpg",
    caption: "Prom night"
  },
  {
    url:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-24-5a392d5d9bda7__700.jpg",
    caption: "Downloading"
  },
  {
    url:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-49-5a3a33dcdb38d__700.jpg",
    caption: "No potato"
  },
  {
    url:
      "http://static.demilked.com/wp-content/uploads/2018/03/5aaa1cbfc16de-funny-weird-wtf-stock-photos-6-5a3919969a332__700.jpg",
    caption: "Hacking"
  },
  {
    url:
      "http://static.demilked.com/wp-content/uploads/2018/03/5aaa1cc087975-funny-weird-wtf-stock-photos-54-5a3a3e128ba2b__700.jpg",
    caption: "Cybersecurity"
  }
];

const Checkbox = props => <input type="checkbox" {...props} />;

const App = () => {
  const [infiniteLoop, setInfiniteLoop] = useState(false);
  const [noPhotos, setNoPhotos] = useState(false);

  const Config = () => (
    <ConfigContainer>
      <label>
        <Checkbox
          checked={infiniteLoop}
          onChange={e => setInfiniteLoop(e.target.checked)}
        />
        Allow infinite loop
      </label>
      <label>
        <Checkbox
          checked={noPhotos}
          onChange={e => setNoPhotos(e.target.checked)}
        />
        Empty list of photos
      </label>
    </ConfigContainer>
  );

  return (
    <div className="App">
      <GlobalStyle />
      <div>PhotoGallery</div>
      <div>By Andrew McConnell</div>
      <Config />
      <PhotoGallery photos={!noPhotos && photos} infiniteLoop={infiniteLoop} />
    </div>
  );
};

export default App;
