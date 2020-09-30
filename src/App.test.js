import ReactDOM from 'react-dom';
import App from './containers/App';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';
import {Provider} from 'react-redux';

beforeEach(() => {
})
const store = createStore(Reducers, applyMiddleware(thunk));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider> , div);
  ReactDOM.unmountComponentAtNode(div);
});
