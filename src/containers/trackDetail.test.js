import renderer from 'react-test-renderer';

import TrackDetail from './trackDetail';

test('Tract detail element', () => {
  let track = {
    name: "music track name",
    duration: 200,
    artist: 'His name'
  };

  const component = renderer.create(
    <TrackDetail track={track} />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
