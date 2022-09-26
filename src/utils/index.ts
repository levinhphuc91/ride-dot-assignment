import breedMapping from './breed-mapping'

export function formatBreedName(name: string): string {
  // There are two reasons to use breed mappnig as configuration file
  // 1. Some scenarios name from model is different format from breed of api like
  // Model: houndblood, API hound/blood
  // 2. Because breed is not frequency update hence it will be optimized instead calling getAllBreed all time
  // Downside need to manually update or configuration 
  let breedName = name.split(',')[0];
  const formatName = breedName.replace(/ /g,"");
  for (const [key, value] of Object.entries(breedMapping)) {
    if(formatName.includes(key)) {
      const subBreed = formatName.replace(key, "");
      const idx = (value as string[]).indexOf(subBreed);
      if(idx > -1) {
        breedName = `${key}/${value[idx]}`;
      }
    }
  }
  return breedName;
}
