import { formatBreedName } from './index';

test('format bread name do not have space', () => {
  expect(formatBreedName('affenpinscher')).toBe('affenpinscher');
});

test('format bread name has space', () => {
  expect(formatBreedName('toy poodle')).toBe('poodle/toy');
});