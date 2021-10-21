import React from "react";
import charactersAPI from "../api/charactersAPI";

class Characters extends React.Component {
  state = {
    characters: undefined,
  };

  fetchCharacters = async () => {
    const response = await charactersAPI.get();
    const responseData = response.data.results;
    let characters = [];
    for (const [index, character] of responseData.entries()) {
      characters.push({
        id: index,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        origin: character.origin.name,
        imageURL: character.image,
      });
    }
    this.setState({ characters: characters });
  };

  componentDidMount = async () => {
    if (!this.state.characters) await this.fetchCharacters();
  };

  renderCards = () => {
    const { characters } = this.state;
    const { search } = this.props;
    return characters.map(
      (character) =>
        character.name.toLowerCase().includes(search.search.toLowerCase()) && (
          <div className="col s12 m6">
            <div className="card theme-colour">
              <div className="card-content">
                <div className="row">
                  <div className="col s5">
                    <img
                      alt="character"
                      src={character.imageURL}
                      className="responsive-img"
                    ></img>
                  </div>
                  <div className="col s7">
                    <p className="name-heading">{character.name}</p>
                    <p>
                      <strong>Species : </strong> {character.species}
                    </p>
                    <p>
                      <strong>Status : </strong> {character.status}
                    </p>
                    <p>
                      <strong>Gender : </strong> {character.gender}
                    </p>
                    <p>
                      <strong>Origin : </strong> {character.origin}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    );
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <div className="row">{characters ? this.renderCards() : "Loading"}</div>
      </div>
    );
  }
}

export default Characters;
