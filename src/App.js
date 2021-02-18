import "./App.css";

import PhotoGallery from "./photo-gallery";

const App = () => {
  const photos = [
    {
      url:
        "https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-4-5a391635d4441__700.jpg",
      caption: "Cats"
    },
    {
      url:
        "https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-54-5a3bb0a19c729__700.jpg",
      caption: "Cat flowers"
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
      url: "http://static.demilked.com/wp-content/uploads/2018/03/5aaa1cc087975-funny-weird-wtf-stock-photos-54-5a3a3e128ba2b__700.jpg",
      caption: "Cybersecurity"
    }
  ];
  return (
    <div className="App">
      <PhotoGallery photos={photos} />
    </div>
  );
};

export default App;
