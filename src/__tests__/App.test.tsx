import { render, screen } from '@testing-library/react'

import { SwitchTheme } from '../components/switchTheme'

describe('SwitchTheme', () => {
  test('Renders main page correctly', async () => {
    render(<SwitchTheme />)
    const switchButton = screen.getByRole('switch')
    expect(switchButton.innerHTML).toEqual(
      '<span class="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-gray-100"></span>'
    )
  })
})
