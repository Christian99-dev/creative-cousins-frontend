import { staticData } from "./endpoints";

// chose implementation
const endpoints = staticData;

// fetch
export const fetchLogo = async () => {
    return fetch(endpoints.logo);
}

export const fetchWelcome = async () => {
    return fetch(endpoints.welcome);
}

export const fetchAboutUs = async () => {
    return fetch(endpoints.aboutUs);
};

export const fetchTeam = async () => {
  return fetch(endpoints.team);
};

export const fetchServices = async () => {
  return fetch(endpoints.services);
};

export const fetchGallery = async () => {
  return fetch(endpoints.gallery);
};

export const fetchContact = async () => {
  return fetch(endpoints.contact);
};

export const fetchFooter = async () => {
  return fetch(endpoints.footer);
};

