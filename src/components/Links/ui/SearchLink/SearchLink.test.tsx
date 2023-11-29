import {render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchLink } from "./SearchLink";

describe('Search link test', () => {
  test('Navigate path test', () => {
    render(
      <MemoryRouter>
        <SearchLink to="/company/AAPL">Apple</SearchLink>
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: 'Apple' })).toHaveAttribute('href', '/company/AAPL')
  })
})