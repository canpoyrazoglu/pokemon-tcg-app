// full disclosure: I've used GPT-4o for generating the types from the API result

type PokemonCard = {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    level?: string;
    hp: string;
    types: string[];
    evolvesFrom?: string;
    evolvesTo?: string[];
    abilities?: Ability[];
    attacks: Attack[];
    weaknesses: Weakness[];
    resistances?: Resistance[];
    retreatCost?: string[];
    convertedRetreatCost?: number;
    set: CardSet;
    number: string;
    artist: string;
    rarity: string;
    flavorText?: string;
    nationalPokedexNumbers: number[];
    legalities: Legalities;
    images: Images;
    tcgplayer?: TcgPlayer;
    cardmarket?: CardMarket;
  };
  
  type Ability = {
    name: string;
    text: string;
    type: string;
  };
  
  type Attack = {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
  };
  
  type Weakness = {
    type: string;
    value: string;
  };
  
  type Resistance = {
    type: string;
    value: string;
  };
  
  type CardSet = {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: Legalities;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: SetImages;
  };
  
  type Legalities = {
    unlimited: string;
    expanded?: string;
  };
  
  type SetImages = {
    symbol: string;
    logo: string;
  };
  
  type Images = {
    small: string;
    large: string;
  };
  
  type TcgPlayer = {
    url: string;
    updatedAt: string;
    prices: Prices;
  };
  
  type Prices = {
    holofoil?: PriceDetails;
    reverseHolofoil?: PriceDetails;
    normal?: PriceDetails;
  };
  
  type PriceDetails = {
    low: number | null;
    mid: number | null;
    high: number | null;
    market: number | null;
    directLow: number | null;
  };
  
  type CardMarket = {
    url: string;
    updatedAt: string;
    prices: CardMarketPrices;
  };
  
  type CardMarketPrices = {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    germanProLow: number;
    suggestedPrice: number;
    reverseHoloSell: number;
    reverseHoloLow: number;
    reverseHoloTrend: number;
    lowPriceExPlus: number;
    avg1: number;
    avg7: number;
    avg30: number;
    reverseHoloAvg1: number;
    reverseHoloAvg7: number;
    reverseHoloAvg30: number;
  };