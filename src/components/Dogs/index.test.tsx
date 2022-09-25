import { render, screen } from '@testing-library/react';
import Dogs from './index';

test('render empty data', () => {
  render(<Dogs data={[]} />);
  const element = screen.getByText(
    /Can not find dogs same bread, please upload another image/i
  );
  expect(element).toBeInTheDocument();
});

test('render gallery', async () => {
  render(
    <Dogs
      data={[
        {
          original:
            'https://images.dog.ceo/breeds/poodle-toy/n02113624_1178.jpg',
          thumbnail:
            'https://images.dog.ceo/breeds/poodle-toy/n02113624_1178.jpg',
        },
        {
          original:
            'https://images.dog.ceo/breeds/poodle-toy/n02113624_1302.jpg',
          thumbnail:
            'https://images.dog.ceo/breeds/poodle-toy/n02113624_1302.jpg',
        },
      ]}
    />
  );
  const elements = screen.getAllByLabelText(/Go to Slide/i, { selector: 'button' });
  // Because we have thumbnails, the element will be time 2
  expect(elements).toHaveLength(4); 
});
