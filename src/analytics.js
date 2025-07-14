import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-7PJC948DZB");
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
