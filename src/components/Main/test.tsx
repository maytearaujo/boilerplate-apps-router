import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Main from '.'

describe('<Main />', () => {
  it('Should render heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render the background color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })

  it('Should render the font color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ color: '#ffffff' })
  })
})
