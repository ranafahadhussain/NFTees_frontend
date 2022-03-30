interface NavigationTab {
  name: string;
  route: string;
  disabled: boolean;
  diffColor?: boolean;
}

const NavigationTabArray: NavigationTab[] = [
  {
    name: "Collection",
    route: "/collection",
    disabled: false,
  },
  {
    name: "Community",
    route: "/community",
    disabled: false,
  },
  {
    name: "How it Work ",
    route: "/work",
    disabled: false,
  },
  {
    name: "About Us ",
    route: "/about",
    disabled: false,
  },
  {
    name: "Roadmap",
    route: "/roadmap",
    disabled: false,
  }
];

export default NavigationTabArray;
