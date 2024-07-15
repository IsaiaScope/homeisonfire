
import { hc } from "hono/client";
import { ApiRoute } from "@backend/server";

const client = hc<ApiRoute>('/');

export const api = client.api;