export interface Iuser {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Ipost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
