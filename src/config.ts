type _Config = {
  RBHId: string;
};

const Config: _Config = {
  RBHId: process.env.REACT_APP_RBH_ID || '',
};

export default Config;
