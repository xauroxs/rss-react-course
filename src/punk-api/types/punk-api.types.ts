type MashTemp = {
  temp: {
    value: number;
    unit: string;
  };
  duration: number;
};

type MaltIngredient = {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
};

type HopsIngredient = {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add: string;
  attribute: string;
};

export type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  method: {
    mash_temp: MashTemp[];
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist: string;
  };
  ingredients: {
    malt: MaltIngredient[];
    hops: HopsIngredient[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};

export type BeersResponse = Beer[];
