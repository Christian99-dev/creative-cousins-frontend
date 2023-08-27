import { useFetch } from "../services/Hooks/useFetch";
import { staticData } from "./endpoints";

// chose implementation
export const endpoints = staticData;

export const FetchLogo = () => {
    return useFetch(endpoints.logo);
}

export const FetchWelcome = () => {
    return useFetch(endpoints.welcome);
}

export const FetchAboutUs = () => {
    return useFetch(endpoints.aboutUs);
};

export const FetchTeam = () => {
  return useFetch(endpoints.team);
};

export const FetchServices = () => {
  return useFetch(endpoints.services);
};

export const FetchGallery = () => {
  return useFetch(endpoints.gallery);
};

export const FetchContact = () => {
  return useFetch(endpoints.contact);
};

export const FetchFooter = () => {
  return useFetch(endpoints.footer);
};

export const FetchPolicy = () => {
  return useFetch(endpoints.policy);
};


