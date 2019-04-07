import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

global.mockStore = configureMockStore([thunk]);
global.fetch = require('whatwg-fetch');
global.fetchMock = require('fetch-mock');

global.window = {
  grecaptcha: {
    reset: jest.fn()
  },
  scrollTo: jest.fn()
};

global.document = {
  location: {
    search: '/somewhere'
  },
  createElement: jest.fn(element => ({
    id: ''
  })),
  getElementById: jest.fn(),
  getElementsByTagName: jest.fn(tag => ({
    item: jest.fn(index => ({
      appendChild: jest.fn()
    }))
  })),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};
