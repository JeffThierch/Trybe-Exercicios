import './styles/App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestPostsFromApi } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSelect: 'reactjs',
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    const { inputSelect } = this.state;
    const { requestPostsApi } = this.props;
    requestPostsApi(inputSelect);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, async () => {
      const { inputSelect } = this.state;
      const { requestPostsApi } = this.props;
      requestPostsApi(inputSelect);
    });
  };

  renderPosts = () => {
    const { error, posts } = this.props;

    if (error) {
      return 'Tivemos um Problema, tente novamente!';
    }

    if (posts.length === 0) {
      return 'Nenhum Resultado Encontrado';
    }

    return (
      <ul className="ul-container">
        {
          posts.map(({ title, id, url }) => (
            <li key={id} className="post-list-item">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="post-link"
              >
                {title}
              </a>
            </li>
          ))
        }
      </ul>
    );
  };

  render() {
    const { isLoading } = this.props;
    return (
      <main className="App">
        <div className="title-seach-container">
          <h1>Tryddit</h1>
          <section>
            <select className="post-select" name="inputSelect" onChange={this.handleChange}>
              <option value="reactjs">Reactjs</option>
              <option value="frontend">Frontend</option>
            </select>
          </section>
        </div>
        <section className="post-list-container">
          {isLoading ? 'Carregando...' : this.renderPosts()}

        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
  error: state.postsReducer.error,
  isLoading: state.postsReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  requestPostsApi: (search) => dispatch(requestPostsFromApi(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  requestPostsApi: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
