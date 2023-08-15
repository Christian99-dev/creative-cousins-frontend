import { staticData } from "./endpoints";

// chose implementation
const endpoints = staticData;

export const fetchWelcome = async () => {
    return fetch(endpoints.welcome);
}

export const fetchAboutUs = async () => {
    return fetch(endpoints.aboutUs);
};

export const fetchTeam = async () => {
  return fetch(endpoints.team);
};


