// Learn more: https://github.com/testing-library/jest-dom
import { server } from './app/mock/server.ts'
import "@testing-library/jest-dom";

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())