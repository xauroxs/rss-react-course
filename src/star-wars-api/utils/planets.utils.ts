import { PlanetsResponse } from '../types/star-wars-api.types';

export const getAllPlanets = async (
  page: number = 1
): Promise<PlanetsResponse> => {
  const url = `https://swapi.dev/api/planets/?page=${page}`;

  const response = await fetch(url);
  const planetsResponse: PlanetsResponse = await response.json();

  return planetsResponse;
};

export const searchPlanets = async (
  searchTerm: string = '',
  page: number = 1
): Promise<PlanetsResponse> => {
  const url = `https://swapi.dev/api/planets/?search=${searchTerm}&page=${page}`;

  const response = await fetch(url);
  const planetsResponse: PlanetsResponse = await response.json();

  return planetsResponse;
};
