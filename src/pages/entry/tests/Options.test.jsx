import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('Displays image for each scoop option from the server', async () => {
  render(<Options optionTypes='scoops' />);

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const alText = scoopImages.map((element) => element.alt);
  expect(alText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});
