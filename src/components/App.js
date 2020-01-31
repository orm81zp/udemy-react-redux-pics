import React from 'react';
import { getImages } from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (query) => {
    const images = await getImages(query);
    this.setState({ images });
  }

  render() {
    const { images } = this.state;

    return (
      <div className="ui container mt-10" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={images} />
      </div>
    );
  }
}

export default App;
