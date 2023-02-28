export default class SwapiService {
  _baseAPI = 'https://swapi.dev/api';
  _baseImage = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const finalUrl = `${this._baseAPI}${url}`;
    const res = await fetch(finalUrl);

    if (!res.ok) {
      throw new Error(`Could not fetch ${finalUrl}, received ${res.status}`);
    }

    const body = await res.json();
    return body;
  }

  getAllPeople = async () => {
    const res = await this.getResource('/people/');
    return res.results.map((person) => this._transformPerson(person));
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`)
    return this._transformPerson(person);
  }

  getPersonImageURL = (id) => {
    return `${this._baseImage}/characters/${id}.jpg`
  }

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/');
    return res.results.map((planet) => this._transformPlanet(planet));
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  getPlanetImageURL = (id) => {
    return `${this._baseImage}/planets/${id}.jpg`
  }

  getAllStarships = async () => {
    const res = await this.getResource('/starships/');
    return res.results.map((starship) => this._transformStarship(starship));
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`)
    return this._transformStarship(starship);
  }

  getStarshipImageURL = (id) => {
    return `${this._baseImage}/starships/${id}.jpg`
  }

  _extractId = (url) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return url.match(idRegExp)[1];
  }
  
  _transformPerson = ({ name, gender, birth_year, eye_color, mass, height, url }) => {
    return {
      id: this._extractId(url),
      name,
      gender,
      birthYear: birth_year,
      eyeColor: eye_color,
      mass,
      height
    }
  }

  _transformPlanet = ({ name, population, rotation_period, diameter, url }) => {
    return {
      id: this._extractId(url),
      name,
      population,
      rotationPeriod: rotation_period,
      diameter
    }
  }

  _transformStarship = ({ name, model, starship_class, max_atmosphering_speed, hyperdrive_rating, passengers, cost_in_credits, url }) => {
    return {
      id: this._extractId(url),
      name,
      model,
      passengers,
      starshipClass: starship_class,
      maxAtmospheringSpeed: max_atmosphering_speed,
      costInCredits: cost_in_credits,
      hyperdriveRating: hyperdrive_rating
    }
  }
}
