var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster: 'https://i.kym-cdn.com/photos/images/original/000/683/519/f16.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'https://www.filmw.org/wp-content/uploads/2018/06/kopya-kopya-klonla-izle-720p-33.jpg'
  },
  {
    id: 3,
    title: 'Wesele',
    desc: 'Tragikomiczny obraz polskiego społeczeństwa',
    poster: 'https://ssl-gfx.filmweb.pl/po/40/98/124098/7000793.3.jpg'
  }
];


var Movie = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,

  },
  render: function () {
    return React.createElement('li', {},
      React.createElement('h2', {}, this.props.data.title),
      React.createElement('p', {}, this.props.data.desc),
      React.createElement('img', {src: this.props.data.poster}))
  }
});

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {key: movie.id, data: movie})
    ;
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));