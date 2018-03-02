import React from 'react';
import ReactDOM from 'react-dom';
import PersonalPage from './PersonalPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonalPage/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
