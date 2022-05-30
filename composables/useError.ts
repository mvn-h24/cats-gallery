import {useState} from "#imports";
import {ErrorResponse} from "~~/types/cats-app";

export const useResponseError = () => useState<Array<ErrorResponse>>('error-state', () => []);