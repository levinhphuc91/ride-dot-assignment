export function formatBreedName(name: string): string {
  // Some name like 'affenpinscher, monkey pinscher, monkey dog', we will get the first name by split ,
  const splitName = name.split(',')[0];
  return splitName.split(' ').reverse().join('/');
}
